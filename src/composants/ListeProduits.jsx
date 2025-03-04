import './ListeProduits.scss';
import teeshirts from "../data/teeshirts.json";
import Produit from "./Produit.jsx";

function ListeProduits({panier, setPanier, filtre, tri}){

    // console.log(filtre);

    //Filter and triage the products
    const produitFiltreEtTrie = teeshirts.filter(({categorie}) => {
       return filtre == "tous" || categorie == filtre; 
    }).sort(functionComparison[tri]);

    return (
    <article className="principal liste-produits">

    {produitFiltreEtTrie.map(
        teeshirt => (
        <Produit {...teeshirt} panier={panier} setPanier={setPanier}
        />
        )

    )}

    </article>

    )

}

//Determine the order of the products
//Each option in the dropdown menu has a corresponding function
//The function is called when the option is selected
const functionComparison = {


    //=========/IMPORTANT/=========//
    //The name of the function is the same as the value of the option in the dropdown menu
    //Same as the value=xxxx in the option tag


    //First function is a random function
    alea: function(element1, element2) {return Math.random() - 0.5},

    //Order it by price
    //Compare the price of the first element with the second element
    prixASC: (element1, element2) => element1.prix - element2.prix,

    //Compare the price of the second element with the first element
    prixDESC: (element1, element2) => element2.prix - element1.prix,

    //Name: use the localeCompare function to compare the two names
    nomASC: (element1, element2) => element1.nom.localeCompare(element2.nom, "fr"),
    nomDESC: (element1, element2) => element2.nom.localeCompare(element1.nom, "fr"),

    //Compare the number of sales of the first element with the second element
    dacDESC: (element1, element2) => element2.dac.localeCompare(element1.dac, "fr"),

    //Compare the number of sales of the second element with the first element
    ventesDESC: (element1, element2) => element2.ventes - element1.ventes
}

export default ListeProduits;