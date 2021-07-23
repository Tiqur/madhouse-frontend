import styles from './styles.module.scss';
import { LogoPng } from '../../assets/index.js';
import { Text } from '../index.js';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { useState } from 'react';

const NavLink = (props) => {
  return (
    <Link to={{pathname: props.to}}>
      <Text size={1.5}>{props.text}</Text>
    </Link>
  )
}

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to={{pathname: '/'}} className={styles.nav_logo_container}>
          <img src={LogoPng} className={styles.logo} alt='logo'/>
          <Text size={4}>Madhouse</Text>
        </Link>
        <div className={styles.links_container}>
          <NavLink to='/' text='Home'/>
          <NavLink to='/token' text='Token'/>
          <NavLink to='/channel' text='Channel'/>
          <NavLink to='/socials' text='Socials'/>
        </div>
        <HamburgerMenu
          className={styles.hamburgerMenu}
          isOpen={menuState}
          menuClicked={() => setMenuState(!menuState)}
          width={40}
          strokeWidth={4}
          color='#D7D7D7'/>
      </div>
    </div>
  )
};

export default Navbar;
