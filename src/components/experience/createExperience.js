import React,{PropTypes} from 'react';


//const CreateExperience = (props)=> (
class CreateExperience extends React.Component {
	render() {
		console.log(this.props)
		let that= this;
		return (
			<div id="experience" className="experience-form">
				<h2>Add New Experience</h2>

				{/*<ul style={{listStyle: 'none'}}>{Object.values(this.props.experience).map(this.props.experienceRow)}</ul>*/}
				<form>
					<div className="input-box">
						<input id="position" name="position" placeholder="Position" onBlur={that.props.onPositionAdd}
					   	defaultValue={this.props.experience.position} type="text"/>
					</div>
					<div className="input-box">
						<input id="company" name="company" placeholder="Company" onBlur={that.props.onCompanyAdd}
					    defaultValue={this.props.experience.company} type="text"/>
					</div>
				</form>
			</div>
		);
	}
}
CreateExperience.propTypes = {
	experience: PropTypes.array,
	actions: PropTypes.object,
	onPositionAdd: PropTypes.func,
	onCompanyAdd: PropTypes.func,
	experienceRow: PropTypes.func,
	func: PropTypes.func,
	position: PropTypes.string
};

export default CreateExperience;


