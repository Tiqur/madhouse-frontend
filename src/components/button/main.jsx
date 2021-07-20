import styles from './styles.module.scss';
import { Text } from '../index.js';

const Button = (props) => {
  return (
    <div className={styles.button} style={{
      ...{
          width: props.width,
          height: props.height,
          background: props.primary ? '#470000' : '',
        },
      ...props.style}}>
      <Text size={1.8} weight='bold'>{props.text}</Text>
    </div>
  )
}

export default Button;
