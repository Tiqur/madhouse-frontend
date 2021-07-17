import styles from './styles.module.scss';
import { Text } from '../index.js';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Text size={4}>Madhouse</Text>
        
      </div>
    </div>
  )
};

export default Navbar;
