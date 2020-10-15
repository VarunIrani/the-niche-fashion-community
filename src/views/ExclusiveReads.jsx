import React, {Component} from 'react';
import {Toolbar} from "@material-ui/core";
import {Container, Row} from "react-bootstrap";
import {exclusive_reads} from "../content/exclusive-reads";
import ExclusiveRead from "../components/ExclusiveRead";

class ExclusiveReads extends Component {
	componentDidMount() {
		document.title = 'Exclusive Reads - The Niche Fashion Community'
	}

	render() {
		return (
			<React.Fragment>
				<Container fluid>
					<Row className='p-5'/>
				</Container>
				<Toolbar>
					<Container>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>Exclusive
							Reads</p>
						<p style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: 600, color: '#ffce66'}}>Articles</p>
						{exclusive_reads.articles.map((article, index) => <ExclusiveRead key={index} article={article}/>)}
						<Row className='mb-5' />
						<p style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: 600, color: '#ffce66'}}>Indian Brands</p>
						{exclusive_reads.indian.map((article, index) => <ExclusiveRead key={index} article={article}/>)}
						<Row className='mb-5' />
						<p style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: 600, color: '#ffce66'}}>International Brands</p>
						{exclusive_reads.international.map((article, index) => <ExclusiveRead key={index} article={article}/>)}
						<Row className='mb-5' />
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default ExclusiveReads;