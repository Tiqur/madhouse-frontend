import styles from './styles.module.scss';
import {
  DiscordSvg, 
  InstaSvg, 
  TelegramSvg,
  RedditSvg,
  TwitterSvg 
} from '../../assets/index.js';

const Icon = (props) => {
  return (
    <a target='_blank' href={props.to}>
      {<props.icon fill='#7C7C7C' className={styles.icon}/>}
    </a>
  )
}

const Footer = () => {
  return (
    <div className={styles.container}>
      <Icon icon={DiscordSvg} to=''/>
      <Icon icon={RedditSvg} to=''/>
      <Icon icon={TwitterSvg} to=''/>
      <Icon icon={InstaSvg} to=''/>
      <Icon icon={TelegramSvg} to=''/>
    </div>
  )
}

export default Footer;
