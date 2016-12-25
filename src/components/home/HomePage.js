//This component handles the Home template
import React, {PropTypes} from 'react';
import Info from './../info/Info.js';


class HomePage extends React.Component{
	render(){
		return (
			<div className ="container-fluid">
				<div className="col-md-8">
					<h2>Resume Page</h2>
				</div>
				<div className="col-md-4">
					<Info/>
				</div>
			</div>
		);
	}
}


export default HomePage;
