/**
 * API service for the Ambient Prompt application
 * Handles API calls for prompt generation
 */

/**
 * Generates a creative prompt based on the provided seed concept
 * @param seedConcept - The user's input seed concept
 * @returns The generated prompt
 * @throws Error if the API call fails
 */
export async function generatePrompt(seedConcept: string): Promise<string> {
  try {
    // Encode the seed concept to handle special characters in the URL
    const encodedSeedConcept = encodeURIComponent(seedConcept);
    
    // Create an AbortController for timeout handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    // Make the API call to the initial prompt endpoint with timeout
    const response = await fetch(`/api/initial-prompt?concept=${encodedSeedConcept}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    }).finally(() => {
      // Clear the timeout regardless of success or failure
      clearTimeout(timeoutId);
    });

    // Check if the response is successful
    if (!response.ok) {
      // Try to parse the error response
      let errorMessage;
      try {
        // Attempt to parse the JSON error response
        const errorData = await response.json();
        errorMessage = errorData.error || `API request failed with status ${response.status}`;
      } catch (e) {
        // If parsing fails, use the status text
        errorMessage = `API request failed with status ${response.status}: ${response.statusText || 'Unknown error'}`;
      }
      
      // Throw an error with the parsed message
      throw new Error(errorMessage);
    }

    // Parse the JSON response
    const data = await response.json();
    
    // Return the generated prompt from the response
    return data.prompt;
  } catch (error: any) {
    // Log the error for debugging
    console.error('Error generating prompt:', error);
    
    // Check if this is an AbortError (timeout)
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again later.');
    }
    
    // Re-throw the error to be handled by the caller
    throw error;
  }
}