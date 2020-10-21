import React, {Component} from 'react';
import {Accordion, AccordionSummary, Paper, Toolbar, Typography, AccordionDetails, IconButton} from "@material-ui/core";
import {Col, Container, Image, Modal, Row} from "react-bootstrap";
import {horizontalImages, verticalImages} from "../content/gallery";
import {Close, ExpandMore} from "@material-ui/icons";
import {images} from '../content/old-issue';
import HTMLFlipBook from "react-pageflip/src/pageflip";
import COLORS from "../colors";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colSize: 4,
			image: null,
			modalShow: false
		}
		this.onImgLoad = this.onImgLoad.bind(this)
	}

	componentDidMount() {
		document.title = 'Gallery - The Niche Fashion Community'
	}

	onImgLoad({target: img}) {
		const h = img.offsetHeight
		const w = img.offsetWidth
		if (w > h)
			this.setState({colSize: 12})
		else
			this.setState({colSize: 6})
	}

	showModal(modalShow) {
		this.setState({modalShow})
	}

	render() {
		return (
			<React.Fragment>
				{this.state.image ?
					<Modal size='xl' aria-labelledby="contained-modal-title-vcenter" show={this.state.modalShow}
								 onHide={() => this.showModal(false)} style={{zIndex: 9999}} centered>
						<Modal.Body>
							<Container fluid>
								<Row className='justify-content-end px-3 px-sm-0'>
									<Col xs={1}>
										<IconButton aria-label='close' onClick={() => this.showModal(false)}>
											<Close style={{color: COLORS.primary}}/>
										</IconButton>
									</Col>
								</Row>
								<Row className='p-0'>
									<Col className='p-0'>
										{this.state.image}
									</Col>
								</Row>
							</Container>
						</Modal.Body>
					</Modal>
					: null}
				<Container fluid>
					<Row className='p-5'/>
				</Container>
				<Toolbar>
					<Container className='mb-5'>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>Gallery</p>
						<Accordion defaultExpanded>
							<AccordionSummary
								expandIcon={<ExpandMore/>}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography style={{fontFamily: 'Montserrat', fontWeight: 600}}>Old Issue</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Container fluid>
									<HTMLFlipBook size='stretch' width={1283} height={1797}>
										{images.map((image, i) =>
											<Image key={i + 1} src={image} style={{width: '100%'}}/>
										)}
									</HTMLFlipBook>
								</Container>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMore/>}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography style={{fontFamily: 'Montserrat', fontWeight: 600}}>Pictures</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Container fluid>
									{horizontalImages.map((image, i) => <Row key={i} className='mb-5 p-0'>
										<Col className='p-0' xs={12} onClick={() => {
											this.setState({image}, () => {
												this.showModal(true)
											})
										}}>
											<Paper elevation={3} style={{borderRadius: 10}}>
												{image}
											</Paper>
										</Col>
									</Row>)}
									{verticalImages.leftVertical.map((image, i) => <Row key={i} className='mb-5 p-0'>
										{verticalImages.leftVertical[i] ? <Col xs={12} sm={6} className='mb-5 mb-sm-0 p-0' onClick={() => {
											this.setState({image: verticalImages.leftVertical[i]}, () => {
												this.showModal(true)
											})
										}}>
											<Paper elevation={3} style={{borderRadius: 10}}>
												{verticalImages.leftVertical[i]}
											</Paper>
										</Col> : null}
										{verticalImages.rightVertical[i] ? <Col className='p-0' xs={12} sm={6} onClick={() => {
											this.setState({image: verticalImages.rightVertical[i]}, () => {
												this.showModal(true)
											})
										}}>
											<Paper elevation={3} style={{borderRadius: 10}}>
												{verticalImages.rightVertical[i]}
											</Paper>
										</Col> : null}
									</Row>)}
								</Container>
							</AccordionDetails>
						</Accordion>
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default Gallery;