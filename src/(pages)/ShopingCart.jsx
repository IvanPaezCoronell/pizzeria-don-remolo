import React, { useContext } from 'react';
import Cart from '../components/Cart';
import { CartContext } from '../contexts/CartContext';
import EmptyCart from '../components/EmptyCart';

const ShopingCart = () => {
	const [cart, setCart] = useContext(CartContext);

	const quantity = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);

	return (
		<div>
			{quantity === 0 ? <EmptyCart /> : <Cart />}
		</div>
	);
};

export default ShopingCart;
