import React, {Component} from 'react';
import {Toolbar, Tabs, Box, Tab, AppBar, Paper} from "@material-ui/core";
import {Col, Container, Image, Row} from "react-bootstrap";
import COLORS from "../colors";
import fashionBlogger from '../assets/img/fashion/fashion-blogger.jpg'
import fashionStylist from '../assets/img/fashion/fashion-stylist.jpg'

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

class Fashion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		this.setState({value});
	}

	render() {
		return (
			<React.Fragment>
				<Container fluid>
					<Row className='p-5'/>
				</Container>
				<Toolbar>
					<Container>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>Fashion</p>
						<AppBar position='static' color='inherit'>
							<Tabs
								TabIndicatorProps={{
									style: {
										backgroundColor: COLORS.secondary,
										height: 4
									}
								}}
								value={this.state.value}
								aria-label="fashion tabs"
								variant="scrollable"
							>
								<Tab label="Fashion Bloggers" {...a11yProps(0)} style={{fontFamily: 'Montserrat', fontWeight: 'bold'}}
										 onClick={() => {
											 this.handleChange(0)
										 }}/>
								<Tab label="Fashion Stylists" {...a11yProps(1)} style={{fontFamily: 'Montserrat', fontWeight: 'bold'}}
										 onClick={() => {
											 this.handleChange(1)
										 }}/>
							</Tabs>
						</AppBar>
						<TabPanel value={this.state.value} index={0} style={{backgroundColor: 'white'}} className='mb-5 MuiPaper-elevation3'>
							<Container fluid>
								<Row>
									<Col xs={4}>
										<Paper elevation={3} style={{borderRadius: 10}}>
											<Image style={{width: '100%', borderRadius: 10}} src={fashionBlogger}/>
										</Paper>
									</Col>
									<Col>
										<Row className='justify-content-center'>
											<h5 style={{fontStyle: 'italic', fontFamily: 'Poppins'}}>From our Fashion Blogger</h5>
										</Row>
										<Row className='justify-content-center'>
											<h3 style={{fontFamily: 'Poppins', fontWeight: 600, color: COLORS.primary}}>Pranjal Saklecha's Desk</h3>
										</Row>
										<Row className='justify-content-center'>
											<h5 style={{fontFamily: 'Poppins'}}>Fashion Blog for our Fashion Community</h5>
										</Row>
										<Row className='justify-content-center'>
											<p style={{fontFamily: 'Poppins'}}>by, The Gulabi Girl</p>
										</Row>
										<Row className='text-justify mt-2 px-5'>
											<p style={{fontFamily: 'Poppins'}}><b style={{fontSize: 20}}>W</b>omen are always up for trying the latest
												trend that is going on in Fashion. They have
												endless possibilities that they can
												experiment. Indian women carry themselves
												elegantly by blending traditional and western
												world styles.</p>
										</Row>
										<Row className='text-justify px-5'>
											<p style={{fontFamily: 'Poppins'}}><b style={{fontSize: 20}}>W</b>hen we are talking about fashion fusion of
												traditional and western, how can we forget to
												talk about Indo-western outfits for weddings,
												cocktail parties or any other formal occasion
												that can make women look glamorous and
												unique in a crowd? I recommend following
												options :</p>
										</Row>
										<Row className='text-justify px-5'>
											<p style={{fontFamily: 'Poppins', fontWeight: 'bold', color: COLORS.secondary}}>
												1. Designer Blouse with a skirt and Denim
												Jacket :
											</p>
										</Row>
										<Row className='text-justify mt-0 pt-0 px-5'>
											<p style={{fontFamily: 'Poppins'}}>
												Style yourself in a fitted saree blouse and
												drape a plain colour skirt in the bottom and
												give it a Western touch while wearing a
												Denim jacket. You can wear a pair of shoes
												and complete your this unique look.
											</p>
										</Row>

										<Row className='text-justify px-5'>
											<p style={{fontFamily: 'Poppins', fontWeight: 'bold', color: COLORS.secondary}}>
												2. Saree blouse with black jeans and a
												white jacket :
											</p>
										</Row>
										<Row className='text-justify mt-0 pt-0 px-5'>
											<p style={{fontFamily: 'Poppins'}}>
												In order to style yourself in the latest trends
												wear a classic traditional blouse, pick a pair of
												black denim jeans and wear it along with a
												white printed jacket. It gives you a funky yet
												comfy look. You can complete the look while
												wearing black boots.
											</p>
										</Row>

										<Row className='text-justify px-5'>
											<p style={{fontFamily: 'Poppins', fontWeight: 'bold', color: COLORS.secondary}}>
												3. Sleeveless blouse with a black skirt:
											</p>
										</Row>
										<Row className='text-justify mt-0 pt-0 px-5'>
											<p style={{fontFamily: 'Poppins'}}>
												To get an Indo-western attire, wear a light-
												coloured blouse and pair it up with a black
												printed skirt and on top of the blouse wear a
												plain black jacket.
											</p>
										</Row>
										<Row className='text-justify mt-2 px-5'>
											<p style={{fontFamily: 'Poppins', fontWeight: 'bold'}}>
												The Gulabi Girl<br/> ( Pranjal Saklecha )
											</p>
										</Row>
									</Col>
								</Row>
							</Container>
						</TabPanel>
						<TabPanel value={this.state.value} index={1} style={{backgroundColor: 'white'}} className='mb-5 MuiPaper-elevation3'>
							<Container fluid>
								<Row>
									<Col xs={4}>
										<Paper elevation={3} style={{borderRadius: 10}}>
											<Image style={{width: '100%', borderRadius: 10}} src={fashionStylist}/>
										</Paper>
									</Col>
									<Col>
										<Row className='justify-content-center'>
											<h5 style={{fontStyle: 'italic', fontFamily: 'Poppins'}}>From our Fashion Stylist</h5>
										</Row>
										<Row className='justify-content-center'>
											<h3 style={{fontFamily: 'Poppins', fontWeight: 600, color: COLORS.primary}}>Pooja Shinde</h3>
										</Row>
										<Row className='text-justify mt-2 px-5'>
											<p style={{fontFamily: 'Poppins'}}><b>Fashion Stylist Pooja Shinde</b> is one of the leading voices within India's Fashion
												Community. She can literally turn girls next door into a <b>high-octane glamour.</b></p>
										</Row>
										<Row className='text-justify px-5'>
											<p style={{fontFamily: 'Poppins'}}><b style={{fontSize: 20}}>S</b>he integrates all aspects of a female's visual aesthetic to make her look as fashionable
												and stylized as possible. Management between her clients' comfort and fabulous style look
												is what makes her attract like queen bees. She co-ordinates with her clients style, adding
												some dramatic charm to roast the look.</p>
										</Row>
										<Row className='text-justify px-5'>
											<p style={{fontFamily: 'Poppins'}}>
												Her clients looks are just the reflection of her daily approach in styling <b>Clothing and
												Accessorizing</b>. She also helps many models in finding their place in the fashion industry.
												Sensuality is about being comfortable with yourself and not shying away. One must
												comprehend that it needs practice to live a sensual lifestyle.
											</p>
										</Row>
										<Row className='text-justify px-5'>
											<p style={{fontFamily: 'Poppins'}}><b style={{fontSize: 20}}>L</b>astly her message to entire fashion community, in other words live your life to
												your fullest — <b style={{color: COLORS.secondary}}>" Year 2020-2021, Sensual Fashion. Youths' Passion. "</b></p>
										</Row>
									</Col>
								</Row>
							</Container>
						</TabPanel>
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default Fashion;