// import "./App.css";
import Menu from "./component/menu/Menu";
import { Switch, Route } from "react-router-dom";
import Connection from "./component/page/pageuser/Connection";
import Home from "./component/page/pageweb/Home";
import CreationCompte from "./component/page/pageuser/CreationCompte";
import { Provider } from "react-redux";
import Store from "./component/redux/reducermagasin/Store";
import Homes from "./component/page/pageadmin/Homes";
import ConnectionAdmin from "./component/page/pageadmin/ConnectionAdmin";
import Produit from "./component/page/pageadmin/Produit";
import Commande from "./component/page/pageadmin/Commande";
import CommandeDay from "./component/page/pageadmin/CommandeDay";
import TousComande from "./component/page/pageadmin/TousComande";
import Categories from "./component/page/pageadmin/Categories";
// import ItemCommande from "./component/menu/item/ItemCommande";
import Paiement from "./component/page/pageweb/Paiement";

function App() {
  return (
    <div>
      <Provider store={Store}>
        <Menu />
        <Switch>
          <Route exact path="/acceuille" component={Home} />
          <Route path="/connection" component={Connection} />
          <Route path="/creationcompte" component={CreationCompte} />
          <Route path="/adminehome" component={Homes} />
          <Route path="/admine" component={ConnectionAdmin} />
          <Route path="/produit" component={Produit} />
          <Route path="/commande" component={Commande} />
          <Route path="/commande-journaliere" component={CommandeDay} />
          <Route path="/commandes" component={TousComande} />
          <Route path="/paiement" component={Paiement} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
