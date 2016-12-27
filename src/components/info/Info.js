//This component handles the Home template
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import * as infoActions from '../../actions/infoActions';
import $ from 'jquery';

class Info extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			info: {
				name: '',
				email: '',
				phone: '',
				address: '',
				links: []
			}
		};
		// this.onTitleBlur = this.onTitleBlur.bind(this);
		// this.onUrlBlur = this.onUrlBlur.bind(this);
		this.addLink = this.addLink.bind(this);
		this.onLinksBlur = this.onLinksBlur.bind(this);
		this.infoRow= this.infoRow.bind(this);
		this.onNameChange = this.onNameChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPhoneChange = this.onPhoneChange.bind(this);
		this.onAddressChange = this.onAddressChange.bind(this);
	}
	onNameChange(e){
		const info = this.state.info;
		info[e.target.name] = e.target.value;
		this.setState({info: info});
		this.infoRow();
		this.props.dispatch(infoActions.createInfo(info));
	}
	// handleBlur(e) {
	// 	let info= this.info;
	// 	this.setState({[e.target.name] : e.target.value});
	// 	this.infoRow();
	// 	this.props.dispatch(infoActions.createInfo(info));
	// }
	onEmailChange(e){
		const info = this.state.info;
		info.email = e.target.value;
		this.setState({info: info});
		this.infoRow();
		this.props.dispatch(infoActions.createInfo(info));

	}
	onPhoneChange(e){
		const info = this.state.info;
		info.phone = e.target.value;
		this.setState({info: info});
		this.infoRow();
		this.props.dispatch(infoActions.createInfo(info));
	}
	onAddressChange(e){
		const info = this.state.info;
		info.address = e.target.value;
		this.setState({info: info});
		this.infoRow();
		this.props.dispatch(infoActions.createInfo(info));

	}
	// onTitleBlur(e){
	// 	const info = this.state.info;
	// 	this.setState(info.links.concat({title : e.target.value}));
	// 	console.log(this.state.info.links);
	// 	this.infoRow();
	// 	this.props.dispatch(infoActions.createInfo(info));
    //
	// }
	onLinksBlur(e){
		let link ={};
		const info = this.state.info;
		e.target.name ==='title' ? link = {title: e.target.value} : link = {url: e.target.value};
		console.log('link',link);
		info.links.concat(Object.assign(link , link));
		this.infoRow();
		this.setState({info:info});
		this.props.dispatch(infoActions.createInfo(info));



	}
	addLink(){
		$('.link').toggleClass('hidden');
	}
	infoRow(info,index){return (<li key={info+index}>{info}</li>);}
	render(){
		return (
					<div id="info" className="contact-form">
						<h2>Info</h2>
						<ul style={{listStyle: 'none'}}>{Object.values(this.state.info).map(this.infoRow)}</ul>
						<div>
							<form>
								<div className="input-box">
									<label className="identifier show">Name</label>
									<input id="contact_name" name="name" placeholder="First Last" onBlur={this.onEmailChange} defaultValue = {this.state.info.name} type="text"/>
								</div>
								<div className="input-box">
									<label className="identifier show">Email</label>
									<input id="contact_email" name="email" placeholder="Email" onBlur={this.onEmailChange} defaultValue = {this.state.info.email} type="email"/>
								</div>
								<div className="input-box">
									<label className="identifier show">Phone</label>
									<input id="contact_phone" name="phone" placeholder="Phone" onBlur={this.onPhoneChange} defaultValue = {this.state.info.phone} type="text"/>
								</div>
								<div className="input-box">
									<label className="identifier show">Address</label>
									<textarea id="contact_address" name="address" placeholder="Address" onBlur={this.onAddressChange} defaultValue = {this.state.info.address} />
								</div>
							</form>
						</div>
						<div  className="">
							Links:
							<ul style={{listStyle: 'none'}}>{this.state.info.links[0]}</ul>
						</div>
						<button type="button" className="add_link" onClick={this.addLink}>
							Add Link
						</button>
						<div className="input-box link hidden">
							<label className="identifier show">Title</label>
							<input id="link_title" name="title" placeholder="Title" onBlur={this.onLinksBlur} defaultValue = {this.state.info.title} type="text"/>
						</div>
						<div className="input-box link hidden">
							<label className="identifier show">Url</label>
							<input id="link_url" name="url" placeholder="Url" onBlur={this.onLinksBlur} defaultValue = {this.state.info.url} type="text"/>
						</div>

					</div>
		);
	}
}

Info.propTypes = {
	dispatch : PropTypes.func.isRequired,
	info: PropTypes.array.isRequired
};

const mapStateToProps= (state,ownProps)=>({info: state.info});

export default connect(mapStateToProps)(Info);

