import React,{PropTypes} from 'react';

const CreateSkill = (props)=> (
		<div id="skill" className="skill-form">
			<h2>Add New Skill</h2>
			{console.log("props",props)}
			<form>
				<div className="input-box">
					<label>Skill</label>
					<input id="skill" name="skill" placeholder="Skill"
					defaultValue='' type="text"/>
				</div>
			</form>
			<div className ="container-fluid">
				<button className="btn-primary" >Add</button>
				<p>Skills List</p>
				{/*<ul style={{listStyle: 'none'}}>{this.props.skill.map((item,i)=>(<li key={i}>{item}</li>))}</ul>*/}
			</div>
		</div>
);




CreateSkill.propTypes = {
	skill: PropTypes.array,
	onSkillAdd: PropTypes.func,
};

export default CreateSkill;
