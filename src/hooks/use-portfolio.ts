import { useState, useEffect, useCallback } from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { UI_CONSTANTS } from '../constants/ui';
import { PortfolioPaths } from '../types/paths';

// Map URL paths to tab values
const PATH_TO_TAB_MAP = {
  [PortfolioPaths.ABOUT]: 'about',
  [PortfolioPaths.EXPERIENCE]: 'experience',
  [PortfolioPaths.PORTFOLIO]: 'portfolio',
  [PortfolioPaths.CONTACT]: 'contact',
} as const;

// Map tab values to URL paths
const TAB_TO_PATH_MAP = {
  about: PortfolioPaths.ABOUT,
  experience: PortfolioPaths.EXPERIENCE,
  portfolio: PortfolioPaths.PORTFOLIO,
  contact: PortfolioPaths.CONTACT,
} as const;

export function usePortfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const [opened, { toggle, close }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${UI_CONSTANTS.BREAKPOINTS.MOBILE})`);

  // Get current tab from URL
  const getCurrentTab = useCallback((): string => {
    const currentPath = location.pathname;
    const tab = PATH_TO_TAB_MAP[currentPath as keyof typeof PATH_TO_TAB_MAP];
    return tab || 'about';
  }, [location.pathname]);

  const [activeTab, setActiveTab] = useState<string>(getCurrentTab());

  // Update active tab when URL changes
  useEffect(() => {
    const newTab = getCurrentTab();
    setActiveTab(newTab);
  }, [getCurrentTab]);

  // Handle tab change with URL navigation
  const handleTabChange = (tabValue: string | null) => {
    if (!tabValue) return;
    
    const newPath = TAB_TO_PATH_MAP[tabValue as keyof typeof TAB_TO_PATH_MAP];
    if (newPath && newPath !== location.pathname) {
      navigate(newPath);
    }
  };

  return {
    activeTab,
    setActiveTab: handleTabChange,
    opened,
    toggle,
    close,
    isMobile,
  };
}

