import React, {Component} from 'react';
import {Toolbar, Paper} from "@material-ui/core";
import {Container, Row, Col, ResponsiveEmbed, Image} from "react-bootstrap";
import {team} from "../content/team";
import {Email, Phone} from "@material-ui/icons";

class Contact extends Component {
	componentDidMount() {
		document.title = 'Contact - The Niche Fashion Community'
	}

	render() {
		return (
			<React.Fragment>
				<Container fluid>
					<Row className='p-5'/>
				</Container>
				<Toolbar>
					<Container className='mb-5'>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>Contact Us</p>
						<Row>
							<Col xs={7}>
								<Paper elevation={3} style={{borderRadius: 10}}>
									<iframe
										title='maps'
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.8154452120979!2d73.87671822918232!3d18.51706869921321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0458a9015fd%3A0x81a6469dfa52c5aa!2sDastur%20Meher%20Rd%2C%20Pune%2C%20Maharashtra%20411001!5e0!3m2!1sen!2sin!4v1602430960263!5m2!1sen!2sin"
										frameBorder="0" style={{borderRadius: 10, width: '100%', height: '60vh'}} allowFullScreen=""
										aria-hidden="false"
										tabIndex="0">
									</iframe>
								</Paper>
							</Col>
							<Col>
								<Row className='mb-3'>
									<Col xs={7}>
										<ResponsiveEmbed aspectRatio='1by1'>
											<Image src={team[0].image} alt={team[0].name}
														 style={{borderRadius: '100%', border: '6px solid #ffce66'}}/>
										</ResponsiveEmbed>
									</Col>
									<Col className='my-auto'>
										<Row className='justify-content-center'>
											<Row>
												<p style={{
													fontFamily: 'Poppins',
													fontWeight: 600,
													color: '#ffce66',
													fontSize: 24
												}}>{team[0].name}</p>
											</Row>
											<Row>
												<p style={{fontFamily: 'Poppins', fontSize: 18, color: '#ffce66'}}>{team[0].description}</p>
											</Row>
										</Row>
									</Col>
								</Row>
								<Row className='px-3'>
									<p style={{
										fontFamily: 'Poppins',
										fontWeight: 600,
										color: '#ffce66',
										fontSize: 18
									}}>Address</p>
									<p style={{
										fontFamily: 'Poppins',
										fontWeight: 500,
										color: '#fff',
										fontSize: 18
									}}>
										873, Kapadia Building, Flat No. 2, Ground floor, Dastur Meher Road, Camp,
										Pune 411 001
									</p>
								</Row>
								<Row className='px-3'>
									<Email style={{color: '#ffce66'}} className='mr-3'/>
									<p style={{
										fontFamily: 'Poppins',
										fontWeight: 500,
										color: '#fff',
										fontSize: 18
									}}>
										{team[0].contact[0].text}
									</p>
								</Row>
								<Row className='px-3'>
									<Phone style={{color: '#ffce66'}} className='mr-3'/>
									<p style={{
										fontFamily: 'Poppins',
										fontWeight: 500,
										color: '#fff',
										fontSize: 18
									}}>
										{team[0].contact[1].text}
									</p>
								</Row>
							</Col>
						</Row>
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default Contact;