import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ReactWhatsapp from 'react-whatsapp';
import '../styles/Cart.css';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

export default function Cart() {
	const [cart, setCart] = useContext(CartContext);

	const quantity = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);

	const totalPrice = cart.reduce((acc, curr) => {
		return acc + curr.quantity * curr.price;
	}, 0);

	const getDataCart = () => {
		return cart.map(el => [{ producto: el.name, cantidad: el.quantity }]);
	};

	return (
		<div>
			<div className="back-check">
				<button className="back">
					<span className="button-content">
						<ArrowBackIosIcon />
						<Link to={'/'}>
							<p className="text-btn-back">Seguir Comprando</p>
						</Link>
					</span>
				</button>
			</div>
			<div className="container-checkout">
				<div className="table">
					<div className="table-header">
						<div className="header__item">
							<a id="name" className="filter__link" href="#">
								Producto
							</a>
						</div>
						<div className="header__item">
							<a id="wins" className="filter__link filter__link--number" href="#">
								Precio
							</a>
						</div>
						<div className="header__item">
							<a id="draws" className="filter__link filter__link--number" href="#">
								Cantidad
							</a>
						</div>
					</div>
					<div className="table-content">
						{cart.map((el, index) =>
							<div key={index} className="table-row">
								<div className="table-data">
									{el.name}
								</div>
								<div className="table-data">
									${el.price} COP
								</div>
								<div className="table-data">
									{el.quantity}
								</div>
							</div>,
						)}
					</div>
				</div>
			</div>
			<div className="total">
				Total: ${totalPrice}
			</div>

			<div className="actions-checkout">
				<div className="btns">
					<ReactWhatsapp
						className="button"
						number="+57 3243893362"
						message={JSON.stringify(getDataCart())}
					>
						<span className="button-content">
							<p>Realizar pedido</p>
							<AddBusinessIcon />
						</span>
					</ReactWhatsapp>
				</div>
			</div>
		</div>
	);
}
