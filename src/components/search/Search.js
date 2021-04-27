import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import API from '../../Api/api'
import './Search.css'
const Search = () => {
	const [area , setArea] = useState('')
	let history = useHistory();


	const search = (props) => {
	
	history.push(`/room/filter`);


	}
    return (
        <div>
            <div className="search-home">
                <div className='search-btn'>
                    <div className="search-btn-type">
   				        <span>Wilaya</span>
   				            <select className="select-type">
                                <option>Sélectionner</option>
                                <option>Adrar </option>
                                <option>Chlef </option>
                                <option>Laghouat </option>
                                <option>Oum El Bouaghi </option>
                                <option>Batna </option>
                                <option>Béjaïa </option>
                                <option>Biskra </option>
                                <option>Béchar </option>
                                <option>Blida </option>
                                <option>Bouira </option>
                                <option>Tamanrasset </option>
                                <option>Tébessa </option>
                                <option>Tlemcen </option>
                                <option>Tiaret </option>
                                <option>Tizi Ouzou </option>
                                <option>Alger </option>
                                <option>Djelfa </option>
                                <option>Jijel </option>
                                <option>Sétif </option>
                                <option>Saïda </option>
                                <option>Skikda </option>
                                <option>Sidi Bel Abbès </option>
                                <option>Annaba </option>
                                <option>Guelma </option>
                                <option>Constantine </option>
                                <option>Médéa </option>
                                <option>Mostaganem </option>
                                <option>Msila </option>
                                <option>Mascara </option>
                                <option>Ouargla  </option>
                                <option>Oran </option>
                                <option>El Bayadh </option>
                                <option>Illizi </option>
                                <option>Bordj Bou Arreridj </option>
                                <option>Boumerdès </option>
                                <option>El Tarf </option>
                                <option>Tindouf </option>
                                <option>Tissemsilt </option>
                                <option>El Oued </option>
                                <option>Khenchela </option>
                                <option>Souk Ahras </option>
                                <option>Tipaza </option>
                                <option>Mila </option>
                                <option>Aïn Defla </option>
                                <option>Naâma </option>
                                <option>Aïn Témouchent </option>
                                <option>Ghardaïa  </option>
                                <option>Relizane </option>
   			            	</select>
   			        </div>
                       <div className="search-btn-type">
   			        	<span>Type de transaction</span>
   				        <select className="select-type">
   					<option value="">Sélectionner</option>
   					<option value="">Location</option>
   					<option value="">Vente</option>
   					
   				</select>
   			</div>
               <div className="search-btn-type">
   				<span>Type de Bien</span>
   				<select className="select-type">
   					<option value="">Sélectionner</option>
   					<option value="">Appartement</option>
   					<option value="">Bloc</option>
   					<option value="">Duplex</option>
   					<option value="">Hangars</option>
   					<option value="">Locaux</option>
   					<option value="">Niveau de Villa</option>
   					<option value="">Terrain</option>
   					<option value="">Villa</option>
   				</select>
   			</div>
               <div className="search-btn-type">
   				<span>Prix Max</span>
   				<select className="select-type">
   					<option value="">Sélectionner</option>
   					<option value="">1,000DZD</option>
	   				<option value="">5,000DZD</option>
	   				<option value="">10,000DZD</option>
	   				<option value="">50,000DZD</option>
	   				<option value="">100,000DZD</option>
	   				<option value="">200,000DZD</option>
	   				<option value="">300,000DZD</option>
	   				<option value="">400,000DZD</option>
	   				<option value="">500,000DZD</option>
	   				<option value="">600,000DZD</option>
	   				<option value="">700,000DZD</option>
	   				<option value="">800,000DZD</option>
	   				<option value="">900,000DZD</option>
	   				<option value="">1,000,000DZD</option>
	   				<option value="">1,500,000DZD</option>
	   				<option value="">2,000,000DZD</option>
	   				<option value="">2,500,000DZD</option>
	   				<option value="">3,000,000DZD</option>
	   				<option value="">3,500,000DZD</option>
	   				<option value="">4,000,000DZD</option>
	   				<option value="">4,500,000DZD</option>
	   				<option value="">5,000,000DZD</option>
   				</select>
   			</div>
               <div className="search-btn-type">
   				<span>Prix Min</span>
   				<select className="select-type">
   					<option value="">Sélectionner</option>
	   				<option value="">1,000DZD</option>
	   				<option value="">5,000DZD</option>
	   				<option value="">10,000DZD</option>
	   				<option value="">50,000DZD</option>
	   				<option value="">100,000DZD</option>
	   				<option value="">200,000DZD</option>
	   				<option value="">300,000DZD</option>
	   				<option value="">400,000DZD</option>
	   				<option value="">500,000DZD</option>
	   				<option value="">600,000DZD</option>
	   				<option value="">700,000DZD</option>
	   				<option value="">800,000DZD</option>
	   				<option value="">900,000DZD</option>
	   				<option value="">1,000,000DZD</option>
	   				<option value="">1,500,000DZD</option>
	   				<option value="">2,000,000DZD</option>
	   				<option value="">2,500,000DZD</option>
	   				<option value="">3,000,000DZD</option>
	   				<option value="">3,500,000DZD</option>
	   				<option value="">4,000,000DZD</option>
	   				<option value="">4,500,000DZD</option>
	   				<option value="">5,000,000DZD</option>
   				</select>
   			</div>
               <div className="search-btn-type">
               <label id="ex">Superficie Min
   				<span>(m²)</span>	
   				</label>
   				<input id="changenum" type="text" placeholder="..."/>
   				<span className="number" id="number"> </span>
               </div>
               <div className="search-btn-type">
   				<label>Superficie Max
   				<span>(m²)</span>
   				</label>
   				<input value={area} onChange={evenet => setArea(evenet.target.value)} id="changenum1" type="text" placeholder="..."/>

   			</div>
   			
               <div className="search-btn-type">
   				<span>Nombre de pièces</span>
   				<select className="select-type">
   					<option value="">Sélectionner</option>
   					<option value="">1</option>
   					<option value="">2</option>
   					<option value="">3</option>
   					<option value="">4</option>
   					<option value="">5</option>
   					<option value="">6</option>
   					<option value="">7</option>
   					<option value="">8</option>
   					<option value="">9</option>
   					<option value="">10</option>
   				</select>
   			</div>

   			<div className=" search">
   				<button onClick={search}>Rechercher</button>

   			</div>
                </div>
            </div> 
        </div>
    )
}

export default Search
