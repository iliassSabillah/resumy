//This component handles the Home template
import React, {PropTypes} from 'react';

class Info extends React.Component{
	render(){
		return (
					<div className="contact-form">

						<div>
							<form name="contact_form">
								<div className="input-box">
									<label className="identifier show">Email</label>
									<input id="contact_email" name="contact_email" placeholder="Email" type="email"/>
								</div>
								<div className="input-box">
									<label className="identifier show">Phone</label>
									<input id="contact_phone" name="contact_phone" placeholder="Phone" type="text"/>
								</div>
								<div className="input-box">
									<label className="identifier show">Address</label>
									<textarea id="contact_address" name="contact_address" placeholder="Address"/>
								</div>
							</form>
						</div>

						<button type="button" className="add contact_link">
							<span className="svg-icon">Add Custom Link<svg className="add-icon" viewBox="0 0 14 14"/>
							</span>
						</button>

						<div id="list" className="">
							<ul id="listing" className="contact-links">
								<li id="contact_link_2524" className="sortable-item">
									<h3>github</h3>

									<div className="controls">
										<i className="edit"><a className="edit-contact_link"><div className="edit-icon"/></a></i>
										<i className="delete"><div className="delete-icon"/></i>
										<i className="reorder"><div className="reorder-icon ui-sortable-handle"/></i>
									</div>
								</li>
								<li id="contact_link_2525" className="sortable-item">
									<h3>linkdin</h3>

									<div className="controls">
										<i className="edit"><a className="edit-contact_link"><div className="edit-icon"/></a></i>
										<i className="delete"><div className="delete-icon" /></i>
										<i className="reorder" ><div className="reorder-icon ui-sortable-handle"/></i>
									</div>
								</li>
							</ul>
						</div>
					</div>
		);
	}
}


export default Info;

