import React from "react";
import "./ResumePage.css";
import data from "../../data.json";
import javascript from "../../images/tech/javascript.svg";
import git from "../../images/tech/git.svg";
import python from "../../images/tech/python.svg";
import linux from "../../images/tech/linux.png";
import sql from "../../images/tech/sql.svg";
import react from "../../images/tech/react.png";
import nodejs from "../../images/tech/nodejs.svg";
import html5 from "../../images/tech/html5.svg";
import css3 from "../../images/tech/css3.svg";
import flask from "../../images/tech/aws.svg";
import cpp from "../../images/tech/cpp.svg";
import java from "../../images/tech/java.svg";
import tf from "../../images/tech/tff.svg";
import docker from "../../images/tech/docker.png";
import sass from "../../images/tech/docker.png";
import golang from "../../images/tech/golang.png";
import figma from "../../images/tech/figma.png";
import jest from "../../images/tech/jest.png";
import mongodb from "../../images/tech/mongo.png";
import next from "../../images/tech/next.png";
import redux from "../../images/tech/redux.png";

const ResumePage = () => {
	return (
		<section className="resume-page">
			<header className="resume-page__header">
				<h1 className="resume-page__heading resume-page__heading--main">
					Resume
				</h1>
				<p className="resume-page__subheading">
					Learn more about my skills, qualifications and experiences.
				</p>
			</header>
			<div className="resume-page__body">
				<div className="resume-page__content">
					<div className="resume-page__content-left">
						<h2 className="resume-page__heading">Work Experience</h2>
						<p className="resume-page__subheading--body">
							PRESENT & PREVIOUS JOBS
						</p>
					</div>
					<div className="resume-page__content-right">
						<div className="work-wrapper">

							{data.work.map((work, i) => (
								<div className="work" key={i}>
									<p className="work__timeline">
										{work.timeline.from} - {work.timeline.to}
									</p>
									<h3 className="work__role">{work.role}</h3>
									<p className="work__company">{work.company}</p>

								</div>
							))}

						</div>
					</div>
				</div>
			</div>

			<div className="resume-page__content">
				<div className="resume-page__content-left">
					<h2 className="resume-page__heading">Education</h2>
					<p className="resume-page__subheading--body">ACADEMIC CAREER</p>
				</div>
				<div className="resume-page__content-right">
					<div className="education-wrapper">
						{data.education.map((edu, i) => (
							<div className="education" key={i}>
								<h3 className="education__degree">{edu.degree}</h3>
								<p className="education__school">{edu.school}</p>
								<p className="education__timeline">
									{edu.timeline.from} - {edu.timeline.to}
								</p>
								<p className="education__summary">{edu.summary} </p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="resume-page__content">
				<div className="resume-page__content-left">
					<h2 className="resume-page__heading">Tech Stack</h2>
					<p className="resume-page__subheading--body">
						TOOLS & TECHNOLOGIES
					</p>
				</div>
				<div className="resume-page__content-right">

					<div className="tech">
						<img
							src={html5}
							alt="HTML5"
							title="HTML5"
							className="tech__logo"
						/>
						<img src={css3} alt="CSS3" title="CSS3" className="tech__logo" />

						<img
							src={javascript}
							alt="Javascript"
							title="Javascript"
							className="tech__logo"
						/>
						<img
							src={cpp}
							alt="Linux"
							title="C++"
							className="tech__logo"
						/>
						<img
							src={java}
							alt="Linux"
							title="Java"
							className="tech__logo"
						/>
						<img
							src={react}
							alt="React JS"
							title="React"
							className="tech__logo"
						/>
						<img src={figma} alt="Git" title="Figma" className="tech__logo" />
						<img src={jest} alt="Git" title="Jest" className="tech__logo" />
						<img src={redux} alt="Git" title="Redux" className="tech__logo" />
						<img src={sass} alt="CSS3" title="Sass" className="tech__logo" />
						<img src={golang} alt="Git" title="Golang" className="tech__logo" />
						<img
							src={python}
							alt="Python"
							title="Python"
							className="tech__logo"
						/>
						<img
							src={docker}
							alt="Python"
							title="Python"
							className="tech__logo"
						/>
						<img
							src={flask}
							alt="Flask"
							title="Amazon Web Services"
							className="tech__logo"
						/>
						<img
							src={nodejs}
							alt="NodeJS"
							title="NodeJS"
							className="tech__logo"
						/>
						<img src={sql} alt="SQL" title="SQL" className="tech__logo" />


						<img src={mongodb} alt="Git" title="Mongodb" className="tech__logo" />



						<img src={git} alt="Git" title="Git" className="tech__logo" />
						<img
							src={linux}
							alt="Linux"
							title="Linux"
							className="tech__logo"
						/>


						<img
							src={tf}
							alt="Linux"
							title="Tensorflow"
							className="tech__logo"
						/>
					</div>
				</div>
			</div>

		</section>
	);
};

export default ResumePage;
