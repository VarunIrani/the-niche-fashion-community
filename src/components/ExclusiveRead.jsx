import React, {Component} from 'react';
import {Col, Container, Modal, ResponsiveEmbed, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {Button, IconButton, Paper} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import COLORS from "../colors";
import {toArray} from 'paragraph-builder';

class ExclusiveRead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			splitContent: [],
			extraImages: null
		}

		this.showModal = this.showModal.bind(this)
	}

	showModal(modalShow) {
		this.setState({modalShow})
	}

	componentDidMount() {
		const article = this.props.article
		const content = article.content;
		const numImages = article.images.length
		const d = Math.round(content.length / numImages)
		let arr = toArray(content, d).filter((e) => e !== "")
		let splitContent = [];
		let extra = [];
		let iTags = [];

		article.images.forEach((image, index) => {
			if (arr[index] !== undefined) {
				splitContent.push({
					text: arr[index],
					image
				})
			} else {
				extra.push(image)
			}
		})

		extra.forEach((image, i) => {
			const img = document.createElement('img')
			img.src = image
			iTags.push(img);
		})

		const hImages = iTags.filter((i) => i.width > i.height)
		const vImages = iTags.filter((i) => i.width < i.height)

		const extraImages = {hImages, vImages}

		this.setState({splitContent, extraImages})
	}

	render() {
		const article = this.props.article
		return (
			<React.Fragment>
				<Modal size='xl' aria-labelledby="contained-modal-title-vcenter" show={this.state.modalShow}
							 onHide={() => this.showModal(false)} style={{zIndex: 9999}}>
					<Modal.Body>
						<Container fluid>
							<Row className='justify-content-between'>
								<Col className='my-auto'>
									<p style={{fontFamily: 'Montserrat', fontWeight: 600, fontSize: 18}}
										 className='my-auto'>{article.title}</p>
								</Col>
								<Col xs={1} className='px-5 px-sm-0 px-md-0'>
									<IconButton aria-label='close' onClick={() => this.showModal(false)}>
										<Close style={{color: COLORS.primary}}/>
									</IconButton>
								</Col>
							</Row>
							{this.state.splitContent.length ?
								this.state.splitContent.map((content, index) =>
									<Row className='justify-content-center align-items-center mb-3 mt-3' key={index}>
										{index % 2 === 0 ? <Col xs={12} sm={12} lg={4}>
											<Paper elevation={3} style={{borderRadius: 10}}>
												<Image src={content.image} style={{width: '100%', borderRadius: 10}}/>
											</Paper>
										</Col> : null}
										<Col className='px-3 px-sm-3 mt-3 mt-sm-3'>
											<Row className='text-justify'>
												<p style={{fontFamily: 'Poppins', fontWeight: 500, fontSize: 16}}>{content.text}</p>
											</Row>
										</Col>
										{index % 2 !== 0 ? <Col xs={12} sm={12} lg={4}>
											<Paper elevation={3} style={{borderRadius: 10}}>
												<Image src={content.image} style={{width: '100%', borderRadius: 10}}/>
											</Paper>
										</Col> : null}
									</Row>)
								: null}
							{this.state.extraImages ? <React.Fragment>
									<Row className='justify-content-center mb-3'>
										{this.state.extraImages.hImages.map((image, index) => <Col lg={4} sm={12} xs={12} key={index} className='mb-3'>
											<Paper elevation={3} style={{borderRadius: 10}}>
												<Image src={image.src} style={{width: '100%', borderRadius: 10}}/>
											</Paper>
										</Col>)}
									</Row>
									<Row className='justify-content-center mb-3'>
										{this.state.extraImages.vImages.map((image, index) => <Col lg={4} sm={12} xs={12} key={index} className='mb-3'>
											<Paper elevation={3} style={{borderRadius: 10}}>
												<Image src={image.src} style={{width: '100%', borderRadius: 10}}/>
											</Paper>
										</Col>)}
									</Row>
								</React.Fragment>
								: null}
						</Container>
					</Modal.Body>
				</Modal>

				<Row className='mb-3 text-center text-sm-left'>
					<Col sm={4} xs={12}>
						<ResponsiveEmbed aspectRatio='1by1'>
							<Image src={article.thumbnail}
										 style={{width: '100%', borderRadius: 10}}/>
						</ResponsiveEmbed>
					</Col>
					<Col className='mt-3 mt-sm-0'>
						<Row>
							<p style={{
								fontFamily: 'Poppins',
								fontWeight: 600,
								fontSize: 22,
								color: 'white'
							}}>{article.title.toLowerCase()
								.split(' ')
								.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
								.join(' ')}</p>
						</Row>
						<Row className='text-center text-sm-left'>
							<p style={{
								fontFamily: 'Poppins',
								fontWeight: 500,
								fontSize: 16,
								color: 'white'
							}}>{article.content.substring(0, 200)}...</p>
						</Row>
						<Row className='justify-content-center justify-content-sm-start'>
							<Button variant='contained' onClick={() => {
								this.showModal(true)
							}} style={{backgroundColor: '#ffce66'}}>
								Read More
							</Button>
						</Row>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}

export default ExclusiveRead;