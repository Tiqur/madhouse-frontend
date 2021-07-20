import styles from './styles.module.scss';
import logo from '../../assets/logo.png';
import { Text } from '../index.js';
import { Link, BrowserRouter } from 'react-router-dom';

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
        <img src={logo} className={styles.logo} alt='logo'/>
        <Text size={4}>Madhouse</Text>
        <div className={styles.links_container}>
          <BrowserRouter>
            <NavLink to='/about' text='About'/>
            <NavLink to='/token' text='Token'/>
            <NavLink to='/channel' text='Channel'/>
            <NavLink to='/socials' text='Socials'/>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
