import React from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="p-4 shadow-xl flex justify-between items-center">
        <h1 className="p-2 text-xl font-bold">Página inicial</h1>
        <div className='flex gap-4'>
            <h1 className="p-2 text-xl font-bold">PT</h1>
            <ThemeToggle />
        </div>
    </header>
  );
};

export default Header;
