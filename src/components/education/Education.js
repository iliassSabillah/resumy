//This component handles the Info section
import React, {PropTypes, Component}   from 'react';


class Education extends React.Component{
	render() {
		console.log('inside education', this.props);
		return (
			<div id="education" className="contact-form col-md-3">
				<h2>Add Education</h2>
				<form onSubmit={this.props.handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input id="school" className="form-control" ref="school" name="school"  placeholder="First Last"
							   onChange={(e) => {this.props.handleChange(e, "school");}}
							   defaultValue={this.props.education.school} type="text"/>
					</div>
					<div className="form-group">
						<label htmlFor="startYear">Start Year</label>
						<input id="startYear" ref="startYear" className="form-control" name="startYear" placeholder="Start Year"
							   onChange={(e) => {this.props.handleChange(e, "startYear");}}
							   defaultValue={this.props.education.startYear} type="text"/>
					</div>
					<div className="form-group">
						<label htmlFor="endYear">End Year</label>
						<input id="endYear" ref="endYear" className="form-control" name="endYear" placeholder="End Year"
							   onChange={(e) => {this.props.handleChange(e, "endYear");}}
							   defaultValue={this.props.education.endYear} type="text"/>
					</div>
					<div className="form-group">
						<label htmlFor="gpa">Phone</label>
						<input id="gpa" name="gpa" className="form-control" placeholder="Phone"
							   onChange={(e)=>{this.props.handleChange(e,"gpa");}}
							   defaultValue = {this.props.education.gpa} type="text"/>
					</div>
					<div className="form-group">
						<label htmlFor="achievements">Address</label>
						<textarea id="achievements" name="achievements" className="form-control" placeholder="Address"
								  onChange={(e)=>{this.props.handleChange(e,"achievements");}}
								  defaultValue = {this.props.education.achievements} />
					</div>
					<button className="btn-primary" type="submit">Save</button>
					<button className="btn-danger">Cancel</button>
				</form>

				{/*<button className="btn-primary">Save</button>*/}
				{/*<ul style={{listStyle: 'none'}}>{Object.values(this.education).map(education => education)}</ul>*/}
			</div>
		);
	}
}

Education.propTypes = {
	educationRow: PropTypes.func,
	handleChange : PropTypes.func,
	education: React.PropTypes.object,
	handleSubmit: PropTypes.func
};

export default Education;
