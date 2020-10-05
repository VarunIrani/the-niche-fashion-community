import React, {Component} from 'react';
import {AppBar, Box, IconButton, Paper, Tab, Tabs, Toolbar} from "@material-ui/core";
import {Container, Row, Col, ResponsiveEmbed, Image, Modal} from "react-bootstrap";
import COLORS from "../colors";
import {prTeam, team} from "../content/team";
import {Close} from '@material-ui/icons';
import aboutImage from '../assets/img/about/profile-success.jpg';


function TabPanel(props) {
	const {children, value, index, ...other} = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					{children}
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			modalShow: false,
			member: null
		}
		this.showModal = this.showModal.bind(this)
	}

	showModal(modalShow) {
		this.setState({modalShow})
	}

	handleChange(value) {
		this.setState({value});
	}

	setMember(member) {
		this.setState({member}, () => this.showModal(true))
	}

	render() {
		return (
			<React.Fragment>
				{this.state.member ?
					<Modal size='lg' aria-labelledby="contained-modal-title-vcenter" show={this.state.modalShow}
								 onHide={() => this.showModal(false)} style={{zIndex: 9999}}>
						<Modal.Body>
							<Container fluid>
								<Row className='justify-content-end'>
									<Col xs={1}>
										<IconButton aria-label='close' onClick={() => this.showModal(false)}>
											<Close style={{color: COLORS.primary}}/>
										</IconButton>
									</Col>
								</Row>
								<Row className='justify-content-center'>
									<Col xs={3}>
										<Row className='justify-content-center text-center'>
											<ResponsiveEmbed aspectRatio='1by1'>
												<Image src={this.state.member.image} alt={this.state.member.name}
															 style={{borderRadius: '100%'}}/>
											</ResponsiveEmbed>
											<p style={{fontFamily: 'Poppins', fontWeight: 600}}
												 className='mt-2 p-0 m-0'>{this.state.member.name}</p>
											<p style={{fontFamily: 'Poppins', fontSize: 14}}>{this.state.member.description}</p>
										</Row>
									</Col>
								</Row>
								{this.state.member.contact.map((detail, index) => <Row className='justify-content-center text-center' key={index}>
									<p>{detail.icon} {detail.text}</p>
								</Row>)}
								{this.state.member.content.map((c, index) => <Row key={index} className='mx-5 text-justify'>
									<p style={{fontFamily:'Poppins'}}>{c}</p>
								</Row>)}
							</Container>
						</Modal.Body>
					</Modal> : null}
				<Container fluid>
					<Row className='p-5'/>
				</Container>
				<Toolbar>
					<Container className='mb-5'>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: COLORS.primary}}>About The Niche</p>
						<Row className='mb-5 align-items-center'>
							<Col xl={4}>
								<Paper elevation={3} style={{borderRadius: 10}}>
									<Image src={aboutImage} alt='profile-with-success' style={{width: '100%', borderRadius: 10}}/>
								</Paper>
							</Col>
							<Col>
								<Row className='justify-content-center'>
									<h3 style={{fontFamily: 'Poppins', color: COLORS.primary}}>The Niche Fashion Arena International</h3>
								</Row>
								<Row className='justify-content-center'>
									<h5 style={{fontFamily: 'Poppins', fontWeight: 'bold'}}>A Profile with a Big Success</h5>
								</Row>
								<Row className='text-justify mt-2 px-5'>
									<p style={{fontFamily: 'Poppins', fontWeight: 'bold'}}>With its unique concept, the magazine is
										committed to provide a
										platform for the fashion community exclusively —Be it a Fashion or Interior Designer, Fashion Model,
										Fashion Blogger, Fashion stylist, Fashion Choreographer, Makeover Stylist, Fashion Photographer or a
										videographer, Accessories Merchandiser, Boutique Owner or Designer's Label Owner.</p>
								</Row>
								<Row className='text-justify mt-2 px-5'>
									<p style={{fontFamily: 'Poppins', fontWeight: 'bold'}}>Online advertisers have opted to have their
										presence in the
										magazine THE NICHE Fashion Arena International and reach out to the decision makers of fashion
										community across India. Your full page in color in the magazine and a virtual online imagery of the
										same page in its website — <span
											style={{color: COLORS.primary, fontWeight: 'bold'}}>thenichefashioncommunity.in </span></p>
								</Row>
							</Col>
						</Row>
						<AppBar position='static' color='inherit'>
							<Tabs
								TabIndicatorProps={{
									style: {
										backgroundColor: COLORS.secondary,
										height: 4
									}
								}}
								value={this.state.value}
								aria-label="about tabs"
								variant="scrollable"
							>
								<Tab label="The Niche Team" {...a11yProps(0)} style={{fontFamily: 'Montserrat', fontWeight: 'bold'}}
										 onClick={() => {
											 this.handleChange(0)
										 }}/>
								<Tab label="Public Relations Team" {...a11yProps(1)}
										 style={{fontFamily: 'Montserrat', fontWeight: 'bold'}}
										 onClick={() => {
											 this.handleChange(1)
										 }}/>
							</Tabs>
						</AppBar>
						<TabPanel value={this.state.value} index={0} style={{backgroundColor: 'white'}}
											className='MuiPaper-elevation3'>
							<Container fluid>
								<Row className='justify-content-around'>
									{team.filter((e) => e.row === 1).map((member, index) => <Col xs={2} key={index}
																																							 style={{cursor: 'pointer'}}
																																							 onClick={() => this.setMember(member)}>
										<Row className='justify-content-center text-center'>
											<ResponsiveEmbed aspectRatio='1by1'>
												<Image src={member.image} alt={member.name} style={{borderRadius: '100%'}}/>
											</ResponsiveEmbed>
											<p style={{fontFamily: 'Poppins', fontWeight: 600}} className='mt-2 p-0 m-0'>{member.name}</p>
											<p style={{fontFamily: 'Poppins', fontSize: 14}}>{member.description}</p>
										</Row>
									</Col>)}
								</Row>
								<Row className='justify-content-around mt-5'>
									{team.filter((e) => e.row === 2).map((member, index) => <Col xs={2} key={index}
																																							 style={{cursor: 'pointer'}}
																																							 onClick={() => this.setMember(member)}>
										<Row className='justify-content-center text-center'>
											<ResponsiveEmbed aspectRatio='1by1'>
												<Image src={member.image} alt={member.name} style={{borderRadius: '100%'}}/>
											</ResponsiveEmbed>
											<p style={{fontFamily: 'Poppins', fontWeight: 600}} className='mt-2 p-0 m-0'>{member.name}</p>
											<p style={{fontFamily: 'Poppins', fontSize: 14}}>{member.description}</p>
										</Row>
									</Col>)}
								</Row>
							</Container>
						</TabPanel>
						<TabPanel value={this.state.value} index={1} style={{backgroundColor: 'white'}}
											className='MuiPaper-elevation3'>
							<Container fluid>
								<Row className='justify-content-around'>
									{prTeam.map((member, index) => <Col xs={2} key={index} style={{cursor: 'pointer'}}
																											onClick={() => this.setMember(member)}>
										<Row className='justify-content-center text-center'>
											<ResponsiveEmbed aspectRatio='1by1'>
												<Image src={member.image} alt={member.name} style={{borderRadius: '100%'}}/>
											</ResponsiveEmbed>
											<p style={{fontFamily: 'Poppins', fontWeight: 600}} className='mt-2 p-0 m-0'>{member.name}</p>
											<p style={{fontFamily: 'Poppins', fontSize: 14}}>{member.description}</p>
										</Row>
									</Col>)}
								</Row>
							</Container>
						</TabPanel>
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default About;