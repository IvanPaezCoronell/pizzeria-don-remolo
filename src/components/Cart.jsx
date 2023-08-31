import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ReactWhatsapp from 'react-whatsapp';

export default function Cart() {
	const [cart, setCart] = useContext(CartContext);

	const quantity = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);

	const totalPrice = cart.reduce((acc, curr) => {
		return acc + curr.quantity * curr.price;
	}, 0);

	const getDataCart = () => {
		return cart.map(el => el.name);
	};

	console.log(getDataCart().toString());

	return (
		<div>
			<h1>
				carrito {quantity}
			</h1>
			<div>
				<ul>
					{cart.map((el, index) =>
						<li key={index}>
							{el.name}
						</li>,
					)}
				</ul>
			</div>
			<div>
				Total: ${totalPrice}
			</div>
			<button onClick={() => console.log(cart)}>checkout</button>
			<br />
			<br />
			<ReactWhatsapp number="+57 3243893362" message={getDataCart().toString()}>
				Realizar pedido
			</ReactWhatsapp>
		</div>
	);
}
