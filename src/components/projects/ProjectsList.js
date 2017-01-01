//This component handles the Projects section
import React  from 'react';
import {Link} from 'react-router';

class ProjectsList extends React.Component{
	render(){
		return (
			<div className ="container-fluid">
				<Link to="createProject"><button className="btn-primary">Add New Project</button></Link>
				<p>Projects List</p>
			</div>
		);
	}
}

export default ProjectsList;
