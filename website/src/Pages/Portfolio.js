import React from 'react';
import NavBar from '../Components/NavBar';
import SocialMedia from '../Components/SocialMedia';
import Footer2 from '../Components/Footer2';
import './PagesCSS/Portfolio.css';
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button,
} from 'reactstrap';
import project1 from '../Images/tic-tac-toe.png';
import project2 from '../Images/Copy of The CoFo Concept2.png';
import project3 from '../Images/Logo.png';
import project4 from '../Images/Project4.jpg';

const backgroundColor = 'black';

export default function Github() {
	return (
		<>
			<NavBar />
			<div className="container">
				<h1 className="head">Github Repository</h1>
				<div className="row">
					<div className="col-md-4">
						<Card className="text-black">
							<CardImg top width="100%" src={project1} alt="project1" />
							<CardBody>
								<CardTitle tag="h5">Project 1</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Tic-Tic-Toe
								</CardSubtitle>
								<CardText>
									This is a web-based implementation of the classic game, Tic
									Tac Toe, built using JavaScript, HTML, and CSS. The game
									features a clean and intuitive user interface that allows
									players to easily make their moves and keeps track of the game
									progress. The program includes logic to detect when a player
									has won the game, and displays a message accordingly.
								</CardText>
								<Button
									href="https://github.com/ChrisS561/Tic-Tac-Toe"
									style={{ backgroundColor: 'green' }}
								>
									View on Github
								</Button>
							</CardBody>
						</Card>
					</div>
					<div className="col-md-4">
						<Card className="text-black">
							<CardImg top width="100%" src={project2} alt="project2" />
							<CardBody>
								<CardTitle tag="h5">Project 2</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									CofoConceptWebsite
								</CardSubtitle>
								<CardText>
									The Cofoconcept website is a comprehensive fitness platform
									that provides users with a range of tools and resources to
									help them achieve their fitness goals. This project was
									completed as a capstone project, and built using a combination
									of JavaScript, HTML, CSS, and (Firebase) NoSQL. The website
									features a user-friendly interface that allows the client to
									easily write workout plans for their customers and manage
									their business with ease.
								</CardText>
								<Button
									href="https://github.com/ChrisS561/COFOConcept-1"
									style={{ backgroundColor: 'green' }}
								>
									View on Github
								</Button>
							</CardBody>
						</Card>
					</div>
					<div className="col-md-4">
						<Card className="text-black">
							<CardImg top width="100%" src={project3} alt="project3" />
							<CardBody>
								<CardTitle tag="h5">Project 3</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Personal Website
								</CardSubtitle>
								<CardText>
									As a software engineer, my personal website highlights my
									technical skills and achievements, serving as a platform for
									me to share my portfolio and professional experience with
									potential clients and employers. Built using React.js and
									Bootstrap, the website features a sleek and modern design,
									with a user-friendly interface that makes it easy to navigate
									and explore. I hope you enjoy exploring my website and
									learning more about my work as a software engineer.
								</CardText>
								<Button
									href="https://github.com/ChrisS561/Portfolio"
									style={{ backgroundColor: 'green' }}
								>
									View on Github
								</Button>
							</CardBody>
						</Card>
					</div>
					<div className="col-md-4">
						<Card className="text-black">
							<CardImg top width="100%" src={project4} alt="project4" />
							<CardBody>
								<CardTitle tag="h5">Project 4</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Memorable Website
								</CardSubtitle>
								<CardText>
									Memorable Website is a personalized website designed to
									celebrate special occasions and create memorable experiences.
									With a focus on thoughtful and meaningful gifts, the website
									offers a unique platform for users to customize and present
									their heartfelt messages, photos, video and mini games for
									friends or loved ones.
								</CardText>
								<Button
									href="https://github.com/ChrisS561/MemorableWebsite"
									style={{ backgroundColor: 'green' }}
								>
									View on Github
								</Button>
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
			<SocialMedia />
			<Footer2 backgroundColor={backgroundColor} />
		</>
	);
}
