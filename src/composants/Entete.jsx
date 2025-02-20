import './Entete.scss';
import logo from '../images/logo.png';

function Entete({panier}) {

    
  return (
      
    <header className='Entete'>
        <nav className="barre-haut">
            
            <a title="ENGLISH" href="#" className="">en</a>
            <a title="FRANÇAIS" href="#" className="actif">fr</a>

        </nav>
        <nav className="barre-logo">
            <label htmlFor="cc-btn-responsive" className="material-icons burger">menu</label>
            <a className="logo" href="#" title= "Page d'accueil"><img src={logo} alt="Accueil" /></a>
            <div className="panier-icone">
            <div className="panier-badge ">
                {
                    // Reduce with 
                    Object.values(panier).reduce((acc, article) => acc + article.qte, 0)
                }
            </div>
            <label htmlFor="panier-cc" className="material-icons">shopping_cart</label>
            <input type="checkbox" id="panier-cc" />
            <div className="sommaire-panier">
                <div className="ligne1">
                <span className="nb-articles">
                    <span className="etiquette">#Articles : </span>
                    <span className="nombre">1</span>
                </span>
                <label htmlFor="panier-cc" className="material-icons">close</label>
                </div>
                <div className="ligne2">
                <span className="sous-titre">Sous-total du panier</span>
                <span className="sous-total montant-fr">20.00</span>
                </div>
                <div className="ligne3 btn-afficher-panier">
                <a href="#">Voir le panier d'achats</a>
                </div>
            </div>
            </div>
            <input className="recherche" type="search" name="motscles" placeholder="Mots-clés de votre recherche" />
        </nav>
        <input type="checkbox" id="cc-btn-responsive" />
        <nav className="principale">
            <label htmlFor="cc-btn-responsive" className="menu-controle material-icons">close</label>
            <a href="#" className="actif">Teeshirts</a>
            <a href="#" className="">Casquettes</a>
            <a href="#" className="">Hoodies</a>
            <span className="separateur"></span>
            <a href="#" className="">Aide</a>
            <a href="#" className="">À propos de nous</a>
        </nav>
    </header>
      

  )
}

export default Entete;