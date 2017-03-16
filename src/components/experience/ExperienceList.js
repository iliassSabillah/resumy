//This component handles the Experience section
import React  from 'react';
import {Link} from 'react-router';

const ExperienceList = ()=> {
		return (
			<div className ="container-fluid">
				<Link to="experience"><button className="btn-primary">Add New Experience</button></Link>
				<p>Experience List</p>

			</div>
		);
};

export default ExperienceList;
