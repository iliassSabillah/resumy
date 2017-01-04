//This component handles the App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';
import $ from 'jquery';


class App extends React.Component{
	submitLoginInfo(e){
		e.preventDefault();
		try {
		$.ajax({
			url: '/signin',
			method: 'POST',
			data: this.state
		}).done(data=>{console.log('received user data',data)})
		}catch (e) {
			console.log(e.message);
		}
		return false;

	}
	render(){
		return (
			<div className ="container-fluid">
				<Header/>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children : PropTypes.object.isRequired
};

export default App;
