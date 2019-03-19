import React from 'react';
import Outing from './Outing.js';


const OutingList = (props) => {
	const outings = props.outings.map((outing) => {
		 	return (
				<li key={outing.id} className="component-item">
					<div className = "component">
				      <Outing outing={outing} />
			    </div>
			  </li>
		)
		})

	return (
		<ul className="component-list">
	    {outings}
	  </ul>

	)
}
 export default OutingList;
