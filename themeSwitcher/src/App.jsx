import { useState,useEffect } from 'react'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import Themebtn from './components/Themebtn';

function App() {
  const [themeMode,setThemeMode] = useState("light");

  const darkTheme = () => {
      setThemeMode("dark");
  }

  const lightTheme = () => {
      setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);

  return (
    <>
       <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        {/* Main wrapper setting the dark/light mode background for the whole page */}
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
          
          {/* 1. Header Section */}
          <header className="flex justify-center py-6">
            <span className="rounded bg-blue-500 text-white font-medium px-6 py-2 text-xl shadow-sm">
              Theme Changer
            </span>
          </header>

          {/* 2. Main Content / Card Section */}
          <main className="flex flex-col items-center justify-center px-4 pb-12">
            <div className="w-full max-w-sm flex flex-col items-end mb-4">
               <Themebtn />
            </div>

            {/* The Card Component */}
            <Card />
          </main>

        </div>
      </ThemeProvider>
    </>
  )
}

export default App
