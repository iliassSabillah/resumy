//This component handles the Home template
import React, {PropTypes} from 'react';
import ResumePage from '../resumePage/ResumePage';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as infoActions from '../../actions/infoActions';
import * as experienceActions from '../../actions/experienceActions';


class HomePage extends React.Component {
	render() {
		console.log('home page props',this.props.state);
		return (
			<div className="container-fluid">
				{this.props.children}
				<ResumePage info={this.props.state.info} experience={this.props.state.experience}/>
			</div>
		);
	}
}

HomePage.propTypes = {
	children : PropTypes.object.isRequired,
	state: React.PropTypes.object,
};

const mapStateToProps= (state,ownProps)=>({state: state});

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators({infoActions, experienceActions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

