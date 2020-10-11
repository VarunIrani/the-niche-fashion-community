import React, {Component} from 'react';
import {Toolbar} from "@material-ui/core";
import {Container, Row} from "react-bootstrap";

class Home extends Component {
	componentDidMount() {
		document.title = 'Home - The Niche Fashion Community'
	}

	render() {
		return (
			<React.Fragment>
				<Container fluid >
					<Row className='p-5'/>
				</Container>
				<Toolbar >
					<Container>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>Home</p>
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default Home;