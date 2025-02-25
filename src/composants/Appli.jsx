import { useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import Principal from './Principal';
import { useEffect } from 'react';

function Appli() {

  //panier d'achat
  const [panier, setPanier] = useState (()=> JSON.parse(localStorage.getItem("panier")) || {}); //panier vide


  // window.localStorage.setItem("panier", JSON.stringify(panier));

  useEffect(
    () => {

      window.localStorage.setItem("panier", JSON.stringify(panier)), [panier];
    })

  
  
  return (
    <div className='Appli'>
      <Entete panier={panier}/>
      <Principal panier={panier} setPanier={setPanier}/>
      <Pied2Page/>
    </div>
  )
}

export default Appli;
