'use client';

import { useState, useEffect } from 'react';
import PromptCard from '@/components/PromptCard';
import PromptForm from '@/components/PromptForm';
import ClearButton from '@/components/ClearButton';

export default function Home() {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Load prompt from localStorage on component mount
  useEffect(() => {
    const savedPrompt = localStorage.getItem('currentPrompt');
    if (savedPrompt) {
      setPrompt(savedPrompt);
    }
  }, []);

  const handleSubmit = async (seedConcept: string) => {
    setIsLoading(true);
    
    try {
      // This will be replaced with actual API call in T2.1
      // Simulating API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate a placeholder prompt based on the seed concept
      const generatedPrompt = `Create an ambient soundscape that evokes the feeling of ${seedConcept},
        with gentle textures and evolving harmonies that create a sense of space and tranquility.`;
      
      setPrompt(generatedPrompt);
      
      // Save to localStorage
      localStorage.setItem('currentPrompt', generatedPrompt);
    } catch (error) {
      console.error('Error generating prompt:', error);
      // Error handling will be implemented in T2.4
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setPrompt('');
    localStorage.removeItem('currentPrompt');
  };

  return (
    <div className="min-h-screen bg-[#132114] text-[#e3e6d0]">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <header className="w-full max-w-[380px] mb-8 text-center">
          <h1 className="text-3xl font-['EB_Garamond',serif] text-[#e3e6d0] mb-2">
            Ambient Prompt
          </h1>
          <p className="text-[#c8bf9b] text-lg">
            Generate creative prompts for your ambient music
          </p>
        </header>

        <main className="w-full flex flex-col items-center justify-center">
          {prompt ? (
            <div className="w-full max-w-[380px] flex flex-col items-center">
              <PromptCard prompt={prompt} />
              <div className="mt-4">
                <ClearButton onClear={handleClear} />
              </div>
            </div>
          ) : (
            <PromptForm
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          )}
        </main>
      </div>
    </div>
  );
}
