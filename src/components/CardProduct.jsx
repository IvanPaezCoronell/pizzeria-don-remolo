import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartContext } from '../contexts/CartContext';
import '../styles/CardProduct.css';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 export default function CardProduct({ name, img, id, price, description }) {

	const [cart, setCart] = React.useContext(CartContext);
	const notify = () => toast.success(`Producto agregado al carrito.`,{autoClose: 500});

	const addToCart = () => {
		setCart(currItems => {
			const isItemFound = currItems.find(item => item.id === id);

			notify();

			if (isItemFound) {
				return currItems.map(item => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			} else {
				return [...currItems, { id, quantity: 1,name,  price }];
			}
		});
	};

	const removeItem = () => {
		setCart(currItems => {
			if (currItems.find(item => item.id === id).quantity === 1) {
				return currItems.filter(item => item.id !== id);
			} else {
				return currItems.map(item => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const getQuantityById = () => {
		return cart.find(item => item.id === id)?.quantity || 0;
	};

	const qauntityPerItem = getQuantityById(id);

	return (
		<Card sx={{ maxWidth: 345 }} className="card">
			<CardMedia component="img" alt="green iguana" height="140" image={img} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions />
			<p className='price'>$ {price}</p>

			<Button size="small" onClick={() => addToCart()}>
				Agregar al Carrito
			</Button>
			<div className="section-btn">
				{qauntityPerItem > 0 &&
					<div className='section-btn'>
						<button className="btn" onClick={() => removeItem()}>
							-
						</button>
						{qauntityPerItem}
						<button className="btn" onClick={() => addToCart()}>
							+
						</button>
					</div>}
			</div>
			<ToastContainer position="bottom-center" />
		</Card>
	);
}

