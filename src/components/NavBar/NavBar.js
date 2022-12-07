import React from 'react';
import logo from '../../images/ultimate_hrm_logo-05-02_2.svg';
import './NavBar.css';
const NavBar = () => {
    return (  
        
<nav class="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class=" flex flex-wrap items-center justify-between mx-auto">
    <a href="index.html" class="flex items-center">
        <img src={logo} class="h-6 mr-3 sm:h-10 nav-icon" alt=" Logo" />
    </a>
  </div>
</nav>
    );
};

export default NavBar;