//This component handles the Experience section
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as educationActions from '../../actions/educationActions';
import Education from './Education';

class EducationContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			education: {
				userId: '',
				school: '',
				startYear: '',
				endYear: '',
				current: false,
				gpa: '',
				achievements: ''
			}
		};
		this.educationRow = this.educationRow.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// 	browserHistory.push('/experience');

	// onDescriptionAdd(e) {
	// 	const experience = this.state.experience;
	// 	experience.description = e.target.value;
	// 	this.experienceRow();
	// 	this.props.actions.createExperience(experience.description);
	// }
	handleChange(e, inputField) {
		const education = this.state.education;
		education[inputField] = e.target.value;
	}

	handleSubmit(e) {
		e.preventDefault();
		let school = this.refs.school;
		let startYear = this.refs.startYear;
		let endYear = this.refs.endYear;
		let gpa = this.refs.gpa;
		let achievements = this.refs.achievements;
		let education = {school, startYear, endYear, gpa, achievements};
		this.props.actions.createEducation(education);

	}

	educationRow(education, index) {
		return (<li key={education + index}>{education}</li>);
	}

	render() {
		return (
			<Education handleChange={this.handleChange} education={this.props.education}
					   handleSubmit={this.handleSubmit} educationRow={this.educationRow}/>        );
	}
}

EducationContainer.propTypes = {
	actions: PropTypes.object,
	educationRow: PropTypes.func,
	handleChange: PropTypes.func,
	education: PropTypes.object,
	handleSubmit: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({education: state.education});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(educationActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationContainer);
