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
 */
export default function PromptForm({
  onSubmit,
  isLoading = false,
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
    <div className={`w-full max-w-[380px] mx-auto ${className}`}>
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
          "
        >
          {isLoading ? 'Generating...' : 'Generate Prompt'}
        </button>
      </form>
    </div>
  );
}