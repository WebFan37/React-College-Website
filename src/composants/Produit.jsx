import './Produit.scss';

function Produit({id, nom, prix, ventes}) {
    return(
    <div className="produit" data-pid={id}>
            <span className="ventes">{ventes}</span>
            <span className="image">
            <img src={`images/produits/teeshirts/${id}.webp`} alt={nom} />
            </span>
            <div className="prd-info">
            <span className="nom">{nom}</span>
            <span className="prix">
            <span className="montant">
            {prix}
            </span>
            $
            </span>
        </div>
  
  <button className="btn-ajouter">Ajouter au panier</button>
</div>
    )

}

export default Produit