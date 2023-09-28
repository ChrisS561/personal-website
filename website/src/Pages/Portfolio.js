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
import project4 from '../Images/tic-tac-toe.png';
import project2 from '../Images/Copy of The CoFo Concept2.png';
import project3 from '../Images/Logo.png';
import project1 from '../Images/Cookbook.png';

// Use CSS-in-JS for better control over styles
const cardStyles = {
	marginBottom: '40px',
	animation: 'slideInFromBottom 1s ease-in 0s 1 normal both',
};

export default function Github() {
	const pictures = [project1, project2, project3, project4];
	return (
		<>
			<NavBar />
			<div className="container">
				<h1 className="head">GitHub Repository</h1>
				<h2 className="head">Total Projects: {pictures.length}</h2>
				<div className="row">
					{pictures.map((project, index) => (
						<div key={index} className="col-md-4">
							<Card style={cardStyles}>
								<CardImg
									top
									width="100%"
									src={project}
									alt={`project${index}`}
									className="card-img"
								/>
								<CardBody>
									<CardTitle tag="h5" className="card-title">
										Project {index + 1}
									</CardTitle>
									<CardSubtitle
										tag="h6"
										className="mb-2 text-muted card-subtitle"
									>
										{getProjectSubtitle(index)}
									</CardSubtitle>
									<CardText className="card-text text-black">
										{getProjectDescription(index)}
									</CardText>
									<CardText className="card-text text-black">
										Tech used:
										{getProjectTech(index).map((tech, techIndex) => (
											<span key={techIndex} className="bubblePort">
												{tech}
											</span>
										))}
									</CardText>
									<Button
										href={getProjectLink(index)}
										style={{ backgroundColor: 'green' }}
										className="card-button"
									>
										{getProjectButtonLabel(index)}
									</Button>
								</CardBody>
							</Card>
						</div>
					))}
				</div>
			</div>
			<SocialMedia />
			<Footer2 />
		</>
	);
}

// Define functions to get project details
function getProjectSubtitle(index) {
	const subtitles = [
		'CookBook Wizard',
		'CofoConceptWebsite',
		'Personal Website',
		'Tic-Tac-Toe',
	];
	return subtitles[index];
}

function getProjectDescription(index) {
	const stopWriting = 370
	const descriptions = [
		'This project showcases my skills in developing a recipe search web application using React.js, Firebase for authentication, and external APIs. The main functionality of the application allows users to input the ingredients they have in their house, and based on their input, the application displays a list of recipes that can be made using those ingredients.',
		'Cofoconcept is a full-stack responsive fitness website built with a focus on usability and functionality. It allows our client to create and manage workout plans for their clients. The platform also includes features for uploading and selling fitness-related content such as photos, videos, and eBooks, with payment processing through PayPal and a RESTful API.',
		'As a software engineer, my personal website highlights my technical skills and achievements, serving as a platform for me to share my portfolio and professional experience with potential clients and employers. The website features a sleek and modern design, with a user-friendly interface that makes it easy to navigate and explore. I hope you enjoy. ',
		'This is a web-based implementation of the classic game, Tic Tac Toe, built using JavaScript, HTML, and CSS. The game features a clean and intuitive user interface that allows players to easily make their moves and keeps track of the game progress. The program includes logic to detect when a player has won the game, and displays a message accordingly.',
	];
	if(descriptions[index].length >= stopWriting){
		return null
	}
	return descriptions[index];
}

function getProjectTech(index) {
	const techStacks = [
		['React.js', 'Firebase', 'External APIs'],
		['React.js', 'Node.js', 'RESTful API',"Bootstrap"],
		['React.js', 'Bootstrap', 'HTML/CSS'],
		['JavaScript', 'HTML', 'CSS'],
	];
	return techStacks[index];
}

function getProjectLink(index) {
	const links = [
		'https://github.com/ChrisS561/recipe-book',
		'https://github.com/ChrisS561/COFOConcept-1',
		'https://github.com/ChrisS561/Portfolio',
		'https://github.com/ChrisS561/Tic-Tac-Toe',
	];
	return links[index];
}

function getProjectButtonLabel(index) {
	const labels = [
		'View on Github',
		'View on Github',
		'View on Github',
		'View on Github',
	];
	return labels[index];
}
