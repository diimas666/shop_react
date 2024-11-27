import './css/common.css';
import { Header } from './components/header/Header';
import { Promo } from './components/promo/Promo';
import {Brands} from './components/brands/Brands';
import {Arrivals} from './components/arrivals/Arrivals';
import {Payday} from './components/payday/Payday';
import {Favorite} from './components/favorite/Favorite';
import { Download } from './components/download/Download';
import { Send } from './components/send/Send';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <Brands />
      <Arrivals/>
      <Payday/>
      <Favorite/>
      <Download/>
      <Send />
      <Footer/>
    </div>
  );
}

export default App;
