import './header.css';
// import '../../css/common.css';
import logoImg from '../../images/logo.svg';
function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__logo">
            <img src={logoImg} alt="logo" />
          </div>
        <ul className="links">
          <li>
            <a href="#!">CATALOGUE</a>
          </li>
          <li>
            <a href="#!">LIFESTYLE</a>
          </li>
          <li>
            <a href="#!">FASHION</a>
          </li>
          <li>
            <a href="#!">FAVOURITE</a>
          </li>
          <li>
            <a className='btn-black' href="#!">SIGN UP</a>
          </li>
        </ul>
        </nav>
      </div>
    </div>
  );
}
export { Header };
