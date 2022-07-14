import './App.css';
import Navbar from './Components/Home/Navbar';
import Quote from './Components/Home/Quote';
import Carousel from './Components/Home/Carousel';
import Quotes from './Components/Home/Quotes';
import Donation from './Components/Home/Donation';
import Shoutout from './Components/Home/Shoutout';
import Footer from './Components/Home/Footer';

function App() {
  return (
    <>
    {/* Started soon */}
    <Navbar />
    <Quote />
    <Carousel />
    <Quotes />
    <Donation />
    <Shoutout />
    <Footer />
    </>
  );
}

export default App;
