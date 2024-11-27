import './download.css';
import appStory from '../../images/app-store.png';
import googlePlay from '../../images/google-play.png';
import vouchers from '../../images/vouchers-img.png';

function Download() {
  return (
    <section className="download">
      <div className="container">
        <div className="download__wrapper">
          <div className="download__content">
            <h4 className="download__title ">
              DOWNLOAD APP & GET THE VOUCHER!
            </h4>
            <p className="download__desc">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </p>
            <div className="download__btn-group">
              <a href="#!">
                <img src={appStory} alt="" />
              </a>
              <a href="#!">
                <img src={googlePlay} alt="" />
              </a>
            </div>
          </div>
          <div className="download__images">
            <div className="img__wrapper">
              <img src={vouchers} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Download };
