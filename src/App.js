import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Achievements from './components/Achievements';
import Residence from './components/Residence';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Achievements/>
      <Residence/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
