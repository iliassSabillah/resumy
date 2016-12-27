import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Info from './components/info/Info';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';


export default (
	<Route path="/" component={App}>
		<Route component ={HomePage}>
			<IndexRoute  component ={Info}/>
			<Route path="experience" component={Experience}/>
			<Route path="education" component={Education}/>
			<Route path="skills" component={Skills}/>
			<Route path="projects" component={Projects}/>
		</Route>
		<Route path ="about" component={AboutPage}/>
	</Route>
);
