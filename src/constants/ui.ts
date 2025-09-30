// Common UI constants to avoid magic numbers and strings
export const UI_CONSTANTS = {
  AVATAR_SIZE: 120,
  ICON_SIZE: {
    SMALL: 16,
    MEDIUM: 20,
  },
  SPACING: {
    SMALL: 'sm',
    MEDIUM: 'md',
    LARGE: 'lg',
    EXTRA_LARGE: 'xl',
  },
  BREAKPOINTS: {
    MOBILE: '768px',
  },
  SIDEBAR_WIDTH: 320,
  HEADER_HEIGHT: 60,
} as const;

export const TAB_CONFIG = {
  ABOUT: { value: 'about', label: 'About' },
  RESUME: { value: 'experience', label: 'Work Experience' },
  PORTFOLIO: { value: 'portfolio', label: 'Portfolio' },
  CONTACT: { value: 'contact', label: 'Contact' },
} as const;

export const TABS = Object.values(TAB_CONFIG);

