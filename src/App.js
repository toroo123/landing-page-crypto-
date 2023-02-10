import './App.css';
import Articles from './components/Articles';
import Categories from './components/Categories';
import Collection from './components/Collection';
import CreateSell from './components/CreateSell';
import Header from './components/Header';
import Trending from './components/Trending';
import Walletupport from './components/WalletSupport';
import bg from '../src/images/BACKGROUND.png'
import bg1 from '../src/images/back.png'
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div >
        <div className='main' style={{background:`url(${bg1})`}}>
        
        </div>
        <div className='container' style={{background:`url(${bg})`}}>
          <Header/>
          <Walletupport/>
          <Trending/>
          <Collection/>
          <Categories/>
          <CreateSell/>
          <Articles/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
