'use client';

import { useState, useEffect } from 'react';
import PromptCard from '@/components/PromptCard';
import PromptForm from '@/components/PromptForm';
import ClearButton from '@/components/ClearButton';
import { generatePrompt } from '@/lib/api';
import { savePrompt, getPrompt, clearPrompt } from '@/lib/localStorage';

export default function Home() {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Load prompt from localStorage on component mount
  useEffect(() => {
    const savedPrompt = getPrompt();
    if (savedPrompt) {
      setPrompt(savedPrompt);
    }
  }, []);

  const handleSubmit = async (seedConcept: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Call the API service to generate a prompt
      const generatedPrompt = await generatePrompt(seedConcept);
      
      setPrompt(generatedPrompt);
      
      // Save to localStorage
      savePrompt(generatedPrompt);
    } catch (error: any) {
      console.error('Error generating prompt:', error);
      
      // Enhanced error handling with specific messages
      if (error.message?.includes('status 400')) {
        setError('Missing or invalid input. Please provide a seed concept.');
      } else if (error.message?.includes('status 500')) {
        setError('Server error occurred. Please try again later.');
      } else if (error.message?.includes('Failed to fetch') || error.message?.includes('Network')) {
        setError('Network error. Please check your connection and try again.');
      } else if (error.message?.includes('timeout') || error.message?.includes('Timeout')) {
        setError('Request timed out. Please try again later.');
      } else {
        setError(`Failed to generate prompt: ${error.message || 'Unknown error'}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setPrompt('');
    clearPrompt();
  };

  return (
    <div className="min-h-screen bg-[#132114] text-[#e3e6d0] relative">
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
          <div className="w-10 h-10 border-4 border-[#62827c] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <header className="w-full mb-8 text-center">
          <h1 className="text-3xl font-['EB_Garamond',serif] text-[#e3e6d0] mb-2">
            Ambient Prompt
          </h1>
          <p className="text-[#c8bf9b] text-lg">
            Generate creative prompts for your ambient music
          </p>
        </header>

        <main className="w-full flex flex-col items-center justify-center">
          {prompt ? (
            <div className="w-full flex flex-col items-center">
              <PromptCard prompt={prompt} />
              <div className="mt-4">
                <ClearButton onClear={handleClear} />
              </div>
            </div>
          ) : (
            <PromptForm
              onSubmit={handleSubmit}
              isLoading={isLoading}
              error={error}
            />
          )}
        </main>
      </div>
    </div>
  );
}
