import promoImg from '../../images/promo.png';
// import promoVector from '../../images/promo_vector';
import './promo.css';
function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__wrapper">
          <div className="promo__content">
            <div className="promo__title">
              <span className="highlight">
                <span>LET’S</span>
              </span>
              EXPLORE{' '}
              <span className="highlight highlight--yellow">
                <span>UNIQUE</span>
              </span>{' '}
              CLOTHES.
            </div>
            <p className="promo__desc">
              Live for Influential and Innovative fashion!
            </p>
            <div className="btn__wrap">
              <a className="promo__btn btn-black" href="#!">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="promo" />
          </div>
        </div>
      </div>
    </section>
  );
}
export { Promo };
