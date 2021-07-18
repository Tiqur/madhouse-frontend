import styles from './styles.module.scss';
import { Text, Button } from '../../components/index.js';

const HomePage = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.content, styles.hero}>
        <div className={styles.text_container}>
          <Text size={4}>Welcome to the Madhouse!</Text>
          <Text size={2} color="#CDCDCD">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue arcu, luctus in massa quis, efficitur faucibus magna. Vivamus volutpat lacus at elit tempor faucibus.   Phasellus iaculis consequat libero, a malesuada nulla viverra!</Text>
        </div>
        <Button primary style={{marginTop: '20px'}} text="Join the community" width='11em' height='4em'/>
      </div>
    </div>
  )
}

export default HomePage;
