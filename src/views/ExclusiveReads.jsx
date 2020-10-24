import React, {Component} from 'react';
import {Toolbar} from "@material-ui/core";
import {Container, Row} from "react-bootstrap";
import {getExclusiveReads} from "../content/exclusive-reads";
import ExclusiveRead from "../components/ExclusiveRead";

class ExclusiveReads extends Component {
  state = {
    exclusive_reads: null
  }

  componentDidMount() {
    document.title = 'Exclusive Reads - The Niche Fashion Community'
    getExclusiveReads().then(r => {
      this.setState({exclusive_reads: r})
    })
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
            {this.state.exclusive_reads ? <React.Fragment>
              <p style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 600, color: '#ffce66'}}>Articles</p>
              {this.state.exclusive_reads.articles.map((article, index) => <ExclusiveRead key={index}
                                                                                          article={article}/>)}
              <Row className='mb-5'/>
              <p style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 600, color: '#ffce66'}}>Indian Brands</p>
              {this.state.exclusive_reads.indian.map((article, index) => <ExclusiveRead key={index}
                                                                                        article={article}/>)}
              <Row className='mb-5'/>
              <p style={{fontFamily: 'Poppins', fontSize: 20, fontWeight: 600, color: '#ffce66'}}>International
                Brands</p>
              {this.state.exclusive_reads.international.map((article, index) => <ExclusiveRead key={index}
                                                                                               article={article}/>)}
            </React.Fragment> : null}
            <Row className='mb-5'/>
          </Container>
        </Toolbar>
      </React.Fragment>
    );
  }
}

export default ExclusiveReads;