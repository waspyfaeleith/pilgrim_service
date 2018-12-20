import React from 'react';
import Pilgrim from './Pilgrim.js';


const PilgrimList = (props) => {
	const pilgrims = props.pilgrims.map((pilgrim) => {
		 	return (
				<li key={pilgrim.id} className="component-item">
					<div className = "component">
				<Pilgrim pilgrim={pilgrim} />
			</div>
			</li>
		)
		})

	return (
		<ul className="component-list">
	    {pilgrims}
	  </ul>

	)
}
 export default PilgrimList;
