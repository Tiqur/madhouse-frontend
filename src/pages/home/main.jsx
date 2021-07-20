import styles from './styles.module.scss';
import { Text, Button } from '../../components/index.js';

const HomePage = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.content, styles.hero}>
        <div className={styles.hero_info}>
          <div className={styles.text_container}>
            <Text size={5}>Welcome to the Madhouse!</Text>
            <Text margin='1em 0 0 0' size={2} color="#CDCDCD">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue arcu, luctus in massa quis, efficitur faucibus magna. Vivamus volutpat lacus at elit tempor faucibus.   Phasellus iaculis consequat libero, a malesuada nulla viverra in</Text>
          </div>
          <Button primary style={{marginTop: '2em'}} text="Join the community" width='11em' height='4em'/>
        </div>
        <div className={styles.hero_content}>
          <iframe width="512" height="288" src="https://www.youtube.com/embed/fylt8A_oL60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
