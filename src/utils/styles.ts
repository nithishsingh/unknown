// Common style utilities

export const getTextGradient = (direction = 'to-r', from = 'primary', to = 'secondary') => {
  return `bg-gradient-${direction} from-${from}-500 to-${to}-500 bg-clip-text text-transparent`;
};

export const getSectionClasses = (background?: 'light' | 'dark' | 'primary' | 'gradient') => {
  switch (background) {
    case 'light':
      return 'bg-gray-50 dark:bg-dark-surface';
    case 'dark':
      return 'bg-gray-900 dark:bg-dark-surface-soft';
    case 'primary':
      return 'bg-primary-50 dark:bg-primary-900/10';
    case 'gradient':
      return 'bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20';
    default:
      return 'bg-white dark:bg-dark-bg';
  }
};

export const getContainerClasses = (size?: 'sm' | 'md' | 'lg' | 'xl' | 'full') => {
  const base = 'mx-auto px-4 sm:px-6 lg:px-8';
  switch (size) {
    case 'sm':
      return `${base} max-w-3xl`;
    case 'md':
      return `${base} max-w-5xl`;
    case 'lg':
      return `${base} max-w-7xl`;
    case 'xl':
      return `${base} max-w-[96rem]`;
    case 'full':
      return base;
    default:
      return `${base} max-w-7xl`;
  }
};
