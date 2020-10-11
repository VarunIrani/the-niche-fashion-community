import React, {Component} from 'react';
import {Toolbar, Accordion, AccordionSummary, AccordionDetails, Paper, Typography} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import {Container, Row, Col, Image} from "react-bootstrap";
import COLORS from "../colors";
import mickey0 from "../assets/img/health-fitness/0.jpg";
import mickey1 from "../assets/img/health-fitness/1.jpg";
import {qna} from "../content/health-fitness";

class HealthFitness extends Component {
	componentDidMount() {
		document.title = 'Health & Fitness - The Niche Fashion Community'
	}
	render() {
		return (
			<React.Fragment>
				<Container fluid>
					<Row className='p-5'/>
				</Container>
				<Toolbar>
					<Container className='mb-5'>
						<p style={{fontFamily: 'Poppins', fontSize: 24, fontWeight: 600, color: 'white'}}>Health &
							Fitness</p>
						<p style={{fontFamily: 'Poppins', fontSize: 18, color: 'black', fontWeight: 'bold'}}>Get Energised!, Maximised!,
							Mickeymized! - by Aditi Kumari</p>
						<Accordion defaultExpanded>
							<AccordionSummary
								expandIcon={<ExpandMore/>}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography style={{fontFamily: 'Montserrat', fontWeight: 600}}>Mickey's Thoughts</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Container fluid>
									<Row>
										<Col xs={4}>
											<Paper elevation={3} style={{borderRadius: 10}}>
												<Image style={{width: '100%', borderRadius: 10}} src={mickey0}/>
											</Paper>
										</Col>
										<Col>
											<Row className='text-justify px-5'>
												<p style={{fontFamily: 'Poppins'}}><b style={{fontSize: 20}}>M</b>ickey Mehta is an Indian
													leading holistic health guru, author, life coach. He is known for his fitness advice on
													physical wellness. He bought in his own signature style which he calls it as yoga workouts
													enabling people to look adequately both physically and mentally. In a world full of
													fitness-seekers, Mickey Mehta is a literate holding conceivable ways for all the age groups to
													become fitter than before. He believes in transforming minds and bodies by changing peoples'
													lifestyles. He always has this conviction to pull off a great show in him. Ready with the tips
													to make the time and planning perfect for all those stuck in their home for a very long
													lockdown. Mickey Mehta hits up a live Facebook show.</p>
											</Row>
											<Row className='text-justify mt-2 px-5'>
												<p style={{fontFamily: 'Poppins'}}><b style={{fontSize: 20}}>P</b>romoting good health he began
													to talk about what all should eat in this lockdown which will add on to glow and sparkle in
													our body. So for all those who want wellness in their daily life, you need to start watching
													him learn what to eat so as to lead a healthy life.
													GETTING LOCKED UP IS FUN — says Mickey Mehta.</p>
											</Row>
										</Col>
									</Row>
									<Row className='text-justify mt-2 px-5'>
										<p style={{fontFamily: 'Poppins'}}>
											That totally depends on how you look at it. Connecting it with the old song of Dimple Kapadia
											and Rishi Kapoor, "Hum turn ek kamre me bandh ho our chabhi kho Jaye. He says - the key you
											lose for the outside door helps you to open the door within you. Mickey completely means to
											say that it is the perfect time to invest in self-development so as to evolve well both
											physically and mentally. His enthusiasm encourages us to be ready to take challenges like
											exercise challenges. By encouraging to do - yoga, we have never done before, to breathe deeper
											and cleaner than before, to eat cleaner and healthier than before, and to eat more fruits than
											before.
										</p>
									</Row>
									<Row className='my-5'>
										<Col>
											<Row className='text-justify px-5'>
												<p style={{fontFamily: 'Poppins'}}><b style={{fontSize: 20}}>M</b>ickey believes that champions
													are born out of challenges. So this lockdown is a challenge that could be used to transform
													ourselves into a hard metal that will shine forever. He then himself puts up a question — "Are
													human beings so scared of a disease that we can't even take care of ourselves?" But he says
													that he has always learned to be only scared of God. Certainly, we are all scared presently
													but we must take a lot of consideration. We have all just tried to ruin our bodies. Instead,
													our bodies should be nurtured rather than making it a bad gutter. For that matter, we have to
													stop consuming junk. Whether that junk is on TV, on web series, in daily soap operas, or junk
													in the food. So stop being junkies and stop collecting junk from around. </p>
											</Row>
											<Row className='text-justify mt-2 px-5'>
												<p style={{fontFamily: 'Poppins'}}><b style={{fontSize: 20}}>H</b>e further says - We are in
													suspended animation condition right now. Most of us are alive but are not throbbing with life.
													One should have infinite invisible energy immunity so as to throb with your life. Good
													immunity comes from fresh air, sunshine, clean water, meditation, and good food. He says to
													begin with good eating must start eating fruits. Fruits that are fresh and sweet renovate your
													body. So one should always enjoy fruit-eating. He likes to twist, turn, tumble, and pull up.
													So he likes to eat groundnuts as he likes to workout like monkeys. Mickey likes bananas, he
													says the elephants are strong as they eat so many bananas so he also loves to eat a banana
													every day. An apple a day keeps a doctor away but fruits every day will keep the doctor out of
													your way.
												</p>
											</Row>
											<Row className='text-center justify-content-center px-5'>
												<p style={{
													fontFamily: 'Poppins',
													fontWeight: 'bold',
													color: COLORS.secondary,
													fontSize: 18
												}}>Fruits are
													healers, vegetables are good
													cleansers. So eat them as much.
												</p>
											</Row>
											<Row className='text-center justify-content-center px-5'>
												<p style={{
													fontFamily: 'Poppins',
													fontWeight: 'bold',
													color: COLORS.secondary,
												}}>Always Remember - Be optimistic, Be positive, Be full of energy to beat any disease.
												</p>
											</Row>
											<Row className='text-justify mt-2 px-5'>
												<p style={{fontFamily: 'Poppins'}}>He talks about how peaceful your day can be. We just have to
													be more observant to observe the nature around, listen to the chirping of birds, sounds of
													crinkling leaves, feel the air around which will ultimately make you more positive. He moves
													further and involves his audiences. He then starts taking up the questions put up to him by
													his followers.
												</p>
											</Row>
											<Row className='px-5'>
												<p style={{
													fontFamily: 'Poppins',
													fontWeight: 'bold',
													color: COLORS.primary,
												}}>Compiled live from Mickeys' Interview with his fans on FACEBOOK by,
												</p>
											</Row>
											<Row className='px-5'>
												<p style={{
													fontFamily: 'Poppins',
													fontWeight: 'bold',
													color: COLORS.primary,
												}}>- Aditi Kumari
												</p>
											</Row>
										</Col>
										<Col xs={3}>
											<Paper elevation={3} style={{borderRadius: 10}}>
												<Image style={{width: '100%', borderRadius: 10}} src={mickey1}/>
											</Paper>
										</Col>
									</Row>
								</Container>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMore/>}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography style={{fontFamily: 'Montserrat', fontWeight: 600}}>Interview Q&A</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Container fluid>
									{qna.map((e, index) =>
										<Row key={index} className='my-5'>
											{index % 2 === 0 ? <React.Fragment>
												<Col xs={index === 0 ? 12 : 5}>
													<Paper elevation={3} style={{borderRadius: 10}}>
														<Image style={{width: '100%', borderRadius: 10}} src={e.image}/>
													</Paper>
												</Col>
												<Col>
													{e.qna.map((q, index) => <React.Fragment>
														<Row className={`text-justify px-5 ${index === 0 ? 'mt-5' : ''}`}>
															<p style={{fontFamily: 'Poppins', color: COLORS.primary}}><b>Q - {q.question}</b></p>
														</Row>
														<Row className='text-justify px-5'>
															<p style={{fontFamily: 'Poppins'}}><b>A - </b>{q.answer}</p>
														</Row>
													</React.Fragment>)}
												</Col>
											</React.Fragment> : <React.Fragment>
												<Col>
													{e.qna.map((q, index) => <React.Fragment>
														<Row className='text-justify px-5'>
															<p style={{fontFamily: 'Poppins', color: COLORS.primary}}><b>Q - {q.question}</b></p>
														</Row>
														<Row className='text-justify px-5'>
															<p style={{fontFamily: 'Poppins'}}><b>A - </b>{q.answer}</p>
														</Row>
													</React.Fragment>)}
												</Col>
												<Col xs={5}>
													<Paper elevation={3} style={{borderRadius: 10}}>
														<Image style={{width: '100%', borderRadius: 10}} src={e.image}/>
													</Paper>
												</Col>
											</React.Fragment>}
										</Row>)}
									<Row className='text-justify px-4 my-5'>
										<Col>
											<p style={{fontFamily: 'Poppins'}}>In the end, he says not to forget there are two important days in human lives: 1st - when we are
												born and 2nd - when we realise why? So let's realise the purpose to live. • Sleep every night
												with the wish to heal yourself and wake up every morning with the promise to heal the world. •
												Eat clean, eat green. Don't be mean, plug out from the machine. • Go Green !!!</p>
										</Col>
									</Row>
								</Container>
							</AccordionDetails>
						</Accordion>
					</Container>
				</Toolbar>
			</React.Fragment>
		);
	}
}

export default HealthFitness;