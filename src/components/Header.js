import React from 'react';

const Header = () => {
    return (
    <header class="bg-white dark:bg-[#0D1B2A] p-4 flex justify-between items-center">

        <nav class="space-x-4">
            <a href="#" class="text-gray-700 dark:text-gray-300">Inicio</a>
            <a href="#" class="text-gray-700 dark:text-gray-300">Películas</a>
            <a href="#" class="text-gray-700 dark:text-gray-300">Series</a>
        </nav>

        <div class="flex items-center">
            <img src="/logo.png" className='w-16' alt="Logo Movies Series Hub"></img>
        </div>
        
        <div></div>
    </header>
    );
};

export default Header;
