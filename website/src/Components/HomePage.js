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
	height: '100vh',
	width: '100vw',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'white', // Text color
	textAlign: 'center', // Center align text
};

const imageStyles = {
	borderRadius: '50%',
	width: '250px', // Adjust the size as needed
	height: '250px', // Adjust the size as needed
	border: '5px solid white', // Add a border around the image
	marginBottom: '20px', // Add space below the image
};

const titleStyles = {
	fontSize: '2.5rem', // Increase the font size
	marginBottom: '10px', // Add space below the title
};

const subtitleStyles = {
	fontSize: '1.8rem', // Increase the font size
	fontStyle: 'italic', // Make it italic
};

const descriptionStyles = {
	maxWidth: '600px', // Limit the width of the description
	fontSize: '1.2rem', // Increase the font size
	margin: '20px 0', // Add space around the description
};


export default function HomePage() {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		// Create a timer to switch between words every 2 seconds (adjust as needed)
		const timer = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, 4000);

		// Clear the timer when the component unmounts
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="home-page" style={styles}>
			<h1>👋 Welcome to my Portfolio!</h1>
			<img
				srcSet={`${largeProfilePic} 1024w,
                  ${largeProfilePic} 768w,
                  ${largeProfilePic} 480w`}
				sizes="(max-width: 480px) 100vw,
               (max-width: 768px) 50vw,
               33vw"
				src={largeProfilePic}
				alt="Profile"
				className="home-page-image"
				style={imageStyles}
			/>
			<h1 className="home-page-title" style={titleStyles}>
				Christopher Smith Jr
			</h1>
			<div className="home-page-subtitle" style={subtitleStyles}>
				<span className="word">{words[currentWordIndex]}</span>
			</div>
			<div class="home-page-description" style={descriptionStyles}>
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
			<Link to="/About" className="home-page-cta" >
				Learn More About Me
			</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<SocialMedia />
			</Suspense>
			{/* <Skills /> */}
		</div>
	);
}
