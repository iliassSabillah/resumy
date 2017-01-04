import configureStore from '../store/configureStore';
import {fetchExperience} from '../actions/experienceActions';
import {fetchUser} from '../actions/infoActions';
import {fetchEducation} from '../actions/educationActions';

debugger;

let store = configureStore();

debugger;
export  function onUsersEnter() {
	store.dispatch(fetchUser());
}

debugger;

export  function onExperienceEnter() {
	store.dispatch(fetchExperience());
}

export  function onEducationEnter() {
	store.dispatch(fetchEducation());
}
