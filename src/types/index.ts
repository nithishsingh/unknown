import type { CollectionEntry } from 'astro:content';
import type { HTMLAttributes } from 'astro/types';
import type { Config } from '@/config/types';

// Re-export config types
export type { Config } from '@/config/types';

// Base props interface
export interface BaseProps extends HTMLAttributes<'div'> {
  class?: string;
}

// Hero component types
export interface HeroStats {
  projects: string;
  clients: string;
  experience: string;
}

export interface HeroProps extends BaseProps {
  title: string;
  subtitle: string;
  description: string;
  stats: HeroStats;
  slides: CollectionEntry<'hero-slides'>[];
}

// Component types
export interface CardProps extends BaseProps {
  title: string;
  description: string;
  icon?: string;
}

export interface ThemeProps {
  theme: 'light' | 'dark';
  onChange: (theme: 'light' | 'dark') => void;
}

export interface CarouselProps extends BaseProps {
  slides: Array<{
    id: string;
    image: ImageMetadata;
    title: string;
    description: string;
  }>;
}

// AOS types
export interface AosOptions {
  duration?: number;
  easing?: string;
  once?: boolean;
  mirror?: boolean;
  anchorPlacement?: string;
  offset?: number;
  delay?: number;
  disable?: boolean | (() => boolean);
  throttleDelay?: number;
  debounceDelay?: number;
  disableMutationObserver?: boolean;
}

export interface AOS {
  init(options?: AosOptions): void;
  refresh(): void;
  refreshHard(): void;
} 