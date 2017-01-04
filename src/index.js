import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes/routes';
import configureStore from './store/configureStore';

import './styles/styles.css'; //Webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {fetchUser} from './actions/infoActions';
import {fetchExperience} from './actions/experienceActions';
// import {fetchEducation} from './actions/educationActions';


const store = configureStore();

// window.store = store;
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


debugger;

render (
	<Provider store={store}>
		<Router history={history} routes={routes}/>
	</Provider>,
	document.getElementById('root')
);

debugger;

store.dispatch(fetchUser());

debugger;
store.dispatch(fetchExperience());
// store.dispatch(fetchEducation());

