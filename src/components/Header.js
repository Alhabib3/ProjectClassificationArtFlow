import React from 'react';
import './Header.css'; // Import file CSS untuk styling

const Header = () => {
  const Logo = () => (
    <div className="flex items-center">
      <img src="/Artflow.png" alt="Logo" className="h-14 mr-4" />
    </div>
  );

  const Menu = () => (
    <div className="flex space-x-4">
      <a
        href="#Home"
        className="menu-link px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
        onClick={() => { /* Handle click event */ }}
      >
        Home
      </a>
      <a
        href="#Background"
        className="menu-link px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
        onClick={() => { /* Handle click event */ }}
      >
        Tentang Kami
      </a>
      <a
        href="#Styles"
        className="menu-link px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
        onClick={() => { /* Handle click event */ }}
      >
        Jenis Aliran Lukisan
      </a>
      <a
        href="#FileInput"
        className="menu-link bg-orange-500 text-white px-3 py-2 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-orange-600"
        onClick={() => { /* Handle click event */ }}
      >
        Proses Data
      </a>
    </div>
  );

  return (
    <header className="header-bg shadow-md py-2">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Logo />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
