import {
  AppShell,
  Burger,
  Group,
  Tabs,
  Drawer,
  Box,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { ProfileAside } from "./ProfileAside";
import { About } from "./sections/About";
import { WorkExperience } from "./sections/WorkExperience";
import { Portfolio } from "./sections/Portfolio";
import { Contact } from "./sections/Contact";
import { TABS, UI_CONSTANTS } from "../constants/ui";
import { usePortfolio } from "../hooks/use-portfolio";
// import { Logo } from "../utils/logo";

import { useState, useEffect } from "react";
// Component mapping for DRY principle
const SECTION_COMPONENTS = {
  about: About,
  experience: WorkExperience,
  portfolio: Portfolio,
  contact: Contact,
} as const;

export function PortfolioApp() {
  const { activeTab, setActiveTab, opened, toggle, close, isMobile } = usePortfolio();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [showFooter, setShowFooter] = useState<boolean>(false);

  const renderContent = () => {
    const Component = SECTION_COMPONENTS[activeTab as keyof typeof SECTION_COMPONENTS] || About;
    return <Component />;
  };

  const handleScroll = (): void => {
    const scrollTop: number = window.scrollY;
    const windowHeight: number = window.innerHeight;
    const docHeight: number = document.documentElement.scrollHeight;
    setShowFooter(scrollTop + windowHeight >= docHeight - 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppShell
      header={{ height: UI_CONSTANTS.HEADER_HEIGHT }}
      navbar={{
        width: UI_CONSTANTS.SIDEBAR_WIDTH,
        breakpoint: "md",
        collapsed: { mobile: true, desktop: false },
      }}
      padding={UI_CONSTANTS.SPACING.EXTRA_LARGE}
    >
      <AppShell.Header>
        <Group h="100%" w="100%" px={UI_CONSTANTS.SPACING.MEDIUM} justify="space-between">
          <Group>
            {isMobile && (
              <Burger opened={opened} onClick={toggle} size={UI_CONSTANTS.SPACING.SMALL} />
            )}
            <img src="ama_logo_simple.png" style={{ width: 80, height: 40 }} />
            {/* <Logo width={100} height={50} /> */}
          </Group>

          <ActionIcon
            onClick={toggleColorScheme}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
          >
            {colorScheme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
          </ActionIcon>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p={UI_CONSTANTS.SPACING.MEDIUM}>
        <ProfileAside />
      </AppShell.Navbar>

      <Drawer
        opened={opened}
        onClose={close}
        size={`${UI_CONSTANTS.SIDEBAR_WIDTH}px`}
        padding={UI_CONSTANTS.SPACING.MEDIUM}
        hiddenFrom="md"
        position="left"
      >
        <ProfileAside />
      </Drawer>

      <AppShell.Main
        mr={{ base: UI_CONSTANTS.SPACING.MEDIUM, md: UI_CONSTANTS.SPACING.EXTRA_LARGE }}
      >
        <Box
          mt={UI_CONSTANTS.SPACING.MEDIUM}
          p={UI_CONSTANTS.SPACING.MEDIUM}
          bg="var(--mantine-color-body)"
          style={{
            boxShadow: "var(--mantine-shadow-lg)",
            borderRadius: "var(--mantine-radius-md)",
            border: "1px solid var(--mantine-color-default-border)",

            overflowY: "hidden",
          }}
        >
          <Tabs value={activeTab} onChange={setActiveTab} variant="pills" orientation="horizontal">
            <Tabs.List mb={UI_CONSTANTS.SPACING.MEDIUM} justify="flex-end">
              {TABS.map((tab) => (
                <Tabs.Tab key={tab.value} value={tab.value}>
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            <Tabs.Panel value={activeTab}>{renderContent()}</Tabs.Panel>
          </Tabs>
        </Box>
        {/* Scroll-revealed footer */}
        {showFooter && (
          <Box
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              fontSize: "0.875rem", // optional, replaces Text size
              color: "var(--mantine-color-text)",
            }}
          >
            © 2025 Alfredo III Amadeo. All rights reserved.
          </Box>
        )}
      </AppShell.Main>
    </AppShell>
  );
}
