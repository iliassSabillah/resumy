import React,{PropTypes} from 'react';


const Project = ({project, actions})=> (
		<div id="project" className="project-form">
		<h2>Add New Project</h2>
		{console.log('project action:',actions)}
		{/*<ul style={{listStyle: 'none'}}>{Object.values(props.experience).map(props.experienceRow)}</ul>*/}
		<form>
			<div className="input-box">
				<input id="project" name="school" placeholder="Project" onBlur={actions.onProjectAdd}
				defaultValue={project.project} type="text"/>
			</div>
			<div className="input-box">
				<input id="github" name="github" placeholder="Github" onBlur={actions.onGithubAdd}
				defaultValue={project.github} type="text"/>
			</div>
			<div className="input-box">
				<input id="website" name="website" placeholder="Website" onBlur={actions.onWebsiteAdd}
				defaultValue={project.website} type="text"/>
			</div>
			<div className="input-box">
				<input id="description" name="description" placeholder="Description" onBlur={actions.onDescriptionAdd}
				defaultValue={project.description} type="text"/>
			</div>
		</form>
		</div>
);



Project.propTypes = {
	project: PropTypes.object,
	actions: PropTypes.object,
	onProjectAdd: PropTypes.func,
	onStartYearAdd: PropTypes.func
};


export default Project;
