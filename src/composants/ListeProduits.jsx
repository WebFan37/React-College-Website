import './ListeProduits.scss';
import teeshirts from "../data/teeshirts.json";
import Produit from "./Produit.jsx";

function ListeProduits({panier, setPanier}){

    return (
<article className="principal liste-produits">

{teeshirts.map(
    teeshirt => (
       <Produit {...teeshirt}
       panier={panier} setPanier={setPanier}
       />
    )

)}

</article>

    )

}

export default ListeProduits;