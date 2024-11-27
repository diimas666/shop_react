import styles from './Card.module.css';
// import img1 from '../../images/01.jpg';
// import img2 from '../../images/02.jpg';
// import img3 from '../../images/03.jpg';
import arrowImg from '../../images/arrowImg.svg';

function Card({title,img}) {
  return (
    <a href='#!' className={styles.card}>
      <img className={styles.card__img} src={img} alt="img" />
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{title}</div>
          <div className={styles.card__muted}>Explore now! </div>
        </div>
        <div className={styles.icon}>
          <img src={arrowImg} alt="arrow" />
        </div>
      </div>
    </a>
  );
}
export { Card };
