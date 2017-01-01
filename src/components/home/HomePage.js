//This component handles the Home template
import React, {PropTypes} from 'react';

const  HomePage =(props)=>{
		return (
			<div className ="container-fluid">
					{props.children}
			</div>
		);
};

HomePage.propTypes = {
	children : PropTypes.object.isRequired,
};

export default HomePage;
