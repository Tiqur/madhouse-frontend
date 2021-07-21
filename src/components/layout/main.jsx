import styles from './styles.module.scss';
import { Navbar, Footer } from '../index.js';

const Layout = (props) => {
  return (
    <div className={styles.container}>
        <Navbar/>
          <div className={styles.innerContainer}>
            {props.children}
          </div>
        <Footer/>
    </div>
  )
}

export default Layout;
