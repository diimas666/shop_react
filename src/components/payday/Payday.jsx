import './payday.css';
import imgPromo from '../../images/promo-img.jpg'

function Payday() {
  return (
    <section className="payday">
      <div className="container">
        <div className="payday__wrapper">
            <div className="payday__img">
                <img src={imgPromo} alt="img" />
            </div>
            <div className="payday__block">
                <h4 className="payday__h4 promo__title">
                <span className="highlight"><span>PAYDAY</span></span>
                SALE NOW
                </h4>
                <div className="payday__desc promo__desc">Spend minimal $100 get 30% off
                voucher code for your next purchase</div>
                <div className="payday__bottom-text">*Terms & Conditions apply</div>
                <a href="#!" className="btn btn-black">SHOP NOW</a>
            </div>
        </div>
      </div>
    </section>
  );
}
export { Payday };
