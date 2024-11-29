export interface HeroStats {
  projects: string;
  clients: string;
  experience: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  stats: HeroStats;
  slides: CollectionEntry<'hero-slides'>[];
} 