import './Principal.scss';

import teeshirts from "../data/teeshirts.json";

function Principal() {
    
  return (
    <main className="Principal page-produits page-teeshirts">
      <article className="amorce">
        <h1>Nos teeshirts</h1>
        <section className="controle">
          <form action="" method="get">
                <div className="filtre">
                <label htmlFor="filtre">Filtrer par : </label>
                <select name="filtre" id="filtre">
                    <option value="tous">Tous les produits</option>

                    <option value="1">Animaux</option>
                    <option value="2">Inusité</option>
                    <option value="4">Nature</option>
                    <option value="3">Sport</option>
                </select>
                </div>
                <div className="tri">
                    <label for="tri">Trier par : </label>
                    <select name="tri" id="tri">
                        <option value="RAND()">Aléatoire</option>
                        <option value="prix ASC">Prix / ascendant</option>
                        <option value="prix DESC">Prix / descendant</option>
                        <option value="nom ASC">Nom / ascendant</option>
                        <option value="nom DESC">Nom / descendant</option>
                        <option value="dac DESC">Nouveauté</option>
                        <option value="ventes DESC">Meilleur vendeur</option>
                    </select>
                </div>
          </form>
        </section>
      </article>
  
  <article className="principal liste-produits">

    {teeshirts.map(
        teeshirt => (
           <div className="produit" data-pid={teeshirt.id}>
                <span className="ventes">{teeshirt.ventes}</span>
                <span className="image">
                <img src={"images/produits/teeshirts/" + teeshirt.id + ".webp"} alt={teeshirt.nom} />
                </span>
                <div className="prd-info">
                <span className="nom">{teeshirt.nom}</span>
                <span className="prix">
                <span className="montant">
                {teeshirt.prix}
                </span>
                $
                </span>
            </div>
      
      <button className="btn-ajouter">Ajouter au panier</button>
    </div>
        )

    )}
    
  </article>
  </main>
  )

}

export default Principal;