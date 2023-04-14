import React from "react";
import NavBar from "../Components/NavBar";
import SocialMedia from "../Components/SocialMedia";
import Footer2 from "../Components/Footer2";
import profilePic from "../Images/profile.jpg";
import "../Pages/PagesCSS/About.css";

// import FlipCard from "../Components/FlipCard";

const backgroundColor = "black";

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
							className="img-fluid profile-pic"
						/>
					</div>

					<div className="col-md-6 text-center">
						<h1 className="about-heading">About Me</h1>

						<p className="about-text">
							Hello, my name is Christopher Smith Jr., and I am a new grad
							software engineer eager to contribute my technical skills and
							knowledge to a company that values innovation and problem-solving.
						</p>

						<p className="about-text">
							I have experience in developing web applications as well as
							building scalable and efficient software solutions that solve
							real-world problems. Throughout my studies, I have gained
							experience with a variety of programming languages and
							technologies, including{" "}
							<span className="highlight">
								C++, C, Java, MySQL, Assembly, JavaScript, HTML, CSS, Python,
								Haskell, Prolog, Lisp, React, Git, Algorithms, and Data
								Structures
							</span>
							.
						</p>

						{/* <p className="about-text">
              I am eager to join a team where I can apply my skills and contribute
              to impactful projects. I am a quick learner, a problem-solver and I
              enjoy staying up to date with new technologies and industry trends.
            </p> */}

						<p className="about-text">
							During my internship at Apogee, Inc. as a Network Services Intern,
							I had the opportunity to contribute to large-scale projects and
							gain experience working collaboratively with cross-functional
							teams. Through my work on upgrading the company's system, I
							developed a strong understanding of development principles and
							best practices. Through these experiences, I developed my
							communication and collaboration skills, and demonstrated my
							ability to deliver quality solutions independently.
						</p>

						<p className="about-text">
							As a lifelong learner, I stay up-to-date with new technologies and
							industry trends in order to continually improve my skills and
							knowledge. I am committed to delivering high-quality work and
							meeting project deadlines.
						</p>

						<p className="about-text">
							I am eager to join a team where I can apply my skills and
							contribute to impactful projects. I am a quick learner, a
							problem-solver, If you are interested in discussing potential
							projects or learning more about my professional experience, please
							feel free to get in touch with me via the{" "}
							<a
								href="/contact"
								style={{ color: "darkorange", textDecoration: "" }}
							>
								contact form
							</a>{" "}
							or the information provided on my{" "}
							<a
								href="/resume"
								style={{ color: "darkorange", textDecoration: "" }}
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
