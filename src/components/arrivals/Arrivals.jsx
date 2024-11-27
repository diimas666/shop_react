import './arrivals.css';
import { Card } from '../card/Card';
import img1 from '../../images/01.jpg';
import img2 from '../../images/02.jpg';
import img3 from '../../images/03.jpg';
function Arrivals() {
  return (
    <section className="arrivals">
      <div className="container">
        <h4 className="arrivals__title">NEW ARRIVALS</h4>
        <div className="arrivals__cards">
            <Card title="Hoodies & Sweetshirt" img={img1}/>
            <Card title="Coats & Parkas" img={img2}/>
            <Card title="Tees & T-Shirt" img={img3}/>
        </div>
      </div>
    </section>
  );
}
export { Arrivals };
