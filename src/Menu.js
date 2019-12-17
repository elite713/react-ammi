import React, { Component } from 'react'
import Hormiguitas from './images/Ants-white.png'
import Corderitos from './images/Corderitos.png'
import Castorcitos from './images/Castorcitos.png'
import Abejitas from './images/Abejitas.png'
import RayitosDeSol from './images/RayitosDeSol.png'
import ManosAyudadoras from './images/ManosAyudadoras.png'
import Constructores from './images/Builder.png'

class Menu extends Component{
	render(){
		return(
<section className="section mt-4">
				<div className="container-fluid">
				<div className="row">
					<div className="col-md-10 mx-auto">
						<div className="col-center mr-3 ml-3">
							<img src={Hormiguitas} width={120} heigth={120}/>
							<span className="title-clase badge badge-pill hormiguitas-label">Hormiguitas</span>
						</div>
						<div className="col-center mr-3 ml-3 mt-4">
							<img  src={Corderitos} width={120} heigth={120}/>
							<span className="title-clase badge badge-pill corderito-label">Corderitos</span>
						</div>
						<div className="col-center mr-3 ml-3 mt-4">
							<img  src={Castorcitos} width={120} heigth={120}/>
							<span className="title-clase badge badge-pill castorcitos-label">Castorcitos</span>
						</div>
						<div className="col-center mr-3 ml-3 mt-4">
							<img  src={Abejitas} width={120} heigth={120}/>
							<span className="title-clase badge badge-pill abejitas-label">Abejitas</span>
						</div>
						<div className="col-center mr-3 ml-3 mt-4">
							<img  src={RayitosDeSol} width={120} heigth={120}/>
							<span className="title-clase badge badge-pill rayitos-label">Rayitos De Sol</span>
						</div>
						<div className="col-center mr-3 ml-3 mt-4">
							<img src={ManosAyudadoras} width={120} heigth={120}/>
							<span className="title-clase badge badge-pill manitas-label">Manos Ayudadoras</span>
						</div>
						<div className="col-center mr-3 ml-3 mt-4">
							<img src={Constructores} width={120} heigth={120}/>
							<span className="title-clase badge badge-pill constructores-label">Constructores</span>
						</div>
					</div>
				</div>	
				</div>
			
</section>			



		 )
	}
}

export default Menu