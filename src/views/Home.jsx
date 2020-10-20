import React, {Component} from 'react';
import {AppBar, Box, IconButton, Paper, Tab, Tabs, Toolbar} from "@material-ui/core";
import {Container, Row, Col, ResponsiveEmbed, Image, Modal, Carousel} from "react-bootstrap";
import COLORS from "../colors";
import {prTeam, team} from "../content/team";
import {ChevronLeft, ChevronRight, Close} from '@material-ui/icons';
import aboutImage from '../assets/img/about/profile-success.jpg';
import {homeImages} from "../content/home";


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

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			modalShow: false,
			member: null
		}
		this.showModal = this.showModal.bind(this)
	}

	componentDidMount() {
		document.title = 'Home - The Niche Fashion Community'
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
					<Modal size='xl' aria-labelledby="contained-modal-title-vcenter" show={this.state.modalShow}
								 onHide={() => this.showModal(false)} style={{zIndex: 9999}}>
						<Modal.Body>
							<Container fluid>
								<Row className='justify-content-end px-3 px-sm-0'>
									<Col xs={1}>
										<IconButton aria-label='close' onClick={() => this.showModal(false)}>
											<Close style={{color: COLORS.primary}}/>
										</IconButton>
									</Col>
								</Row>
								<Row className='justify-content-center text-center'>
									<Col xs={10} sm={3}>
										<Row className='justify-content-center text-center'>
											<ResponsiveEmbed aspectRatio='1by1'>
												<Image src={this.state.member.image} alt={this.state.member.name}
															 style={{borderRadius: '100%', border: '6px solid #111D5E'}}/>
											</ResponsiveEmbed>
										</Row>
									</Col>
									<Col xs={12}>
										<p style={{fontFamily: 'Poppins', fontWeight: 600, fontSize: 24}}
											 className='mt-2 p-0 m-0'>{this.state.member.name}</p>
									</Col>
									<Col xs={12} className='mb-3'>
										<p style={{fontFamily: 'Poppins', fontWeight: 600}}
											 className='mt-2 p-0 m-0'>{this.state.member.description}</p>
									</Col>
								</Row>
								{this.state.member.contact.map((detail, index) => <Row className='justify-content-center text-center'
																																			 key={index}>
									<p>{detail.icon} {detail.text}</p>
								</Row>)}
								{this.state.member.content.map((c, index) => <Row key={index} className='mx-sm-3 text-justify'>
									<p style={{fontFamily: 'Poppins'}}>{c}</p>
								</Row>)}
							</Container>
						</Modal.Body>
					</Modal> : null}
				<Container fluid>
					<Row className='p-5'/>
				</Container>
				<Toolbar>
					<Container className='mb-5'>
						<Paper elevation={3} style={{borderRadius: 10, backgroundColor: '#000'}}
									 className='mb-5'>
							<Carousel interval={2000} style={{borderRadius: 10}} nextIcon={<ChevronRight fontSize='large'/>}
												prevIcon={<ChevronLeft fontSize='large'/>}>
								{homeImages.map((image, index) =>
									<Carousel.Item key={index}>
										<Container fluid>
											<Row className='justify-content-center'>
												<Image src={image} style={{maxHeight: '75vh'}}/>
											</Row>
										</Container>
									</Carousel.Item>
								)}
							</Carousel>
						</Paper>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>Home</p>
						<Row className='mb-5 align-items-center'>
							<Col xl={4}>
								<Paper elevation={3} style={{borderRadius: 10}}>
									<Image src={aboutImage} alt='profile-with-success' style={{width: '100%', borderRadius: 10}}/>
								</Paper>
							</Col>
							<Col className='mt-3'>
								<Row className='justify-content-center text-center'>
									<h3 style={{fontFamily: 'Poppins', color: 'white'}}>The Niche Fashion Arena International</h3>
								</Row>
								<Row className='justify-content-center'>
									<h5 style={{fontFamily: 'Poppins', fontWeight: 'bold', color: '#ffce66'}}>A Profile with a Big
										Success</h5>
								</Row>
								<Row className='text-justify mt-2 px-sm-5 px-2'>
									<p style={{fontFamily: 'Poppins', fontWeight: 'bold', color: 'white'}}>With its unique concept, the
										magazine is
										committed to provide a
										platform for the fashion community exclusively —Be it a Fashion or Interior Designer, Fashion Model,
										Fashion Blogger, Fashion stylist, Fashion Choreographer, Makeover Stylist, Fashion Photographer or a
										videographer, Accessories Merchandiser, Boutique Owner or Designer's Label Owner.</p>
								</Row>
								<Row className='text-justify mt-2 px-sm-5 px-2'>
									<p style={{fontFamily: 'Poppins', fontWeight: 'bold', color: 'white'}}>Online advertisers have opted
										to have their
										presence in the
										magazine THE NICHE Fashion Arena International and reach out to the decision makers of fashion
										community across India. Your full page in color in the magazine and a virtual online imagery of the
										same page in its website — <span
											style={{color: '#ffce66', fontWeight: 'bold'}}>thenichefashioncommunity.in </span></p>
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
								<Row className='justify-content-around text-center text-sm-left'>
									{team.filter((e) => e.row === 1).map((member, index) =>
										<Col xs={12} sm={12} md={6} lg={4} key={index}
												 style={{cursor: 'pointer'}}
												 onClick={() => this.setMember(member)}>
											<Row className='justify-content-center text-center'>
												<Col md={6} lg={8}>
													<ResponsiveEmbed aspectRatio='1by1'>
														<Image src={member.image} alt={member.name}
																	 style={{borderRadius: '100%', border: '6px solid #111D5E'}}/>
													</ResponsiveEmbed>
												</Col>
												<Col className='mb-5'>
													<p style={{fontFamily: 'Poppins', fontWeight: 600, fontSize: 22}}
														 className='mt-2 p-0 m-0'>{member.name}</p>
													<p style={{fontFamily: 'Poppins', fontWeight: 600}}
														 className='mt-2 p-0 m-0'>{member.description}</p>
												</Col>
											</Row>
										</Col>
									)}
								</Row>
								<Row className='justify-content-around mt-5 text-center text-sm-left'>
									{team.filter((e) => e.row === 2).map((member, index) =>
										<Col xs={12} sm={12} md={6} lg={4} key={index}
												 style={{cursor: 'pointer'}}
												 onClick={() => this.setMember(member)}>
											<Row className='justify-content-center text-center'>
												<Col md={6} lg={9}>
													<ResponsiveEmbed aspectRatio='1by1'>
														<Image src={member.image} alt={member.name}
																	 style={{borderRadius: '100%', border: '6px solid #111D5E'}}/>
													</ResponsiveEmbed>
												</Col>
												<Col className='mb-5'>
													<p style={{fontFamily: 'Poppins', fontWeight: 600, fontSize: 22}}
														 className='mt-2 p-0 m-0'>{member.name}</p>
													<p style={{fontFamily: 'Poppins', fontWeight: 600}}
														 className='mt-2 p-0 m-0'>{member.description}</p>
												</Col>
											</Row>
										</Col>)}
								</Row>
							</Container>
						</TabPanel>
						<TabPanel value={this.state.value} index={1} style={{backgroundColor: 'white'}}
											className='MuiPaper-elevation3'>
							<Container fluid>
								<Row className='justify-content-around text-center text-sm-left'>
									{prTeam.map((member, index) =>
										<Col xs={12} sm={12} md={6} lg={4} key={index}
												 style={{cursor: 'pointer'}}
												 onClick={() => this.setMember(member)}>
											<Row className='justify-content-center text-center'>
												<Col md={6} lg={8}>
													<ResponsiveEmbed aspectRatio='1by1'>
														<Image src={member.image} alt={member.name}
																	 style={{borderRadius: '100%', border: '6px solid #111D5E'}}/>
													</ResponsiveEmbed>
												</Col>
												<Col className='mb-5'>
													<p style={{fontFamily: 'Poppins', fontWeight: 600, fontSize: 22}}
														 className='mt-2 p-0 m-0'>{member.name}</p>
													<p style={{fontFamily: 'Poppins', fontWeight: 600}}
														 className='mt-2 p-0 m-0'>{member.description}</p>
												</Col>
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

export default Home;