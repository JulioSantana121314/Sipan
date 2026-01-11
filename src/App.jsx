import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/layout/Footer';
import CartModal from './components/ui/CartModal';
import CheckoutModal from './components/ui/CheckoutModal';
import './styles/App.css';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <Footer />
      <CartModal />
      <CheckoutModal />
    </CartProvider>
  );
};

export default App;
