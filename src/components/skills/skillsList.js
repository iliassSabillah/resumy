//This component handles the Skills section
import React , {PropTypes} from 'react';
import {Link } from 'react-router';

const SkillsList = ({skill}) => {
	return (
			<div className ="container-fluid">
				<Link to="createSkill"><button className="btn-primary">Add New Skill</button></Link>
				<p>Skills List</p>
				<ul style={{listStyle: 'none'}}>{skill}</ul>

			</div>
		);
};

SkillsList.propTypes = {
	actions : PropTypes.object,
	skill: PropTypes.array,
	skillRow: PropTypes.func
};


export default SkillsList;
