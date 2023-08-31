import React from 'react';
import '../styles/EmptyCart.css';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
	return (
		<section className="empty-container">
			<h6>Home/Carrito</h6>
			<h2>Carrito de compra</h2>

			<AddShoppingCartOutlinedIcon className="empty-cart-icon" />

			<h2 className="empty-cart">Tu carrito esta vacio!</h2>
			<p>Para proceder con la compra tienes que agregar productos a tu carrito.</p>

			<Link to={'/'}>
				<Button size="small" className="btn-empty-cart">
					<ArrowCircleLeftSharpIcon />
					Atras
				</Button>
			</Link>
		</section>
	);
}
