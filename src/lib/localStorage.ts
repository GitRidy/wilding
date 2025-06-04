export const savePrompt = (prompt: string) => {
  try {
    localStorage.setItem('currentPrompt', prompt);
  } catch (error) {
    console.error('Error saving prompt to local storage:', error);
  }
};

export const getPrompt = (): string | null => {
  try {
    return localStorage.getItem('currentPrompt');
  } catch (error) {
    console.error('Error retrieving prompt from local storage:', error);
    return null;
  }
};

export const clearPrompt = () => {
  try {
    localStorage.removeItem('currentPrompt');
  } catch (error) {
    console.error('Error clearing prompt from local storage:', error);
  }
};