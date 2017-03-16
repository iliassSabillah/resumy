//This component handles the Home template
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as infoActions from '../../actions/infoActions';
import $ from 'jquery';
import Info from './Info';
import onUsersEnter from '../../routes/route_data';


class InfoContainer extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			info: {
				id: '',
				role: '',
				name: '',
				email: '',
				phone: '',
				address: '',
				password:'',
				linkedIn: '',
				github: '',
				portfolio: '',
				twitter: ''
			}
		};
		this.addLink = this.addLink.bind(this);
		this.infoRow= this.infoRow.bind(this);
		this.handleChange= this.handleChange.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);


	}

	// handleInput(e,inputField){
	// 	// const info = this.state.info;
	// 	info[inputField] = e.target.value;
	// 	this.infoRow();
	// 	this.props.actions.createInfo(info);
	// }
	loadInfo(){
		this.props.actions.onUsersEnter();

	}
	handleSubmit(e) {
		e.preventDefault();
		let name = this.refs.name;
		let email = this.refs.email;
		let role = this.refs.role;
		let phone = this.refs.phone;
		let address = this.refs.address;
		let linkedIn = this.refs.linkedIn;
		let github = this.refs.github;
		let portfolio = this.refs.portfolio;
		let twitter = this.refs.twitter;
		let info = {name, email, role, phone, address, linkedIn, github, portfolio, twitter};
		this.props.actions.createInfo(info);

	}
	handleChange(e,inputField) {
		const info = this.state.info;
		info[inputField] = e.target.value;
	}
	addLink(){
		$('.link').toggleClass('hidden');
	}
	infoRow(info,index){return (<li key={info+index}>{info}</li>);}
	render(){
		console.log('state inside info container:',this.props.info);
		return (
				<Info handleChange={this.handleChange} info={this.props.info} handleSubmit={this.handleSubmit} loadInfo={this.loadInfo}/>
		);
	}
}

InfoContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	info: React.PropTypes.object.isRequired,
	fetchUsers: PropTypes.func
};

const mapStateToProps= (state,ownProps)=>({info: state.info});

const mapDispatchToProps=(dispatch)=>({
		actions: bindActionCreators(infoActions, dispatch)
	});

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);

