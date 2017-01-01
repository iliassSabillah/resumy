//This component handles the Experience section
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as experienceActions from '../../actions/experienceActions';
import ExperienceList from './ExperienceList';
// import memobind from 'memobind';
// import $ from 'jquery';

// const myMethod = memobind(context, methodName, ...args);

class ExperienceContainer extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			experience: {
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

		this.onPositionAdd = this.onPositionAdd.bind(this);
		this.onCompanyAdd = this.onCompanyAdd.bind(this);
		this.onStartYear = this.onStartYear.bind(this);
		this.onStartMonthAdd = this.onStartMonthAdd.bind(this);
		this.onEndMonthAdd = this.onEndMonthAdd.bind(this);
		this.onCurrent = this.onCurrent.bind(this);
		this.onLocationAdd = this.onLocationAdd.bind(this);
		this.onDescriptionAdd = this.onDescriptionAdd.bind(this);
		this.experienceRow= this.experienceRow.bind(this);

	}
	onPositionAdd(e){
		const experience = this.state.experience;
		experience.position = e.target.value;
		this.experienceRow();
		this.props.actions.createExperience(experience.position);	}
	onCompanyAdd(e){
		const experience = this.state.experience;
		experience.company = e.target.value;
		this.experienceRow();
		this.props.actions.createExperience(experience.company);
	}
	// 	browserHistory.push('/experience');

	onStartMonthAdd(e) {
		const experience = this.state.experience;
		experience.startMonth = e.target.value;
		this.experienceRow();
		this.props.actions.createExperience(experience.startMonth);
	}

	onStartYearAdd(e) {
		const experience = this.state.experience;
		experience.startYear = e.target.value;
		this.experienceRow();
		this.props.actions.createExperience(experience.startYear);
	}
	onEndMonthAdd(e) {
		const experience = this.state.experience;
		experience.endMonth = e.target.value;
		this.experienceRow();
		this.props.actions.createExperience(experience.endMonth);
	}

	onEndYearAdd(e) {
		const experience = this.state.experience;
		experience.endYear = e.target.value;
		this.experienceRow();
		this.props.actions.createExperience(experience.endYear);
	}
	onCurrent(e) {
		const experience = this.state.experience;
		experience.current = e.target.value;
		this.experienceRow();
		this.props.actions.createExperience(experience.current);
	}
	onLocationAdd(e) {
		const experience = this.state.experience;
		experience.location = e.target.value;
		this.experienceRow();
		this.props.actions.createExperience(experience.location);
	}
	onDescriptionAdd(e) {
		const experience = this.state.experience;
		experience.description = e.target.value;
		this.experienceRow();
		this.props.actions.createExperience(experience.description);
	}
	experienceRow(experience,index){return (<li key={experience+index}>{experience}</li>);}

	render(){
		return (
			<div id="experience" className="contact-form">
				<h2>Add Experience</h2>
				<ul style={{listStyle: 'none'}}>{Object.values(this.state.experience).map(this.experienceRow)}</ul>
				<div>
				<form>
					<div className="input-box">
						<input id="position" name="position" placeholder="Position" onBlur={this.onPositionAdd}
					   	defaultValue = {this.state.experience.position} type="text"/>
					</div>
					<div className="input-box">
						<input id="company" name="company" placeholder="Company" onBlur={this.onCompanyAdd}
					   	defaultValue = {this.state.experience.company} type="text"/>
					</div>
					<div className="input-box">
						<input id="startMonth" name="startMonth" placeholder="StartMonth" onBlur={this.onStartMonthAdd}
						defaultValue={this.state.experience.startMonth} type="text"/>
					</div>
					<div className="input-box">
						<input id="startYear" name="startYear" placeholder="StartYear" onBlur={this.onStartYearAdd}
						defaultValue={this.state.experience.startYear} type="text"/>
					</div>
					<div className="input-box">
						<input id="endMonth" name="endMonth" placeholder="EndMonth" onBlur={this.onEndMonthAdd}
						defaultValue={this.state.experience.endMonth} type="text"/>
					</div>
					<div className="input-box">
						<input id="endYear" name="endYear" placeholder="EndYear" onBlur={this.onEndYearAdd}
						defaultValue={this.state.experience.endYear} type="text"/>
					</div>
					<div className="input-box">
						<input id="current" name="current" placeholder="Current" onBlur={this.onCurrent}
						defaultValue={this.state.experience.current} type="text"/>
					</div>
					<div className="input-box">
						<input id="location" name="location" placeholder="Location" onBlur={this.onLocationAdd}
						defaultValue={this.state.experience.location} type="text"/>
					</div>
					<div className="input-box">
						<input id="description" name="description" placeholder="Description" onBlur={this.onDescriptionAdd}
						defaultValue={this.state.experience.description} type="text"/>
					</div>
				</form>
				</div>
			</div>
		);
	}
}

ExperienceContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	experience: PropTypes.array.isRequired,
};

const mapStateToProps= (state,ownProps)=>({
	experience: state.experience,
	func: ownProps.onPositionAdd
});

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators(experienceActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceContainer);
