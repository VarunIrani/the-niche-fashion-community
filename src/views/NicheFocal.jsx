import React, {Component} from 'react';
import {Toolbar} from "@material-ui/core";
import {Container, Row} from "react-bootstrap";

class NicheFocal extends Component {
	render() {
		return (
			<React.Fragment>
				<Container fluid >
					<Row className='p-5'/>
				</Container>
				<Toolbar >
					<Container>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>The Niche Focal</p>
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default NicheFocal;