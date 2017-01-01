//This component handles the Experience section
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as educationActions from '../../actions/educationActions';
import CreateEducation from './CreateEducation';

class EducationContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			education: {
				school: '',
				startYear: '',
				endYear: '',
				current: false,
				achievements: ''
			}
		};
		this.educationRow= this.educationRow.bind(this);
		this.onPositionAdd = this.onPositionAdd.bind(this);
		this.onCompanyAdd = this.onCompanyAdd.bind(this);
	}
	onSchoolAdd(e){
		const education = this.state.education;
		education.school = e.target.value;
		this.educationRow();
		this.props.actions.createEducation(education.school);
	}
	onStartYearAdd(e){
		const education = this.state.education;
		education.startYear = e.target.value;
		this.educationRow();
		this.props.actions.createEducation(education.startYear);
		browserHistory.push('/education');

	}
	onEndYearAdd(e){
		const education = this.state.education;
		education.endYear = e.target.value;
		this.educationRow();
		this.props.actions.createEducation(education.endYear);
	}
	onAchievementsAdd(e){
		const education = this.state.education;
		education.achievements = e.target.value;
		this.educationRow();
		this.props.actions.createEducation(education.achievements);
		browserHistory.push('/education');
	}
	educationRow(education,index){return (<li key={education+index}>{education}</li>);}
	render(){
		return (
			<CreateEducation education={this.state.education}/>
			// 		<div id="education" className="education-form">
			// 			<h2>Education</h2>
			// 			{/*<ul style={{listStyle: 'none'}}>{Object.values(this.state.education).map(this.educationRow)}</ul>*/}
			//
			// 			{/*<div>*/}
			// 				{/*<form>*/}
			// 					{/*<div className="input-box">*/}
			// 						{/*<label className="identifier show">Position</label>*/}
			// 						{/*<input id="school" name="school" placeholder="Position" onBlur={this.onPositionAdd} defaultValue = {this.state.education.school} type="text"/>*/}
			// 					{/*</div>*/}
			// 					{/*<div className="input-box">*/}
			// 						{/*<label className="identifier show">Company</label>*/}
			// 						{/*<input id="company" name="company" placeholder="Company" onBlur={this.onCompanyAdd} defaultValue = {this.state.education.company} type="text"/>*/}
			// 					{/*</div>*/}
			// 				{/*</form>*/}
			// 			{/*</div>*/}
			// 		</div>
		);
	}
}

EducationContainer.propTypes = {
	actions : PropTypes.object,
	education: PropTypes.array
};

const mapStateToProps= (state,ownProps)=>({education: state.education});

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators(educationActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEducation);
