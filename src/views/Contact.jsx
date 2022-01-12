import React, {Component} from 'react';
import {Toolbar, Paper} from "@material-ui/core";
import {Container, Row, Col, ResponsiveEmbed, Image} from "react-bootstrap";
import {team} from "../content/team";
import {Email, GitHub, Phone} from "@material-ui/icons";

class Contact extends Component {
  componentDidMount() {
    document.title = 'Contact - The Niche Fashion Community'
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row className='p-5'/>
        </Container>
        <Toolbar>
          <Container className='mb-5'>
            <p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>Contact Us</p>
            <Row className='align-items-center'>
              <Col xs={12} sm={7} md={7}>
                <Paper elevation={3} style={{borderRadius: 10}}>
                  <iframe
                    title='maps'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.8154452120979!2d73.87671822918232!3d18.51706869921321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0458a9015fd%3A0x81a6469dfa52c5aa!2sDastur%20Meher%20Rd%2C%20Pune%2C%20Maharashtra%20411001!5e0!3m2!1sen!2sin!4v1602430960263!5m2!1sen!2sin"
                    frameBorder="0" style={{borderRadius: 10, width: '100%', height: '60vh'}} allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0">
                  </iframe>
                </Paper>
              </Col>
              <Col className='mt-4 mt-sm-0'>
                <Row className='mb-3'>
                  <Col xs={12} md={12} lg={7}>
                    <ResponsiveEmbed aspectRatio='1by1'>
                      <Image src={team["1"][0].image} alt={team["1"][0].name}
                             style={{borderRadius: '100%', border: '6px solid #ffce66'}}/>
                    </ResponsiveEmbed>
                  </Col>
                  <Col className='my-auto'>
                    <Row className='justify-content-center text-center text-md-center text-lg-left'>
                      <Col xs={12} md={12} className='mt-sm-0 mt-3 mt-md-3'>
                        <p style={{
                          fontFamily: 'Poppins',
                          fontWeight: 600,
                          color: '#ffce66',
                          fontSize: 24
                        }}>{team["1"][0].name}</p>
                      </Col>
                      <Col xs={12} md={12}>
                        <p style={{fontFamily: 'Poppins', fontSize: 18, color: '#ffce66'}}>{team["1"][0].description}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='px-3 justify-content-center text-center justify-content-md-start text-md-left'>
                  <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    color: '#ffce66',
                    fontSize: 18
                  }}>Address</p>
                  <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    color: '#fff',
                    fontSize: 18
                  }}>
                    873, Kapadia Building, Flat No. 2, Ground floor, Dastur Meher Road, Camp,
                    Pune 411 001
                  </p>
                </Row>
                <Row className='px-3 px-md-0 px-lg-3 justify-content-center justify-content-lg-start'>
                  <Email style={{color: '#ffce66'}} className='mr-3'/>
                  <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    color: '#fff',
                    fontSize: 18
                  }}>
                    {team["1"][0].contact[0].text}
                  </p>
                </Row>
                <Row className='px-3 px-md-0 px-lg-3 justify-content-center justify-content-lg-start'>
                  <Phone style={{color: '#ffce66'}} className='mr-3'/>
                  <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    color: '#fff',
                    fontSize: 18
                  }}>
                    {team["1"][0].contact[1].text}
                  </p>
                </Row>
              </Col>
            </Row>
            <Row className='mt-4 text-white justify-content-center'>
              <h6>Designed and Developed by - Varun Rustom Irani</h6>
            </Row>
            <Row className='text-white justify-content-center'>
              <GitHub/> <a className='ml-3 text-white' style={{cursor: "pointer", textDecoration: 'none'}}
                           target='_blank' href='https://github.com/VarunIrani'>https://github.com/VarunIrani</a>
            </Row>
          </Container>
        </Toolbar>
      </React.Fragment>
    );
  }
}

export default Contact;
