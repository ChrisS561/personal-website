import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import largeProfilePic from '../Images/IMG_3877 2.jpg';
import background from '../Images/Pxfuel.jpg';

const SocialMedia = lazy(() => import('./SocialMedia'));

const words = ['Software Engineer', 'Front-End Developer', 'Code Juggler'];

const styles = {
	backgroundImage: `url(${background})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'white',
	textAlign: 'center',
	padding: '20px', // Add padding for better spacing
};

const imageStyles = {
	borderRadius: '50%',
	width: '200px', // Reduce image size for smaller screens
	height: '200px', // Reduce image size for smaller screens
	border: '5px solid white',
	marginBottom: '10px', // Adjust margin for smaller screens
};

const titleStyles = {
	fontSize: '2rem', // Reduce font size for smaller screens
	marginBottom: '5px', // Adjust margin for smaller screens
};

const subtitleStyles = {
	fontSize: '1.5rem', // Reduce font size for smaller screens
	fontStyle: 'italic',
	marginBottom: '10px', // Adjust margin for smaller screens
};

const descriptionStyles = {
	maxWidth: '80%', // Adjust maximum width for smaller screens
	fontSize: '1rem', // Reduce font size for smaller screens
	margin: '10px 0', // Adjust margin for smaller screens
};

export default function HomePage() {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, 4000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="home-page" style={styles}>
			<h1 style={titleStyles}>👋 Welcome to my Portfolio!</h1>
			<img
				src={largeProfilePic}
				alt="Profile"
				className="home-page-image"
				style={imageStyles}
			/>
			<h1 className="home-page-title">Christopher Smith Jr</h1>
			<div className="home-page-subtitle">
				<span className="word">{words[currentWordIndex]}</span>
			</div>
			<div className="home-page-description" style={descriptionStyles}>
				<p>Hello, I'm Christopher Smith Jr, a Software Engineer 🚀</p>
				<p>
					I'm not just your average coder. I'm a problem-solving enthusiast with
					a knack for crafting transformative software and websites.
				</p>
				<p>
					My mission? To use technology to make a real and positive impact on
					people's lives.
				</p>
			</div>
			<Link to="/About" className="home-page-cta">
				Learn More About Me
			</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<SocialMedia />
			</Suspense>
		</div>
	);
}
