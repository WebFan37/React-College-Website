import { useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import Principal from './Principal';

function Appli() {

  //panier d'achat
  const [panier, setPanier] = useState ({}); //panier vide
  
  
  return (
    <div className='Appli'>
      <Entete panier={panier}/>
      <Principal panier={panier} setPanier={setPanier}/>
      <Pied2Page/>
    </div>
  )
}

export default Appli;
