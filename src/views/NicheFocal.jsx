import React, {Component} from 'react';
import {AppBar, Box, Paper, Tab, Tabs, Toolbar} from "@material-ui/core";
import {Col, Container, Image, Row} from "react-bootstrap";
import COLORS from "../colors";

import {india} from "../content/focal";
import {international} from "../content/focal";

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


class NicheFocal extends Component {
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

	componentDidMount() {
		document.title = 'The Niche Focal - The Niche Fashion Community'
	}

	render() {

		return (
			<React.Fragment>
				<Container fluid>
					<Row className='p-5'/>
				</Container>
				<Toolbar>
					<Container className='mb-5'>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>The Niche Focal</p>
						<AppBar position='static' color='inherit'>
							<Tabs
								TabIndicatorProps={{
									style: {
										backgroundColor: COLORS.secondary,
										height: 4
									}
								}}
								value={this.state.value}
								aria-label="focal tabs"
								variant="scrollable"
							>
								<Tab label="India" {...a11yProps(0)} style={{fontFamily: 'Montserrat', fontWeight: 'bold'}}
										 onClick={() => {
											 this.handleChange(0)
										 }}/>
								<Tab label="International" {...a11yProps(1)} style={{fontFamily: 'Montserrat', fontWeight: 'bold'}}
										 onClick={() => {
											 this.handleChange(1)
										 }}/>
							</Tabs>
						</AppBar>
						<TabPanel value={this.state.value} index={0} style={{backgroundColor: 'white'}}
											className='mb-5 MuiPaper-elevation3'>
							<Container fluid>
								{india.map((value, index) => <React.Fragment  key={index}>
										<Row>
											<p style={{
												fontFamily: 'Poppins',
												fontSize: 18,
												fontWeight: 600,
												color: COLORS.primary
											}}>{value.title}</p>
										</Row>
									{value.images.map((image, i) =>
										<Row key={i} className='mb-3'>
											<Col>
												<Paper elevation={3} style={{borderRadius: 10}}>
													<Image style={{width: '100%', borderRadius: 10}} src={image}/>
												</Paper>
											</Col>
										</Row>
									)}
									</React.Fragment>
								)}
							</Container>
						</TabPanel>
						<TabPanel value={this.state.value} index={1} style={{backgroundColor: 'white'}}
											className='mb-5 MuiPaper-elevation3'>
							<Container fluid>
								{international.map((image, i) =>
									<Row key={i} className='mb-3'>
										<Col>
											<Paper elevation={3} style={{borderRadius: 10}}>
												<Image style={{width: '100%', borderRadius: 10}} src={image}/>
											</Paper>
										</Col>
									</Row>
								)}
							</Container>
						</TabPanel>
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default NicheFocal;