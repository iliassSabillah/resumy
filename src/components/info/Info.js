//This component handles the Info section
import React, {PropTypes}   from 'react';

const Info = (props) => {
 		console.log("infoContainer",props.info);
 		return (
			<div id="info" className="contact-form">
				<h2>Add Info</h2>
				<form>
					<label>Name</label>
					<div className="input-box">
						<input id="contact_name" name="name" placeholder="First Last" onBlur={(e)=>{props.handleInput(e,"name");}} defaultValue = {props.info.name} type="text"/>
					</div>
					<label>Email</label>
					<div className="input-box">
						<input id="contact_email" name="email" placeholder="Email" onBlur={(e)=>{props.handleInput(e,"email");}} defaultValue = {props.info.email} type="email"/>
					</div>
					<label>Phone</label>

					<div className="input-box">
						<input id="contact_phone" name="phone" placeholder="Phone" onBlur={(e)=>{props.handleInput(e,"phone");}} defaultValue = {props.info.phone} type="text"/>
					</div>
					<label>Address</label>
					<div className="input-box">
						<textarea id="contact_address" name="address" placeholder="Address" onBlur={(e)=>{props.handleInput(e,"address");}} defaultValue = {props.info.address} />
					</div>
					<label>Enter your LinkedIn</label>
					<div className="input-box">
						<input id="linkedIn" name="linkedIn" placeholder="LinkedIn" onBlur={(e)=>{props.handleInput(e,"linkedIn");}} defaultValue = {props.info.linkedIn} type="text"/>
					</div>
					<label>Enter your Github</label>
					<div className="input-box">
						<input id="github" name="github" placeholder="Github" onBlur={(e)=>{props.handleInput(e,"github");}} defaultValue = {props.info.github} type="text"/>
					</div>
					<label>Enter your Portfolio</label>
					<div className="input-box">
						<input id="portfolio" name="portfolio" placeholder="Portfolio" onBlur={(e)=>{props.handleInput(e,"portfolio");}} defaultValue = {props.info.portfolio} type="text"/>
					</div>
				</form>
				<ul style={{listStyle: 'none'}}>{Object.values(props.info).map(props.infoRow)}</ul>
			</div>
		);
	};

Info.propTypes = {
	infoRow: PropTypes.func,
	handleInput : PropTypes.func,
	info: PropTypes.object
};

export default Info;
