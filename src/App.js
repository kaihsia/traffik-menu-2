import { useState } from 'react';
import NavBar from './components/NavBar';
import NavBottom from './components/NavBottom';
import SubMenu from './components/SubMenu';
import SideMenu from './components/SideMenu';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const openSubMenu = (e) => {
    e.preventDefault();
    setSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setSubMenuOpen(false);
  };

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen)
    closeSubMenu(false);
  }

  return (
    <div className={`App`}>
      <NavBar toggleMenu={toggleMenu} />
      <SideMenu
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        openSubMenu={openSubMenu}
      />
      <SubMenu
        subMenuOpen={subMenuOpen}
        closeSubMenu={closeSubMenu}
      />
      <NavBottom />
      {
        menuOpen && (
          <div className='overlay'></div>
        )
      }
    </div>
  );
}

export default App;
