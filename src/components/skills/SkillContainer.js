//This component handles the Skill section
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as skillActions from '../../actions/skillActions';
import CreateSkill from './CreateSkill';
import SkillsList from './SkillsList';


class SkillContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			skill: []
		};
		this.skillRow= this.skillRow.bind(this);
		this.onSkillAdd = this.onSkillAdd.bind(this);

	}
	onSkillAdd(e){
		console.log('onSkill triggered');
		const skill = this.state.skill;
		skill.concat(e.target.value);
		console.log(skill)
		this.props.actions.createSkill(skill);
	}
	skillRow(skill,index){return (<li key={skill+index}>{skill}</li>);}
	// render(){
	// 	return (
	// 		<div>
	// 			<CreateSkill  onClick={this.onSkillAdd}/>
	// 		</div>
	// 	);
	// }
}

SkillContainer.propTypes = {
	actions : PropTypes.object,
	skill: PropTypes.array
};

const mapStateToProps= (state,ownProps)=>({skill: state.skill});

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators(skillActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSkill);

