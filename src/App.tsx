import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { AppRouter } from './lib/AppRouter';

function App() {
  return (
    <>
      <ColorSchemeScript />
      <MantineProvider>
        <ModalsProvider>
          <Notifications />
          <AppRouter />
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}

export default App;
