import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartItem.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from '../contexts/CartContext';

function CartItem() {
	const [cart, setCart] = useContext(CartContext);

	const quantity = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);

	return (
		<div className="cartitem-container">
			<Link to={'/carrito'} className="cartitem-btn">
				<ShoppingCartOutlinedIcon className="cart-icon" />
				<p className="quantity">
					{quantity}
				</p>
			</Link>
		</div>
	);
}

export default CartItem;
