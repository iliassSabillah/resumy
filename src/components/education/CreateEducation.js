import React,{PropTypes} from 'react';


const CreateEducation = ({education, actions})=> (
		<div id="education" className="education-form">
			<h2>Add New Education</h2>
			{console.log(education)}
			{/*<ul style={{listStyle: 'none'}}>{Object.values(props.experience).map(props.experienceRow)}</ul>*/}
			<form>
				<div className="input-box">
					<input id="school" name="school" placeholder="School" onBlur={actions.onSchoolAdd}
					defaultValue={education.school} type="text"/>
				</div>
				<div className="input-box">
					<input id="startYear" name="startYear" placeholder="StartYear" onBlur={actions.onStartYearAdd} defaultValue={education.startYear} type="text"/>
				</div>
				<div className="input-box">
					<input id="endYear" name="endYear" placeholder="EndYear" onBlur={actions.onEndYearAdd}
					defaultValue={education.endYear} type="text"/>
				</div>
				<div className="input-box">
					<input id="current" name="current" placeholder="Current" onBlur={actions.onCurrentAdd} defaultValue={education.current} type="text"/>
				</div>
				<div className="input-box">
					<input id="achievements" name="achievements" placeholder="Achievements" onBlur={actions.onAchievementsAdd} defaultValue={education.achievements} type="text"/>
				</div>
			</form>
		</div>
);




CreateEducation.propTypes = {
	education: PropTypes.array,
	actions: PropTypes.object,
	onSchoolAdd: PropTypes.func,
	onStartYearAdd: PropTypes.func,
};

export default CreateEducation;
