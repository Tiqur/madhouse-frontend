import styles from './styles.module.scss';
import { LogoPng } from '../../assets/index.js';
import { Text } from '../index.js';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

const NavLink = (props) => {
  return (
    <Link to={{pathname: props.to}}>
      <Text size={1.5}>{props.text}</Text>
    </Link>
  )
}

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img src={LogoPng} className={styles.logo} alt='logo'/>
        <Text size={4}>Madhouse</Text>
        <div className={styles.links_container}>
          <NavLink to='/' text='Home'/>
          <NavLink to='/token' text='Token'/>
          <NavLink to='/channel' text='Channel'/>
          <NavLink to='/socials' text='Socials'/>
        </div>
        <HamburgerMenu
          isOpen={true}
          menuClicked={false}
          width={50}
          strokeWidth={4}
          color='#D7D7D7'
        />
      </div>
    </div>
  )
};

export default Navbar;
