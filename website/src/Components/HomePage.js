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
	minHeight: '100vh', // Use minHeight to ensure content doesn't overflow
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'white',
	textAlign: 'center',
};

const imageStyles = {
	borderRadius: '50%',
	width: '250px',
	height: '250px',
	border: '5px solid white',
	marginBottom: '20px',
};

const titleStyles = {
	fontSize: '2.5rem',
	marginBottom: '10px',
};

const subtitleStyles = {
	fontSize: '1.8rem',
	fontStyle: 'italic',
};

const descriptionStyles = {
	maxWidth: '600px',
	fontSize: '1.2rem',
	margin: '20px 0',
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
			<Link to="/About" className="home-page-cta">
				Learn More About Me
			</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<SocialMedia />
			</Suspense>
		</div>
	);
}
