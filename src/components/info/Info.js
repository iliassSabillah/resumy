//This component handles the Info section
import React, {PropTypes, Component}   from 'react';


class Info extends React.Component{
	render() {
		console.log('inside info', this.props);
		return (
			<div id="info" className="contact-form col-md-3">
				<h2>Add Info</h2>
				<form onSubmit={this.props.handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input id="name" className="form-control" ref="name" name="name"  placeholder="First Last"
							   onChange={(e) => {this.props.handleChange(e, "name");}}
							   defaultValue={this.props.info.name||''} type="text"/>
					</div>
					<div className="form-group">
						<label htmlFor="role">Role</label>
						<input id="role" ref="role" className="form-control" name="role" placeholder="Role"
							   onChange={(e) => {this.props.handleChange(e, "role");}}
							   defaultValue={this.props.info.role||''} type="role"/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input id="email" ref="email" className="form-control" name="email" placeholder="Email"
							   onChange={(e) => {this.props.handleChange(e, "email");}}
							   defaultValue={this.props.info.email||''} type="email"/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input id="phone" name="phone" className="form-control" placeholder="Phone"
						   onChange={(e)=>{this.props.handleChange(e,"phone");}}
						   defaultValue = {this.props.info.phone||''} type="text"/>
					</div>
					<div className="form-group">
						<label htmlFor="address">Address</label>
						<textarea id="address" name="address" className="form-control" placeholder="Address"
							  onChange={(e)=>{this.props.handleChange(e,"address");}}
							  defaultValue = {this.props.info.address||''} />
					</div>
					<div className="form-group">
						<label htmlFor="linkedIn">Enter Your LinkedIn</label>
						<input id="linkedIn" name="linkedIn" className="form-control" placeholder="LinkedIn"
							   onChange={(e)=>{this.props.handleChange(e,"linkedIn");}}
							   defaultValue = {this.props.info.linkedIn||''} type="text"/>
					</div>
					<div className="input-box">
						<label htmlFor="github">Enter your Github</label>
						<input id="github" name="github" className="form-control"  placeholder="Github"
						   onChange={(e)=>{this.props.handleChange(e,"github");}}
						   defaultValue = {this.props.info.github||''} type="text"/>
					</div>
					<div className="input-box">
						<label htmlFor="portfolio">Enter your Portfolio</label>
						<input id="portfolio" name="portfolio" className="form-control"  placeholder="Portfolio"
							   onChange={(e)=>{this.props.handleChange(e,"portfolio");}}
							   defaultValue = {this.props.info.portfolio||''} type="text"/>
					</div>
					<button className="btn btn-primary" type="submit">Save</button>
					<button className="btn btn-danger">Cancel</button>
				</form>
			</div>
		);
	}
	}

Info.propTypes = {
	infoRow: PropTypes.func,
	handleChange : PropTypes.func,
	info: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.object
	]),
	handleSubmit: PropTypes.func
};

export default Info;
