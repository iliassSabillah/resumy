//This component handles the Home template
import React, {PropTypes} from 'react';


class HomePage extends React.Component{
	render(){
		return (
			<div className ="container-fluid">
				<div className="col-md-8">
					<h2>Resume Page</h2>
				</div>
				<div className="col-md-4">
					{this.props.children}
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {
	children : PropTypes.object.isRequired
};

export default HomePage;
