import styles from './styles.module.scss';

const Section = (props) => {
  return (
    <div className={styles.section}>
      {props.children}
    </div>
  )
}

export default Section;
