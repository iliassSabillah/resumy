//This component handles the resume section
import React ,{PropTypes} from 'react';

const ResumePage =(props)=>(
			<div className ="container-fluid">
				<div className="col-md-8">
					<h2>Resume Page</h2>
					<div id="resumeBody">
						{Object.values(props.info).map((info,i)=>(<p key={i}>{info}</p>))}
					</div>
				</div>
			</div>
		);

ResumePage.propTypes = {
	info: PropTypes.object.isRequired
};

export default ResumePage;
