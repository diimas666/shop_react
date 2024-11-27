import './footer.css';
import fb from '../../images/icon/fb.svg';
import instagram from '../../images/icon/in.svg';
import tw from '../../images/icon/tw.svg';
function Footer(){
return(
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__left">
                    <h4 className="left__title">FASHION</h4>
                    <p className="left__desc">Complete your style with awesome clothes from us.</p>
                    <div className="left__social">
                        <img src={fb} alt="" />
                        <img src={instagram} alt="" />
                        <img src={tw} alt="" />
                    </div>
                </div>
                <div className="footer__right">
                    <ul className="footer__links">
                        <li className="footer__link">Company</li>
                        <li className="footer__link">About</li>
                        <li className="footer__link">
                        Contact us</li>
                        <li className="footer__link">Support</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)
}
export {Footer};