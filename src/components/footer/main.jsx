import styles from './styles.module.scss';
import { Text } from '../index.js';
import { BrowserRouter, Link } from 'react-router-dom';
import {
  DiscordSvg, 
  InstaSvg, 
  TelegramSvg,
  RedditSvg,
  TwitterSvg 
} from '../../assets/index.js';

const FLink = (props) => {
  return (
    <Link>
      <Text>{props.text}</Text>
    </Link>
  )
}

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
      <div className={styles.socials}>
        <Icon icon={DiscordSvg} to=''/>
        <Icon icon={RedditSvg} to=''/>
        <Icon icon={TwitterSvg} to=''/>
        <Icon icon={InstaSvg} to=''/>
        <Icon icon={TelegramSvg} to=''/>
      </div>
      <div className={styles.links}>
        <BrowserRouter>
          <FLink text='Terms of Service'/>
          <FLink text='Privacy Policy'/>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Footer;
