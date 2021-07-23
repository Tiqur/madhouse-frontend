import styles from './styles.module.scss';

const Section = (props) => {
  return (
    <div className={styles.outer_section}>
      <div className={styles.section}>
        {props.children}
      </div>
    </div>
  )
}

export default Section;
