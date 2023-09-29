import React from 'react';
import NavBar from '../Components/NavBar';
import SocialMedia from '../Components/SocialMedia';
import Footer2 from '../Components/Footer2';
import profilePic from '../Images/profile.jpg';
import '../Pages/PagesCSS/About.css';

// import FlipCard from "../Components/FlipCard";

const backgroundColor = 'black';

export default function About() {
	return (
		<>
			<NavBar />

			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<img
							src={profilePic}
							alt="Profile"
							className="img-fluid profile-pic "
							style={{ paddingTop: '20px' }}
						/>
					</div>

					<div className="col-md-6 text-center">
						<h1 className="about-heading">About Me</h1>

						<p className="about-text">
							Hi, I'm Christopher Smith Jr., a passionate Software Engineer with
							a flair for crafting innovative solutions and websites.
						</p>

						<p className="about-text">
							I'm a dedicated software engineer driven by the pursuit of turning
							creative ideas into digital realities. Through my education and
							work experiences, I've honed my skills in various programming
							languages and technologies, including{' '}
							<span className="highlight">
								JavaScript, TypeScript, C++, C, Java, React, HTML, CSS, Material
								UI, Bootstrap, MySQL, Assembly, Python, Haskell, Prolog, Lisp,
								Git
							</span>
							.
						</p>

						<p className="about-text">
							I've gained hands-on experience in developing and delivering
							high-quality software solutions. As a collaborative team player
							and effective communicator, I thrive on learning from others and
							sharing my knowledge.
						</p>

						<p className="about-text">
							Currently, I'm a Software Engineer Intern at The Gathering Place,
							where I collaborate with my cohort to develop specific features
							for an educational app in production. My tech stack includes
							React, TypeScript, Recoil, and Firebase. Prior to that, I worked
							as a Network Service Intern, where I racked, cabled, and
							configured client and AMD servers, VPN, and controllers, enhancing
							overall network infrastructure in educational data centers.
						</p>

						<p className="about-text">
							When I'm not coding, you can find me working out, hiking, reading,
							or enjoying any outdoor activities.
						</p>

						<p className="about-text">
							I'm actively seeking a software development role at a
							high-performing organization, where I can leverage my skills and
							experience to support growth and success. I'm eager to join a team
							of talented engineers and contribute to the development of
							innovative solutions and websites that make a positive impact. If
							you're interested in discussing potential projects or learning
							more about my professional experience, please feel free to get in
							touch with me through the{' '}
							<a
								href="/contact"
								style={{ color: 'darkorange', textDecoration: 'underline' }}
							>
								contact form
							</a>{' '}
							or by reviewing my{' '}
							<a
								href="/resume"
								style={{ color: 'darkorange', textDecoration: 'underline' }}
							>
								resume
							</a>
							.
						</p>
					</div>
				</div>
			</div>

			<SocialMedia />
			<Footer2 backgroundColor={backgroundColor} />
		</>
	);
}
