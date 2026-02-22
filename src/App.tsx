import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { AppRouter } from './lib/AppRouter';
import { theme, cssVariablesResolver } from './config/theme';

function App() {
  return (
    <>
      <ColorSchemeScript />
      <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <ModalsProvider>
          <Notifications />
          <AppRouter />
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}

export default App;
