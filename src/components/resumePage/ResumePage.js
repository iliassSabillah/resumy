//This component handles the resume section
import React ,{PropTypes} from 'react';

const ResumePage =	(props)=>{
			console.log('resume page info props',props.info);
			console.log('resume page expreince props',props.experience);
	return (
				<div className="container-fluid">
					<div className="col-md-9">
						<div id="doc2" className="yui-t7">
							<div id="inner">

								<div id="hd">
									<div className="yui-gc">
										<div className="yui-u first">
											<h1>{ props.info.name !== null ? props.info.name : ''}</h1>
											<h2>{props.info.role||''}</h2>
										</div>

										<div className="yui-u">
											<div className="contact-info">
												<h3><a href="mailto:iliass24@gmail.com">{props.info.email}</a></h3>
												<h3>{props.info.phone}</h3>
											</div>
										</div>
									</div>
								</div>

								<div id="bd">
									<div id="yui-main">
										<div className="yui-b">
											<div className="yui-gf">
												<div className="yui-u first">
													<h2>Technical Skills</h2>
												</div>
												<div className="yui-u">
													<ul className="talent">
														<li>HTML</li>
														<li>CSS</li>
														<li className="last">Javascript</li>
													</ul>

													<ul className="talent">
														<li>Jquery</li>
														<li>React</li>
														<li className="last">NodeJS</li>
													</ul>

													<ul className="talent">
														<li>PostgreSql</li>
														<li>MongoDB</li>
														<li className="last">Redux</li>
													</ul>
												</div>
											</div>

											<div className="yui-gf">

												<div className="yui-u first">
													<h2>Experience</h2>
												</div>

												<div className="yui-u">

													<div className="job">
														<h2>{props.experience.company}</h2>
														<h3>{props.experience.position}</h3>
														<h4>{props.experience.startYear}-{props.experience.endYear}</h4>
														<p>{props.experience.description}</p>
													</div>

													<div className="job">
														<h2>Apple Inc.</h2>
														<h3>Senior Interface Designer</h3>
														<h4>{props.experience.startYear}-{props.experience.endYear}</h4>
														<p>Progressively reconceptualize multifunctional "outside the
															box" thinking through inexpensive methods of empowerment.
															Compellingly morph extensive niche markets with
															mission-critical ideas. Phosfluorescently deliver
															bricks-and-clicks strategic theme areas rather than scalable
															benefits. </p>
													</div>

												</div>
											</div>


											<div className="yui-gf last">
												<div className="yui-u first">
													<h2>Education</h2>
												</div>
												<div className="yui-u">
													<h2>Queens College - Queens, NY</h2>
													<h3> Computer Science &mdash; <strong>3.6
														GPA</strong></h3>
												</div>
											</div>


										</div>
									</div>
								</div>

								<div id="ft">
									<p>Iliass Sabillah &mdash; <a
										href="mailto:iliass24@gmail.com">iliass24@gmail.com</a> &mdash; (347) -
										513-6470</p>
								</div>

							</div>


						</div>

					</div>
				</div>
			);
		};

ResumePage.propTypes = {
	info: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.object
	]),
	experience: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.object
	])
};

export default ResumePage;
