'use client';

import React, { useState } from 'react';
import { PromptFormProps } from '@/types';

/**
 * PromptForm component for inputting seed concepts to generate creative prompts.
 *
 * Requirements:
 * - Form must include a text input field for seed concepts/ideas
 * - Form must include a submit button to generate the initial prompt
 * - Form may include example suggestions for inspiration
 * - Must display loading indicator during API calls
 */
export default function PromptForm({
  onSubmit,
  isLoading = false,
  error = null,
  className = '',
}: PromptFormProps) {
  const [seedConcept, setSeedConcept] = useState('');
  
  // Example suggestions for inspiration
  const examples = [
    'forest ambience',
    'ocean waves',
    'distant thunder',
    'morning birdsong',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (seedConcept.trim()) {
      onSubmit(seedConcept);
    }
  };

  const handleExampleClick = (example: string) => {
    setSeedConcept(example);
  };

  return (
    <div className={`w-full mx-auto ${className}`}>
      {error && (
        <div className="mb-4 p-3 bg-red-600 bg-opacity-10 border border-red-600 text-red-600 rounded-[12px] text-sm">
          <p className="font-medium">Error</p>
          <p>{error}</p>
          <button
            type="button"
            onClick={() => seedConcept.trim() && onSubmit(seedConcept)}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded-md text-xs hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label 
            htmlFor="seedConcept" 
            className="font-['EB_Garamond',serif] text-[20px] text-[#1b2f1d]"
          >
            Enter seed concepts for your ambient music:
          </label>
          <textarea
            id="seedConcept"
            name="seedConcept"
            value={seedConcept}
            onChange={(e) => setSeedConcept(e.target.value)}
            placeholder="e.g., forest ambience, gentle rain, meditation"
            className="
              p-3 
              border 
              border-[#62827c] 
              rounded-[12px] 
              bg-[#e3e6d0] 
              text-[#1b2f1d] 
              font-['EB_Garamond',serif]
              min-h-[100px]
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#62827c]
            "
            required
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#1b2f1d] opacity-80">
            Try one of these examples:
          </p>
          <div className="flex flex-wrap gap-2">
            {examples.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => handleExampleClick(example)}
                className="
                  text-sm 
                  px-3 
                  py-1 
                  bg-[#62827c] 
                  text-white 
                  rounded-[999px] 
                  hover:bg-[#4d6661] 
                  transition-colors
                "
              >
                {example}
              </button>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !seedConcept.trim()}
          className="
            mt-4
            py-3
            px-6
            bg-[#62827c]
            text-white
            rounded-[12px]
            font-medium
            hover:bg-[#4d6661]
            transition-colors
            disabled:opacity-50
            disabled:cursor-not-allowed
            relative
          "
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <span className="mr-2 inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Generating...
            </span>
          ) : (
            'Generate Prompt'
          )}
        </button>
      </form>
    </div>
  );
}