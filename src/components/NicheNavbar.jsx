import React, {Component} from 'react';
import {AppBar, Toolbar} from "@material-ui/core";
import {Col, Container, Image, Row} from "react-bootstrap";
import logo from "../assets/img/logo.jpg";
import ROUTES from "../routes";
import {Link} from "react-router-dom";
import COLORS from "../colors";

class NicheNavbar extends Component {
	render() {
		return (
			<div style={{flexGrow: 1}}>
				<AppBar color='inherit' elevation={2} >
					<Toolbar className='align-items-start flex-column p-0'>
						<Container fluid>
							<Row style={{backgroundColor: COLORS.primary}} className='p-1'/>
						</Container>
						<Container className='my-3'>
							<Row className='align-items-center justify-content-center'>
								<Col xl='2' md='3' lg='2'>
									<Image src={logo} style={{width: '100%'}}/>
								</Col>
								<Col>
									<Row className='justify-content-end'>
										{ROUTES.map((route, index) =>
											<Link to={route.path} key={index} style={{
												fontFamily: 'Poppins',
												fontWeight: 600,
												fontSize: 14,
												textDecoration: 'inherit',
												color: 'inherit'
											}} className='my-auto mr-4'>
												{route.name}
											</Link>
										)}
									</Row>
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