import React, {Component} from 'react';
import {Toolbar} from "@material-ui/core";
import {Container, Row} from "react-bootstrap";

class ExclusiveReads extends Component {
	componentDidMount() {
		document.title = 'Exclusive Reads - The Niche Fashion Community'
	}
	render() {
		return (
			<React.Fragment>
				<Container fluid >
					<Row className='p-5'/>
				</Container>
				<Toolbar >
					<Container>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>Exclusive Reads</p>
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default ExclusiveReads;