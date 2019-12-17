import React, { Component } from 'react'

class AdventureList extends Component {
	render(){
		return(
			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<ul className="list-group">
					<li className="list-group-item">Jorge Arturo Garcia<input type="checkbox" className="checkbox-Names"/></li>
					<li className="list-group-item">Renata Rodriguez<input type="checkbox" className="checkbox-Names"/></li>
					<li className="list-group-item">Natalia Garcia<input type="checkbox" className="checkbox-Names"/></li>
					<li className="list-group-item">Elis Renata Zoe Garcia<input type="checkbox" className="checkbox-Names"/></li>
					<li className="list-group-item">Jorge Arturito Garcia<input type="checkbox" className="checkbox-Names"/></li>
					<li className="list-group-item">Jhoana Garcia<input type="checkbox" className="checkbox-Names"/></li>
					</ul>
				</div>
			</div>			
			)
	}
}
export default AdventureList