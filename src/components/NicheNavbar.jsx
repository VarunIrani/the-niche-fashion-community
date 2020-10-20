import React, {Component} from 'react';
import {AppBar, Toolbar, Hidden} from "@material-ui/core";
import {Col, Container, Image, Row} from "react-bootstrap";
import logo from "../assets/img/logo.jpg";
import ROUTES from "../routes";
import {Link} from "react-router-dom";
import COLORS from "../colors";
import NicheDrawer from "./NicheDrawer";

class NicheNavbar extends Component {
	render() {
		return (
			<div style={{flexGrow: 1}}>
				<AppBar color='inherit' elevation={2}>
					<Toolbar className='align-items-start flex-column p-0'>
						<Container fluid>
							<Row style={{backgroundColor: COLORS.primary}} className='p-1'/>
						</Container>
						<Container className='my-3'>
							<Row className='align-items-center justify-content-center'>
								<Hidden lgUp implementation="css" className="my-auto">
									<Col xs="1" className='my-auto mr-1'>
										<NicheDrawer/>
									</Col>
								</Hidden>
								<Col xl='2' md='3' lg='2' xs={6}>
									<Link to='/'>
										<Image src={logo} style={{width: '100%'}}/>
									</Link>
								</Col>
								<Col>
									<Hidden mdDown implementation="css">
										<Row className='justify-content-end'>
											{ROUTES.map((route, index) =>
												<Link to={route.path} key={index} style={{
													fontFamily: 'Poppins',
													fontWeight: 600,
													fontSize: 16,
													textDecoration: 'inherit',
													color: 'inherit'
												}} className='my-auto mr-4'>
													{route.name}
												</Link>
											)}
										</Row>
									</Hidden>
								</Col>
							</Row>
						</Container>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default NicheNavbar;