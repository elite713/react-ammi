import React, { Component } from 'react'
import Hormiguitas from './images/Ants-white.png'
import Corderitos from './images/Corderitos.png'
import Castorcitos from './images/Castorcitos.png'
import Abejitas from './images/Abejitas.png'
import RayitosDeSol from './images/RayitosDeSol.png'
import ManosAyudadoras from './images/ManosAyudadoras.png'
import Constructores from './images/Builder.png'

class PatchList extends Component {
	render() {
		return(
			<ul className="list-group">

				<li className="btn">
					<div>					
					<img  src={Hormiguitas} width={120} heigth={120}/>
					<span className="badge badge-pill badge-danger">Hormiguitas</span>
					</div>
				</li>
					
				<li className="btn">
					<img src={Corderitos} width={120} heigth={120}/>
					<span>Corderitos</span></li>

				<li className="btn">
					<img src={Castorcitos} width={120} heigth={120}/>
					<span>Castorcitos</span></li>

				<li className="list-group-item">
					<img src={Abejitas} width={120} heigth={120}/>
					<span>Abejitas</span></li>

				<li className="list-group-item">
					<img src={RayitosDeSol} width={120} heigth={120}/>
					<span>Rayitos De Sol</span></li>

				<li className="list-group-item">
					<img src={ManosAyudadoras} width={120} heigth={120}/>
					<span>Manos Ayudadoras</span></li>

				<li className="list-group-item">
					<img src={Constructores} width={120} heigth={120}/>
					<span>Constructores</span></li>
			</ul>
		 )
	}
}
export default PatchList