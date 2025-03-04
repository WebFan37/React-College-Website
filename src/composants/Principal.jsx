import './Principal.scss';


import ListeProduits from './ListeProduits.jsx';
import { useState } from 'react';

function Principal({panier, setPanier}) {

  //Filtre
  const [filtre, setFiltre ] = useState("tous");
    // console.log(filtre);

    //Triage
    const [tri, setTri ] = useState("alea");

  return (
    <main className="Principal page-produits page-teeshirts">
      <article className="amorce">
        <h1>Nos teeshirts</h1>
        <section className="controle">
          <form action="" method="get">
                <div className="filtre">
                <label htmlFor="filtre">Filtrer par : </label>
                <select name="filtre" id="filtre" value={filtre} onChange={
                  (event)=>{setFiltre(event.target.value)} 

                }>
                    <option value="tous">Tous les produits</option>

                    <option value="animaux">Animaux</option>
                    <option value="inusite">Inusité</option>
                    <option value="nature">Nature</option>
                    <option value="sport">Sport</option>
                </select>
                </div>
                <div className="tri">
                    <label htmlFor="tri">Trier par : </label>
                    <select name="tri" id="tri" value={tri} onChange={(event)=> {setTri(event.target.value)}}>
                        <option value="alea">Aléatoire</option>
                        <option value="prixASC">Prix / ascendant</option>
                        <option value="prixDESC">Prix / descendant</option>
                        <option value="nomASC">Nom / ascendant</option>
                        <option value="nomDESC">Nom / descendant</option>
                        <option value="dacDESC">Nouveauté</option>
                        <option value="ventesDESC">Meilleur vendeur</option>
                    </select>
                </div>
          </form>
        </section>
    </article>

  <ListeProduits panier={panier} setPanier={setPanier} filtre={filtre} tri={tri}/>

  </main>
  )

}

export default Principal;