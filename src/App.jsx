import './App.css';
import CartItem from './components/CartItem';
import Cards from './containers/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopingCart from './(pages)/ShopingCart';
import Pizzas from './(pages)/Pizzas';
import Empanadas from './(pages)/Empanadas';
import Drinks from './(pages)/Drinks';
import Desserts from './(pages)/Desserts';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
	return (
		<CartProvider>
			<Router>
				<Navbar />
				<Header />
				<CartItem />
				<Routes>
					<Route path="/" element={<Cards />} />
					<Route path="/carrito" element={<ShopingCart />} />
					<Route path="/pizzas" element={<Pizzas />} />
					<Route path="/empanadas" element={<Empanadas />} />
					<Route path="/postres" element={<Desserts />} />
					<Route path="/bebidas" element={<Drinks />} />
				</Routes>
				<Footer />
			</Router>
		</CartProvider>
	);
}

export default App;
