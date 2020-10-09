import React, {Component} from 'react';
import {Paper, Toolbar} from "@material-ui/core";
import {Col, Container, Row} from "react-bootstrap";
import {horizontalImages, verticalImages} from "../content/gallery";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colSize: 4
		}
		this.onImgLoad = this.onImgLoad.bind(this)
	}

	onImgLoad({target: img}) {
		const h = img.offsetHeight
		const w = img.offsetWidth
		if (w > h)
			this.setState({colSize: 12})
		else
			this.setState({colSize: 6})
	}

	render() {
		return (
			<React.Fragment>
				<Container fluid>
					<Row className='p-5'/>
				</Container>
				<Toolbar>
					<Container>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>Gallery</p>
						{horizontalImages.map((image, i) => <Row key={i} className='mb-5'>
							<Col xs={12}>
								<Paper elevation={3} style={{borderRadius: 10}}>
									{image}
								</Paper>
							</Col>
						</Row>)}
						{verticalImages.leftVertical.map((image, i) => <Row key={i} className='mb-5'>
							{verticalImages.leftVertical[i] ? <Col xs={6}>
								<Paper elevation={3} style={{borderRadius: 10}}>
									{verticalImages.leftVertical[i]}
								</Paper>
							</Col> : null}
							{verticalImages.rightVertical[i] ? <Col xs={6}>
								<Paper elevation={3} style={{borderRadius: 10}}>
									{verticalImages.rightVertical[i]}
								</Paper>
							</Col> : null}
						</Row>)}
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default Gallery;