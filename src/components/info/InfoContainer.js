//This component handles the Home template
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as infoActions from '../../actions/infoActions';
import $ from 'jquery';
import Info from './Info';
import ResumePage from '../resumePage/ResumePage';

class InfoContainer extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			info: {
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
		this.handleInput= this.handleInput.bind(this);
		// this.onNameAdd = this.onNameAdd.bind(this);
		// this.onEmailAdd = this.onEmailAdd.bind(this);
		// this.onPhoneAdd = this.onPhoneAdd.bind(this);
		// this.onAddressAdd = this.onAddressAdd.bind(this);
		// this.onLinkedInAdd = this.onLinkedInAdd.bind(this);
		// this.onGithubAdd = this.onGithubAdd.bind(this);
		// this.onPortfolioAdd = this.onPortfolioAdd.bind(this);
		// this.onTwitterAdd = this.onTwitterAdd.bind(this);
	}
	// onNameAdd(e){
	// 	const info = this.state.info;
	// 	info.name = e.target.value;
	// 	this.infoRow();
	// 	this.props.actions.createInfo(info.name);	}
	// onEmailAdd(e){
	// 	const info = this.state.info;
	// 	info.email = e.target.value;
	// 	this.infoRow();
	// 	this.props.actions.createInfo(info.email);
	// }
	// onPhoneAdd(e){
	// 	const info = this.state.info;
	// 	info.phone = e.target.value;
	// 	this.infoRow();
	// 	this.props.actions.createInfo(info.phone);	}
	// onAddressAdd(e){
	// 	const info = this.state.info;
	// 	info.address = e.target.value;
	// 	this.infoRow();
	// 	this.props.actions.createInfo(info.address);
	// }
    //
	// onLinkedInAdd(e){
	// 	const info = this.state.info;
	// 	info.linkedIn = e.target.value;
	// 	this.infoRow();
	// 	this.props.actions.createInfo(info.linkedIn);
	// }
    //
	// onGithubAdd(e){
	// 	const info = this.state.info;
	// 	info.github = e.target.value;
	// 	this.infoRow();
	// 	this.props.actions.createInfo(info.github);
	// }
    //
	// onPortfolioAdd(e){
	// 	const info = this.state.info;
	// 	info.portfolio = e.target.value;
	// 	this.infoRow();
	// 	this.props.actions.createInfo(info.portfolio);
	// }
    //
	// onTwitterAdd(e){
	// 	const info = this.state.info;
	// 	info.twitter = e.target.value;
	// 	this.infoRow();
	// 	this.props.actions.createInfo(info.twitter);
	// }
	handleInput(e,inputField){
		const info = this.state.info;
		info[inputField] = e.target.value;
		this.infoRow();
		this.props.actions.createInfo(info);
	}

	addLink(){
		$('.link').toggleClass('hidden');
	}
	infoRow(info,index){return (<li key={info+index}>{info}</li>);}
	render(){
		return (
			<div>
				<div className="col-md-4">
					<Info handleInput={this.handleInput} info={this.state.info} infoRow={this.infoRow}/>
				</div>
				<ResumePage info={this.state.info}/>
			</div>
		);
	}
}

InfoContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	info: PropTypes.object.isRequired
};

const mapStateToProps= (state,ownProps)=>({info: state.info});

const mapDispatchToProps=(dispatch)=>({
		actions: bindActionCreators(infoActions, dispatch)
	});

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);

