import styles from './styles.module.scss';
import { Text, Button, Section } from '../../components/index.js';
import { SpinningCoinMP4 } from '../../assets/index.js';

const TokenPage = () => {
  return (
    <div className={styles.main_container}>
      <Section>
          <div className={styles.content, styles.hero}>
            <div className={styles.hero_info}>
              <div className={styles.text_container}>
                <Text size={5}>Madhouse Token</Text>
                <Text margin='1em 0 0 0' size={2} color="#CDCDCD">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue arcu, luctus in massa quis, efficitur faucibus magna. Vivamus volutpat lacus at elit tempor faucibus.   Phasellus iaculis consequat libero, a malesuada nulla viverra in</Text>
              </div>
              <div className={styles.button_container}>
                <Button style={{marginTop: '2em'}} text="Buy Now!" width='11em' height='4em'/>
                <Button primary style={{marginTop: '2em'}} text="Whitepaper" width='11em' height='4em'/>
              </div>
            </div>
            <div className={styles.hero_content}>
              <video autoPlay loop muted className={styles.coin} id='video'>
                <source src={SpinningCoinMP4} type='video/mp4'/>
              </video>
            </div>
          </div>
      </Section>
          <Section>
          <div className={styles.content, styles.hero}>
            <div className={styles.hero_info}>
              <div className={styles.text_container}>
                <Text size={5}>Madhouse Token</Text>
                <Text margin='1em 0 0 0' size={2} color="#CDCDCD">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue arcu, luctus in massa quis, efficitur faucibus magna. Vivamus volutpat lacus at elit tempor faucibus.   Phasellus iaculis consequat libero, a malesuada nulla viverra in</Text>
              </div>
              <div className={styles.button_container}>
                <Button style={{marginTop: '2em'}} text="Buy Now!" width='11em' height='4em'/>
                <Button primary style={{marginTop: '2em'}} text="Whitepaper" width='11em' height='4em'/>
              </div>
            </div>
            <div className={styles.hero_content}>
              <video autoPlay loop muted className={styles.coin} id='video'>
                <source src={SpinningCoinMP4} type='video/mp4'/>
              </video>
            </div>
          </div>
      </Section>

    </div>
  )
}

export default TokenPage;
