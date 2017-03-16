//This component handles the Project section
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';
import Project from './CreateProject';

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
			<Project project={this.state.project}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
