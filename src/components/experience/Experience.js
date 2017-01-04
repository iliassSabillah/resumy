import React,{PropTypes} from 'react';


class Experience extends React.Component {
	render() {
		debugger;
		return (
				<div id="experience" className="contact-form col-md-3">
					<h2>Add New Experience</h2>
					<form onSubmit={this.props.handleSubmit}>
						<div className="form-group">
							<label htmlFor="position">Position</label>
							<input id="position" className="form-control" ref="position" name="position"  placeholder="Position"
								   onChange={(e) => {this.props.handleChange(e, "position");}}
								   defaultValue={this.props.experience[0].position} type="text"/>
						</div>
						<div className="form-group">
							<label htmlFor="company">Company</label>
							<input id="company" ref="company" className="form-control" name="company" placeholder="Company"
								   onChange={(e) => {this.props.handleChange(e, "company");}}
								   defaultValue={this.props.experience[0].company} type="text"/>
						</div>
						<div className="form-group">
							<label htmlFor="startMonth">Start Month</label>
							<input id="startMonth" ref="startMonth" className="form-control" name="startMonth" placeholder="Start Month"
								   onChange={(e) => {this.props.handleChange(e, "startMonth");}}
								   defaultValue={this.props.experience[0].startMonth} type="text"/>
						</div>
						<div className="form-group">
							<label htmlFor="startYear">Start Year</label>
							<input id="startYear" name="startYear" className="form-control" placeholder="Start Year"
								   onChange={(e)=>{this.props.handleChange(e,"startYear");}}
								   defaultValue = {this.props.experience[0].startYear} type="text"/>
						</div>
						<div className="form-group">
							<label htmlFor="endMonth">End Month</label>
							<textarea id="endMonth" name="endMonth" className="form-control" placeholder="End Month"
									  onChange={(e)=>{this.props.handleChange(e,"endMonth");}}
									  defaultValue = {this.props.experience[0].endMonth} />
						</div>
						<div className="form-group">
							<label htmlFor="endYear">End Year</label>
							<input id="endYear" name="endYear" className="form-control" placeholder="End Year"
								   onChange={(e)=>{this.props.handleChange(e,"endYear");}}
								   defaultValue = {this.props.experience[0].endYear} type="text"/>
						</div>
						<div className="input-box">
							<label htmlFor="location">Enter your Location</label>
							<input id="location" name="location" className="form-control"  placeholder="Location"
								   onChange={(e)=>{this.props.handleChange(e,"location");}}
								   defaultValue = {this.props.experience[0].location} type="text"/>
						</div>
						<div className="input-box">
							<label htmlFor="description">Description</label>
							<input id="description" name="description" className="form-control"  placeholder="Description"
								   onChange={(e)=>{this.props.handleChange(e,"description");}}
								   defaultValue = {this.props.experience[0].description} type="text"/>
						</div>
						<button className="btn btn-primary" type="submit">Save</button>
						<button className="btn btn-danger">Cancel</button>
					</form>
				</div>
		);
	}
}
Experience.propTypes = {
	actions: PropTypes.object,
	handleChange : PropTypes.func,
	experienceRow: PropTypes.func,
	experience: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.object
	]),
	handleSubmit: PropTypes.func

};

export default Experience;

