import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import InfoContainer from './components/info/InfoContainer';
import ExperienceList from './components/experience/ExperienceList';
import ExperienceContainer from './components/experience/ExperienceContainer';
import EducationContainer from './components/education/EducationContainer';
import ProjectsContainer from './components/projects/ProjectsContainer';
import EducationList from './components/education/EducationList';
import ProjectsList from './components/projects/ProjectsList';
import CreateSkill from './components/skills/CreateSkill';
import SkillContainer from './components/skills/SkillContainer';


export default (
	<Route path="/" component={App}>
		<Route component ={HomePage}>
			<IndexRoute  component ={InfoContainer}/>
			<Route path="experience" component={ExperienceList}/>
			<Route path="createExperience" component={ExperienceContainer}/>
			<Route path="education" component={EducationList}/>
			<Route path="createEducation" component={EducationContainer}/>
			<Route path="createSkill" component={CreateSkill}/>
			<Route path="skills" component={SkillContainer}/>
			<Route path="projects" component={ProjectsList}/>
			<Route path="createProject" component={ProjectsContainer}/>
		</Route>
		<Route path ="about" component={AboutPage}/>
	</Route>
);
