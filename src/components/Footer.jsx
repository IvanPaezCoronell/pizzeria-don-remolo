import React from 'react';
import '../styles/Footer.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
	const notify = () => toast.info('Redes sociales en construccion!', { autoClose: 1000 });

	return (
		<div className="footer">
			<div className="icons-container">
				<p>
					<LocationOnIcon /> Colombia
				</p>

				<h2>Pizzeria Don Remolo</h2>
				<img src="../../public/images/icon.png" alt="" />
				<div className="icons">
					<button onClick={notify} className="btn-icons">
						<InstagramIcon style={{ color: 'white' }} />
					</button>

					<button onClick={notify} className="btn-icons">
						<WhatsAppIcon style={{ color: 'white' }} />
					</button>

					<button onClick={notify} className="btn-icons">
						<FacebookIcon style={{ color: 'white' }} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
