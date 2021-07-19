import styles from './styles.module.scss';
import { Text } from '../index.js';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img src={logo} className={styles.logo} alt='logo'/>
        <Text size={4}>Madhouse</Text>
        <div className={styles.links_container}>
          <Text size={1.5}>About</Text>
          <Text size={1.5}>Token</Text>
          <Text size={1.5}>Channel</Text>
          <Text size={1.5}>Socials</Text>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
