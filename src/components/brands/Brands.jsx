import './brands.css';
import brandImg1 from '../../images/Amazon.png'
import brandImg2 from '../../images/HM.png'
import brandImg3 from '../../images/Lacoste.png'
import brandImg4 from '../../images/Levis.png'
import brandImg5 from '../../images/Obey.png'
import brandImg6 from '../../images/Shopify.png'
function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
            <li><a href="#!"><img src={brandImg1} alt="" /></a></li>
            <li><a href="#!"><img src={brandImg2} alt="" /></a></li>
            <li><a href="#!"><img src={brandImg3} alt="" /></a></li>
            <li><a href="#!"><img src={brandImg4} alt="" /></a></li>
            <li><a href="#!"><img src={brandImg5} alt="" /></a></li>
            <li><a href="#!"><img src={brandImg6} alt="" /></a></li>
        </ul>
      </div>
    </section>
  );
}
export  {Brands};
