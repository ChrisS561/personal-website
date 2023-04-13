import React from "react";
import NavBar from "../Components/NavBar";
import SocialMedia from "../Components/SocialMedia";
import Footer2 from "../Components/Footer2";
import "./PagesCSS/Portfolio.css";
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button,
} from "reactstrap";
import project1 from "../Images/tic-tac-toe.png";
import project2 from "../Images/Copy of The CoFo Concept2.png";
import project3 from "../Images/Logo.png";
import project4 from "../Images/snakes.png";
import project5 from "../Images/tetris.png";
import project6 from "../Images/haskell.png";

const backgroundColor = "black";

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
									style={{ backgroundColor: "green" }}
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
									of JavaScript, HTML, CSS, and SQL. The website features a
									user-friendly interface that allows the client to easily write
									workout plans for their customers and manage their business
									with ease.
								</CardText>
								<Button
									// href="https://github.com/bloomqub/COFOConcept"
									style={{ backgroundColor: "green" }}
								>
									In progress
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
									and explore. I hope you enjoy exploring my website and learning
									more about my work as a software engineer.
								</CardText>
								{/* <Button
									href="https://github.com/ChrisS561/Portfolio"
									style={{ backgroundColor: "green" }}
								>
									View on Github
								</Button> */}
							</CardBody>
						</Card>
					</div>
					<div className="col-md-4">
						<Card className="text-black">
							<CardImg top width="100%" src={project4} alt="project4" />
							<CardBody>
								<CardTitle tag="h5">Project 4</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Python Wikipedia Language Influence for Programming Languages
								</CardSubtitle>
								<CardText>
									This project demonstrates my ability to use Python's Wikipedia
									API wrapper and dictionaries to extract links to programming
									languages and determine their level of influence. By analyzing
									the frequency of language links and plotting the most
									influential ones, I gained valuable experience in working with
									APIs and data analysis. This project showcases my skills in
									Python programming and data analysis.
								</CardText>
								{/* <Button
									href="https://github.com/ChrisS561/Python-wikipedia-language-"
									style={{ backgroundColor: "green" }}
								>
									View on Github
								</Button> */}
							</CardBody>
						</Card>
					</div>
					<div className="col-md-4">
						<Card className="text-black">
							<CardImg top width="100%" src={project5} alt="project5" />
							<CardBody>
								<CardTitle tag="h5">Project 5</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Prolog Tetris Board Solver for Programming Languages
								</CardSubtitle>
								<CardText>
									This Prolog Tetris Board Solver project showcases the
									backtracking capabilities of Prolog and its ability to find
									all possible solutions for a given board size and set of
									parts. We created a predicate called shape_fits to check if a
									shape would fit into the grid, breaking it down into a 1D list
									of blocks and checking the grid at each step using multiple
									predicates.
								</CardText>
								{/* <Button
									href="https://github.com/ChrisS561/Prolog-Tetris-Solver"
									style={{ backgroundColor: "green" }}
								>
									View on Github
								</Button> */}
							</CardBody>
						</Card>
					</div>
					<div className="col-md-4">
						<Card className="text-black">
							<CardImg top width="100%" src={project6} alt="project6" />
							<CardBody>
								<CardTitle tag="h5">Project 6</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Haskell L-Systems for Programming Languages
								</CardSubtitle>
								<CardText>
									This project explores L-Systems and Fractals in Haskell,
									demonstrating the importance of recursion in Haskell's
									recursive nature. The code uses grammatical systems to
									generate new sentences by iteratively re-writing a given
									sentence as a group of symbols, and defines the L systems
									axiom, symbols, and production. With this program, I was able
									to create fractals, including the Lévy curve, and the included
									commands file provided guidelines and error messages.
								</CardText>
								{/* <Button
									href="https://github.com/ChrisS561/Haskel-L-systems"
									style={{ backgroundColor: "green" }}
								>
									View on Github
								</Button> */}
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
			<SocialMedia/>
			<Footer2 backgroundColor={backgroundColor} />
		</>
	);
}
