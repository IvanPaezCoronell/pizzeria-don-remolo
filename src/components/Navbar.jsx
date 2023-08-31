import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const drawerWidth = 240;

const menu = [
	{
		name: 'Pizzas',
		url: '/pizzas',
	},
	{
		name: 'Empanadas',
		url: '/empanadas',
	},
	{
		name: 'Postres',
		url: '/postres',
	},
	{
		name: 'Bebidas',
		url: '/bebidas',
	},
	{
		name: <ShoppingCartOutlinedIcon />,
		url: '/carrito',
	}, 
];

function Navbar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }} className="typ-nav">
				Menu
			</Typography>
			<Divider />
			<List className="typ-nav">
				{menu.map(item =>
					<ListItem key={item.name} className="list-item" disablePadding>
						<Link to={item.url} key={item.name}>
							<ListItemButton className="list-item" sx={{ textAlign: 'center' }}>
								<ListItemText className="list-item" primary={item.name} />
							</ListItemButton>
						</Link>
					</ListItem>,
				)}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar component="nav" className="nav-toolbar">
				<Toolbar className="nav-toolbar">
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Link to={'/'}>
						<img src="/images/logo.jpg" alt="logo" className="nav-logo" />
					</Link>

					<Box className="box-color" sx={{ display: { xs: 'none', sm: 'block' } }}>
						{menu.map(item =>
							<Link to={item.url} key={item.name}>
								<Button className="btn-color" key={item.name} sx={{ color: '#5b5b5b' }}>
									{item.name}
								</Button>
							</Link>,
						)}
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
}

Navbar.propTypes = {
	/**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
	window: PropTypes.func,
};

export default Navbar;
