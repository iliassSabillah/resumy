//This component handles the Experience section
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as experienceActions from '../../actions/experienceActions';
import Experience from './Experience';
import ResumePage from '../resumePage/ResumePage';
// import memobind from 'memobind';
// import $ from 'jquery';

// const myMethod = memobind(context, methodName, ...args);

class ExperienceContainer extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			experience: {
				userId:'',
				position: '',
				company: '',
				startMonth:'',
				startYear:'',
				endMonth: '',
				endYear: '',
				current: false,
				location:'',
				description:''
			}

		};
		this.handleChange= this.handleChange.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);
		this.experienceRow= this.experienceRow.bind(this);

	}
	// 	browserHistory.push('/experience');

	// onDescriptionAdd(e) {
	// 	const experience = this.state.experience;
	// 	experience.description = e.target.value;
	// 	this.experienceRow();
	// 	this.props.actions.createExperience(experience.description);
	// }
	handleChange(e,inputField) {
		const experience = this.state.experience;
		experience[inputField] = e.target.value;
	}
	handleSubmit(e) {
		e.preventDefault();
		let position = this.refs.position;
		let company = this.refs.company;
		let startMonth = this.refs.startMonth;
		let startYear = this.refs.startYear;
		let endMonth = this.refs.endMonth;
		let endYear = this.refs.endYear;
		let location = this.refs.location;
		let description = this.refs.description;

		let experience =  {position, company, startMonth, startYear, endMonth, endYear, location, description};
		this.props.actions.createExperience(experience);

	}
	experienceRow(experience,index){return (<li key={experience+index}>{experience}</li>);}

	render(){
		debugger;
		return (
			<div>
				<Experience handleChange={this.handleChange} experience={this.props.experience} handleSubmit={this.handleSubmit} experienceRow={this.experienceRow}/>
			</div>
		);
	}
}

ExperienceContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	handleChange : PropTypes.func,
	experienceRow: PropTypes.func,
	experience: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.object
	]),
	handleSubmit: PropTypes.func
};

const mapStateToProps= (state,ownProps)=>({
	experience: state.experience,
	func: ownProps.onPositionAdd
});

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators(experienceActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceContainer);
