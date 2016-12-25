//This component handles the header navbar component
import React from 'react';
import {Link, IndexLink} from 'react-router';
const Header = ()=> {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"/>
						<span className="icon-bar"/>
						<span className="icon-bar"/>
					</button>
					<a className="navbar-brand" href="#">Resumy</a>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav">
						<li><IndexLink to="/" activeClassName="active">Home<span className="sr-only"/></IndexLink></li>
						<li><Link to="about" activeClassName="active">About</Link></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#">Sign Up</a></li>
						<li><a href="#">Sign In</a></li>
					</ul>
				</div>
			</div>
		</nav>
		);
};


export default Header;


