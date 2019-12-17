import React, { Component } from 'react'
import PatchList from './PatchList'
import Menu from './Menu'
import AventurerosLogo from './images/aventureros-logo.png'
import AdventureList from './AdventureList'

class App extends Component {
	render(){
		return(
			<div className="container-fluid text-center">
				<div className="mt-2">
					<img className="aventureros-logo" src={AventurerosLogo} width={30} heigth={30}/>
					<span className="aventureros-text ml-2 mr-2">AVENTUREROS</span>
					<img className="aventureros-logo" src={AventurerosLogo} width={30} heigth={30}/>				 	
			 	</div>
			 	<Menu />
			 	<AdventureList />
			</div>
		)
	}
}

export default App