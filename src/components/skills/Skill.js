import React,{PropTypes} from 'react';

class Skill extends React.Component {
	render() {
		return (
			<div id="skill" className="contact-form col-md-3">
			<h2>Add New Skill</h2>
			<form onSubmit={this.props.handleSubmit}>
				<div className="form-group">
					<label htmlFor="skill">Skill</label>
					<input id="skill" className="form-control" ref="skill" name="skill"  placeholder="Skill"
					onChange={(e) => {this.props.handleChange(e, "skill");}}
					defaultValue={this.props.skill.skill} type="text"/>
				</div>
				<button className="btn-primary" type="submit">Save</button>
				<button className="btn-danger">Cancel</button>
			</form>
			</div>
		);
	}
}

Skill.propTypes = {
	skill: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.object
	]),
	onSkillAdd: PropTypes.func,
	handleChange : PropTypes.func,
	handleSubmit: PropTypes.func
};

export default Skill;
