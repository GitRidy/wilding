// Type definitions for the Wilding Prompt Evolution application

/**
 * Props for the PromptForm component
 */
export interface PromptFormProps {
  /**
   * Callback function for when the form is submitted
   */
  onSubmit: (seedConcept: string) => void;
  
  /**
   * Flag indicating if the form is in a loading state
   */
  isLoading?: boolean;
  
  /**
   * Additional CSS classes to apply to the component
   */
  className?: string;
}

/**
 * Props for the PromptCard component
 */
export interface PromptCardProps {
  /**
   * The prompt text to display
   */
  prompt: string;
  
  /**
   * Flag indicating if the prompt is in editing mode
   */
  isEditing?: boolean;
  
  /**
   * Flag indicating if the prompt is favorited
   */
  isFavorited?: boolean;
  
  /**
   * Callback function for when the edit button is clicked
   */
  onEdit?: () => void;
  
  /**
   * Callback function for when the favorite button is clicked
   */
  onFavorite?: () => void;
  
  /**
   * Callback function for when the clear button is clicked
   */
  onClear?: () => void;
  
  /**
   * Additional CSS classes to apply to the component
   */
  className?: string;
}

/**
 * Props for the ClearButton component
 */
export interface ClearButtonProps {
  /**
   * Callback function for when the clear button is clicked
   */
  onClear: () => void;
  
  /**
   * Additional CSS classes to apply to the component
   */
  className?: string;
}