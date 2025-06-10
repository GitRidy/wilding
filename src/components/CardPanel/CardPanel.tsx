'use client';

import React from 'react';
import { PromptCard } from '../PromptCard';
import { DirectionButton } from '../DirectionButton';
import { DirectionButtonRow } from '../DirectionButtonRow';
import styles from './CardPanel.module.css';

export interface CardPanelProps {
  prompt: string;
  isEditing?: boolean;
  isFavorited?: boolean;
  onEdit?: () => void;
  onFavorite?: () => void;
  onClear?: () => void;
  onDirectionClick?: (direction: string) => void;
  className?: string;
}

/**
 * CardPanel component that combines PromptCard and DirectionButtonRow
 * into a cohesive card panel interface for prompt evolution
 */
export default function CardPanel({
  prompt,
  isEditing = false,
  isFavorited = false,
  onEdit,
  onFavorite,
  onClear,
  onDirectionClick,
  className = '',
}: CardPanelProps) {
  const handleDirectionClick = (direction: string) => {
    console.log(`${direction} direction clicked`);
    if (onDirectionClick) {
      onDirectionClick(direction);
    }
  };

  return (
    <div className={`${styles.cardPanel} ${className}`}>
      {/* Main Prompt Card */}
      <div className={styles.promptCardContainer}>
        <PromptCard
          prompt={prompt}
          isEditing={isEditing}
          isFavorited={isFavorited}
          onEdit={onEdit}
          onFavorite={onFavorite}
          onClear={onClear}
        />
      </div>

      {/* Direction Button Row */}
      <div className={styles.directionButtonContainer}>
        <DirectionButtonRow>
          <DirectionButton
            variant="wild"
            label="Wild"
            onClick={() => handleDirectionClick('wild')}
          />
          <DirectionButton
            variant="pure"
            label="Pure"
            onClick={() => handleDirectionClick('pure')}
          />
          <DirectionButton
            variant="earthy"
            label="Earthy"
            onClick={() => handleDirectionClick('earthy')}
          />
          <DirectionButton
            variant="classy"
            label="Classy"
            onClick={() => handleDirectionClick('classy')}
          />
          <DirectionButton
            variant="emotive"
            label="Emotive"
            onClick={() => handleDirectionClick('emotive')}
          />
          <DirectionButton
            variant="complex"
            label="Complex"
            onClick={() => handleDirectionClick('complex')}
          />
        </DirectionButtonRow>
      </div>
    </div>
  );
}