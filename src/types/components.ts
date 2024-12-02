export interface CardProps {
  title?: string;
  description?: string;
  icon?: string;
  class?: string;
}

export interface DialogProps {
  open?: boolean;
  closeOnClickOutside?: boolean;
}

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export interface GridProps {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface RatingProps {
  value?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}
