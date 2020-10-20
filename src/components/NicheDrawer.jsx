import React, {Component} from 'react';
import {List, ListItem, ListItemIcon, ListItemText, IconButton, Drawer} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {Menu} from "@material-ui/icons";
import ROUTES from "../routes";

class NicheDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
		this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		this.setState({open});
	}

	list = () => (
		<div
			style={{backgroundColor: "#fff", height: "100%"}}
			role="presentation"
			onClick={this.toggleDrawer(false)}
			onKeyDown={this.toggleDrawer(false)}
		>
			<List>
				{ROUTES.map((route, index) => (
					<Link to={route.path} key={index} style={{textDecoration: 'inherit'}}>
						<ListItem button>
							<ListItemIcon>{route.icon}</ListItemIcon>
							<ListItemText primary={route.name} style={{color: "black", fontSize: 24}}/>
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);

	render() {
		return (
			<React.Fragment>
				<IconButton color="inherit" aria-label="Open drawer" edge="start" onClick={this.toggleDrawer(true)}>
					<Menu/>
				</IconButton>
				<Drawer anchor="left" open={this.state.open} onClose={this.toggleDrawer(false)}>
					{this.list()}
				</Drawer>
			</React.Fragment>
		);
	}
}

export default NicheDrawer;