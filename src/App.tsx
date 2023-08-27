import './App.css';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import GoodMorning from './features/workday/GoodMorning';
import DayzIntlProvider from './lang/DayzIntlProvider';
import DayzThemeProvider from './theming/DayzThemeProvider';
import {QueryClient, QueryClientProvider} from 'react-query';
import DayOverview from './features/workday/DayOverview';

/**
 * Main App Compnent
 * Includes Routes
 * @return App component
 */
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DayzIntlProvider>
        <DayzThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout/>}>
                <Route index element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<GoodMorning/>} />
                <Route path="/dayoverview" element={<DayOverview/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DayzThemeProvider>
      </DayzIntlProvider>
    </QueryClientProvider>
  );
}

export default App;
