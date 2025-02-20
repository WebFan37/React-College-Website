import './ListeProduits.scss';
import teeshirts from "../data/teeshirts.json";
import Produit from "./Produit.jsx";

function ListeProduits(){

    return (
<article className="principal liste-produits">

{teeshirts.map(
    teeshirt => (
       <Produit {...teeshirt}/>
    )

)}

</article>

    )

}

export default ListeProduits;