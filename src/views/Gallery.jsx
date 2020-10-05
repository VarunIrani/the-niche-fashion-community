import React, {Component} from 'react';
import {Toolbar} from "@material-ui/core";
import {Container, Row} from "react-bootstrap";
import COLORS from "../colors";

class Gallery extends Component {
	render() {
		return (
			<React.Fragment>
				<Container fluid >
					<Row className='p-5'/>
					<Row className='p-3'/>
				</Container>
				<Toolbar >
					<Container>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: COLORS.primary}}>Gallery</p>
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default Gallery;