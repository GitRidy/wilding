import { NextResponse } from 'next/server';

/**
 * GET handler for the /api/initial-prompt endpoint
 * Generates a creative prompt based on the provided seed concept
 * 
 * @param request - The incoming request object
 * @returns A JSON response with the generated prompt
 */
export async function GET(request: Request) {
  try {
    // Get the URL from the request
    const url = new URL(request.url);
    
    // Extract the concept query parameter
    const seedConcept = url.searchParams.get('concept');
    
    // Check if the concept parameter is provided
    if (!seedConcept) {
      // Return a 400 Bad Request if the concept is missing
      return NextResponse.json(
        { error: 'Missing required parameter: concept' },
        { status: 400 }
      );
    }
    
    // In a real application, this would call an external API or use a model
    // to generate a creative prompt. For now, we'll use a template.
    const generatedPrompt = generateCreativePrompt(seedConcept);
    
    // Return the generated prompt as JSON
    return NextResponse.json({ prompt: generatedPrompt });
  } catch (error) {
    console.error('Error in initial-prompt API:', error);
    
    // Return a 500 Internal Server Error if something goes wrong
    return NextResponse.json(
      { error: 'Failed to generate prompt' },
      { status: 500 }
    );
  }
}

/**
 * Helper function to generate a creative prompt based on a seed concept
 * In a production environment, this would be replaced with a more sophisticated
 * prompt generation system or external API call
 * 
 * @param seedConcept - The user's input seed concept
 * @returns A generated creative prompt
 */
function generateCreativePrompt(seedConcept: string): string {
  // Array of template structures for variety
  const templates = [
    `Create an ambient soundscape that evokes the feeling of ${seedConcept}, with gentle textures and evolving harmonies that create a sense of space and tranquility.`,
    `Compose a meditative piece inspired by ${seedConcept}, using subtle layers of sound that gradually unfold and intertwine, creating an immersive atmosphere.`,
    `Develop an ambient composition that captures the essence of ${seedConcept}, using minimal melodic elements and rich atmospheric textures to create a contemplative sonic environment.`,
    `Design a sonic journey through ${seedConcept}, with drifting tones and organic textures that transport the listener to an ethereal emotional landscape.`
  ];
  
  // Select a random template
  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex];
}