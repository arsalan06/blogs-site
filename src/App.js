import './App.css';
import { ThemeProvider } from '@mui/material';
import themes from './themes';
import ThemeRoutes from './routes';
import NavigationScroll from './Layout/NavigationScroll';
function App() {
  return (
    <div>
      <ThemeProvider theme={themes()}>
        <NavigationScroll>
          <ThemeRoutes />
        </NavigationScroll>
      </ThemeProvider>
    </div>
  );
}

export default App;
