import './favorite.css';
import {Card} from '../card/Card'
import imgCard from '../../images/4.jpg'
import imgCard2 from '../../images/5.jpg'


function Favorite() {
  return (
    <section className="favorite">
      <div className="container">
        <div className="favorite__wrapper">
          <h4 className="favorite__title arrivals__title">Young’s Favourite</h4>
          <div className="favorite__cards">
           <Card img={imgCard} title="Trending on instagram" />
           <Card img={imgCard2} title="All Under $40" />
            
          </div>
        </div>
      </div>
    </section>
  );
}
export { Favorite };
