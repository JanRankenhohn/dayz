import './App.css';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import DayzIntlProvider from './lang/DayzIntlProvider';
import DayzThemeProvider from './theming/DayzThemeProvider';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Break, DayOverview, Doing, Done, GoodMorning} from './features/workday';
import {DayReview, Timesheet} from './features/timesheet';
import {Edit} from './features/workitem';

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
                <Route path="/timesheet" element={<Timesheet/>} />
                <Route path="/dayreview" element={<DayReview/>} />
                <Route path="/day">
                  <Route index path="doing" element={<Doing/>} />
                  <Route path="done" element={<Done/>} />
                  <Route path="create" element={<Edit/>} />
                  <Route path="break" element={<Break/>} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </DayzThemeProvider>
      </DayzIntlProvider>
    </QueryClientProvider>
  );
}

export default App;
