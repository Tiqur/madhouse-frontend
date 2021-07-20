import styles from './styles.module.scss';
import { ReactComponent as DiscordIcon } from '../../assets/discord.svg';
import { ReactComponent as RedditIcon } from '../../assets/reddit.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as InstaIcon } from '../../assets/instagram.svg';
import { ReactComponent as TelegramIcon } from '../../assets/telegram.svg';

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
      <Icon icon={DiscordIcon} to=''/>
      <Icon icon={RedditIcon} to=''/>
      <Icon icon={TwitterIcon} to=''/>
      <Icon icon={InstaIcon} to=''/>
      <Icon icon={TelegramIcon} to=''/>
    </div>
  )
}

export default Footer;
