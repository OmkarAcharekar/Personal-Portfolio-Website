import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import {
	EmailIcon,
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
	InstagramIcon,
} from "../../images/icons/icons";
import animationData from "../../images/lotties/female.json";
import { HTMLIcon, CodeBracesIcon, WebIcon } from "../../images/icons/icons";
import data from "../../data.json";
const AboutPage = () => {
	return (
		<section className="about-page">
			<header className="about-page__header">
				<h1 className="about-page__heading about-page__heading--main">
					Omkar Acharekar
				</h1>
			</header>
			<div className="about-page__body">
				<div className="about-page__content">
					<div className="about-page__content-left">
						<Lottie
							options={{
								loop: true,
								autoplay: true,
								animationData: animationData,
								rendererSettings: {
									preserveAspectRatio: "xMidYMid slice",
								},
							}}
							style={{ maxWidth: 300 }}
							height="auto"
						/>
					</div>
					<div className="about-page__content-right">
						<p className="about-page__text about-page__text--restricted">
							<strong className="about-page__text--bold"> Who am I? </strong>
							<ul className="about-page__list">
								<li className="about-page__list-item">
									Aspiring Software Engineer having hands on experience developing
									full-stack Web Applications and Machine Learning Techniques.
								</li>
								<li className="about-page__list-item">
									Someone with a good grasp of engineering concepts, data
									structures, algorithms and software development Skills.
								</li>
								<li className="about-page__list-item">
									A Bachelor’s Degree ( Distinction) holder in Information Technology (GPA:9.08) .
								</li>


							</ul>
						</p>
						<div className="about-page__text">
							<strong className="about-page__text--bold"> What I do? </strong>
							<div className="about-page__services">
								<a
									href="https://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html"
									target="_blank"
									className="about-page__services-link"
								>
									<HTMLIcon className="about-page__services-icon" />
									<span className="about-page__services-text">
										Full Stack Web Development
									</span>
								</a>
								<a
									href="https://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html"
									target="_blank"
									className="about-page__services-link"
								>
									<CodeBracesIcon className="about-page__services-icon" />
									<span className="about-page__services-text">
										Competitive Programming
									</span>
								</a>
								<a
									href="https://blog.udacity.com/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html"
									target="_blank"
									className="about-page__services-link"
								>
									<WebIcon className="about-page__services-icon" />
									<span className="about-page__services-text">
										Full-Stack Mobile Development
									</span>
								</a>
							</div>
						</div>

						<p className="about-page__text about-page__text--restricted">
							I'm super excited you're here. Feel free to{" "}
							<a
								href={"mailto:" + data.social.email}
							>
								<EmailIcon className="social__icon" />
							</a>

							reach out to me with any opportunities you have.
						</p>
					</div>
				</div>{" "}
			</div>
		</section>
	);
};

export default AboutPage;
