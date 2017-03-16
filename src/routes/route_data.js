import configureStore from '../store/configureStore';
import {fetchExperience} from '../actions/experienceActions';
import {fetchUser} from '../actions/infoActions';
import {fetchEducation} from '../actions/educationActions';


let store = configureStore();

export  function onUsersEnter() {
	store.dispatch(fetchUser());
}


export  function onExperienceEnter() {
	store.dispatch(fetchExperience());
}

export  function onEducationEnter() {
	store.dispatch(fetchEducation());
}
