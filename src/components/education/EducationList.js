//This component handles the Education section
import React from 'react';
import {Link} from 'react-router';

class EducationList extends React.Component{
	render(){
		return (
			<div className ="container-fluid">
				<Link to="createEducation"><button className="btn-primary">Add New Education</button></Link>
				<p>Education List</p>
			</div>
		);
	}
}

export default EducationList;
