import { useEffect, useState } from 'react';

export function ThemeToggle()  {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('@dark-mode-react-tailwind:theme-1.0.0', newTheme);
    setTheme(newTheme);

    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const themeFromLocalStorage = 
      localStorage.getItem('@dark-mode-react-tailwind:theme-1.0.0');

    if (themeFromLocalStorage) {
      setTheme(themeFromLocalStorage);
      document.documentElement.classList.toggle('dark', themeFromLocalStorage === 'dark');
    }
  }, []);

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-300 dark:bg-gray-900 text-xl font-bold">
      {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};