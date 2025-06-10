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
   * Error message to display if prompt generation fails
   */
  error?: string | null;
  
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

/**
 * Props for the CardHeader component
 */
export interface CardHeaderProps {
  /**
   * Child components to render in the header
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS classes to apply to the component
   */
  className?: string;
}

/**
 * Props for the CardFooter component
 */
export interface CardFooterProps {
  /**
   * Child components to render in the footer
   */
  children: React.ReactNode;
  
  /**
   * Alignment of footer content
   */
  alignment?: 'left' | 'center' | 'right';
  
  /**
   * Additional CSS classes to apply to the component
   */
  className?: string;
}

/**
 * Available evolve chip variants for DirectionButton
 */
export type DirectionVariant = 'wild' | 'pure' | 'earthy' | 'classy' | 'emotive' | 'complex';

/**
 * Props for the DirectionButton component
 */
export interface DirectionButtonProps {
  /**
   * The variant/theme of the direction button
   */
  variant: DirectionVariant;
  
  /**
   * The label text to display on the button
   */
  label: string;
  
  /**
   * Optional icon to display alongside the label
   */
  icon?: string;
  
  /**
   * Callback function for when the button is clicked
   */
  onClick?: () => void;
  
  /**
   * Flag indicating if the button is disabled
   */
  disabled?: boolean;
  
  /**
   * Flag indicating if the button is in a loading state
   */
  loading?: boolean;
  
  /**
   * Additional CSS classes to apply to the component
   */
  className?: string;
}

/**
 * Props for the DirectionButtonRow component
 */
export interface DirectionButtonRowProps {
  /**
   * Child DirectionButton components to render
   */
  children: React.ReactNode;
  
  /**
   * Layout mode for the button row
   */
  layout?: 'row' | 'grid';
  
  /**
   * Additional CSS classes to apply to the component
   */
  className?: string;
}