import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/Theme';
import ThemeBtn from './Componenets/ThemeBtn';
import Card from './Componenets/Card';

function App() {
  // State for theme mode
  const [ThemeMode, setThemeMode] = useState("light");

  // Function to switch to dark theme
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Function to switch to light theme
  const lightTheme = () => {
    setThemeMode("light");
  };

  // Effect to update the theme class on the HTML element
  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove("light", "dark");
    html.classList.add(ThemeMode);
  }, [ThemeMode]);

  return (
    <ThemeProvider value={{ ThemeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
