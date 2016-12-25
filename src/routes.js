import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Experience from './components/experience/Experience';
import Info from './components/info/Info';
export default (
	<Route path="/" component={App}>
		<Route component ={HomePage}>
			<IndexRoute  component ={Info}/>
			<Route path="experience" component={Experience}/>
		</Route>
		<Route path ="about" component={AboutPage}/>
	</Route>
);
