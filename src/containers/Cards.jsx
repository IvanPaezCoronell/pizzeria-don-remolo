import React from 'react';
import data from '../data/products.json';
import CardProduct from '../components/CardProduct';
import '../styles/Card.css';

export default function Cards() {
	const product = data.products;

	return (
		<div className='card-container'>
			<h1>Menu</h1>

			<div className="section-cards">
				{product.map((el, index) =>
					<CardProduct key={el.id} name={el.name} img={el.img} {...el} />,
				)}
			</div>
		</div>
	);
}
