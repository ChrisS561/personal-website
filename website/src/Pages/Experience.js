import React from "react";
import NavBar from "../Components/NavBar";
import Footer2 from "../Components/Footer2";
import SocialMedia from "../Components/SocialMedia";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Pages/PagesCSS/Experience.css";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const backgroundColor = "#1a1a1a";

export default function Experience() {
	return (
		<>
			<NavBar />
			<div className="header">
				<h1>Experience</h1>
			</div>
			<div className="experience">
				<VerticalTimeline lineColor="#dedede">
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="06/2023 - present"
						iconStyle={{ background: '#007acc', color: 'white' }}
						icon={<FontAwesomeIcon icon={faBriefcase} />}
					>
						<h3 className="vertical-timeline-element-title">The Gathering Place.</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Computer Science Intern
						</h4>
						<p className="subtext">San Antonio, Remote</p>
						<p className="subtext">Skills: JavaScript, Typescript, React, Material UI, Github, Recoil</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="08/2020 - 05/2023"
						iconStyle={{ background: '#f26622', color: 'white' }}
						icon={<FontAwesomeIcon icon={faGraduationCap} />}
					>
						<h3 className="vertical-timeline-element-title">
							Southwestern University
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Bachelor's Degree in Computer Science
						</h4>
						<p className="subtext">Austin, TX</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="06/2022 - 08/2022"
						iconStyle={{ background: '#007acc', color: 'white' }}
						icon={<FontAwesomeIcon icon={faBriefcase} />}
					>
						<h3 className="vertical-timeline-element-title">Apogee, Inc.</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Network Services Intern
						</h4>
						<p className="subtext">Austin, TX</p>
						<p className="subtext">Skills: Linux, JavaScript</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="2018 - 2020"
						iconStyle={{ background: '#f26622', color: 'white' }}
						icon={<FontAwesomeIcon icon={faGraduationCap} />}
					>
						<h3 className="vertical-timeline-element-title">
							Mountain View College
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Associate's degree in Fine Arts
						</h4>
						<p className="subtext">Dallas, TX</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="2014 - 2018"
						iconStyle={{ background: '#f26622', color: 'white' }}
						icon={<FontAwesomeIcon icon={faGraduationCap} />}
					>
						<h3 className="vertical-timeline-element-title">
							Clearlake Christian High School
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							High school diploma
						</h4>
						<p className="subtext">Houston, TX</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
			<SocialMedia />
			<Footer2 backgroundColor={backgroundColor} />
		</>
	);
}
