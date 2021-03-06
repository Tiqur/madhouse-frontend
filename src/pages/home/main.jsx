import styles from './styles.module.scss';
import { Text, Button, Footer, Section } from '../../components/index.js';
import { LogoPng } from '../../assets/index.js';

const HomePage = () => {
  return (
    <Section>
      <div className={styles.hero_container}>
        <div className={styles.content, styles.hero}>
          <div className={styles.hero_info}>
            <div className={styles.text_container}>
              <Text size={5}>Welcome to the Madhouse!</Text>
              <Text margin='1em 0 0 0' size={2} color="#CDCDCD">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue arcu, luctus in massa quis, efficitur faucibus magna. Vivamus volutpat lacus at elit tempor faucibus.   Phasellus iaculis consequat libero, a malesuada nulla viverra in</Text>
            </div>
            <Button primary style={{marginTop: '2em'}} text="Join the community" width='11em' height='4em'/>
          </div>
          <div className={styles.hero_content}>
            { /* <Text margin='0 0 0.5em 0' size={1.5}>Latest Video:</Text>
              <iframe width="512" height="288" src="https://www.youtube.com/embed/fylt8A_oL60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }
            <img src={LogoPng} className={styles.logo} alt='logo'/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default HomePage;
