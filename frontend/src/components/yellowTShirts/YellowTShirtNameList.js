import React from 'react';
import YellowTShirtName from './YellowTShirtName.js';


const YellowTShirtList = (props) => {
	const yellowTShirts = props.yellowTShirts.map((yellowTShirt) => {
		 	return (
				<li key={yellowTShirt.id} className="component-item">
					<div className = "component">
				<YellowTShirtName yellowTShirt={yellowTShirt} />
			</div>
			</li>
		)
		})

	return (
		<ul className="component-list">
	    {yellowTShirts}
	  </ul>

	)
}
 export default YellowTShirtList;
