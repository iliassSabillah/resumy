//This component handles the Project section
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';
import CreateProject from './CreateProject';

class ProjectContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			project: {
				userId: '',
				project: '',
				github: '',
				website: '',
				description: ''
			}
		};
		this.projectRow= this.projectRow.bind(this);
		this.onProjectAdd = this.onProjectAdd.bind(this);
		this.onGithubAdd = this.onGithubAdd.bind(this);
		this.onWebsiteAdd = this.onWebsiteAdd.bind(this);
		this.onDescriptionAdd = this.onDescriptionAdd.bind(this);

	}
	onProjectAdd(e){
		const project = this.state.project;
		project.project = e.target.value;
		this.projectRow();
		this.props.actions.createProject(project.project);
	}
	onGithubAdd(e){
		const project = this.state.project;
		project.github = e.target.value;
		this.projectRow();
		this.props.actions.createProject(project.github);
		browserHistory.push('/project');

	}
	onWebsiteAdd(e){
		const project = this.state.project;
		project.website = e.target.value;
		this.projectRow();
		this.props.actions.createProject(project.website);
	}
	onDescriptionAdd(e){
		const project = this.state.project;
		project.description = e.target.value;
		this.projectRow();
		this.props.actions.createProject(project.description);
		browserHistory.push('/project');
	}
	projectRow(project,index){return (<li key={project+index}>{project}</li>);}
	render(){
		return (
			<CreateProject project={this.state.project}/>
			// 		<div id="project" className="project-form">
			// 			<h2>Project</h2>
			// 			{/*<ul style={{listStyle: 'none'}}>{Object.values(this.state.project).map(this.projectRow)}</ul>*/}
			//
			// 			{/*<div>*/}
			// 				{/*<form>*/}
			// 					{/*<div className="input-box">*/}
			// 						{/*<label className="identifier show">Position</label>*/}
			// 						{/*<input id="project" name="project" placeholder="Position" onBlur={this.onPositionAdd} defaultValue = {this.state.project.project} type="text"/>*/}
			// 					{/*</div>*/}
			// 					{/*<div className="input-box">*/}
			// 						{/*<label className="identifier show">Company</label>*/}
			// 						{/*<input id="company" name="company" placeholder="Company" onBlur={this.onGithubAdd} defaultValue = {this.state.project.company} type="text"/>*/}
			// 					{/*</div>*/}
			// 				{/*</form>*/}
			// 			{/*</div>*/}
			// 		</div>
		);
	}
}

ProjectContainer.propTypes = {
	actions : PropTypes.object,
	project: PropTypes.array
};

const mapStateToProps= (state,ownProps)=>({project: state.project});

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators(projectActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
