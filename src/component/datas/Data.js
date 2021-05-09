import {
  AccountCircle,
  AddCircle,
  AddShoppingCart,
  Apps,
  Create,
  Dashboard,
  SettingsPower,
  Today,
} from "@material-ui/icons";
import xa from "../image/xa.jpg";
import xb from "../image/xb.jpg";
import xc from "../image/xc.jpg";
import xd from "../image/xd.jpg";

export const DataMEnu = [
  { id: "1", title: "Acceuille", link: "/acceuille", type: "disparess" },
  { id: "2", title: "Nous contacter", link: "/contacter", type: "disparess" },
  { id: "3", title: "Aide", link: "/aide", type: "disparess" },
];

export const DataSideAdmin = [
  {
    id: "1",
    title: "DashBo",
    lik: "/dashbo",
    icons: <Dashboard style={{ color: "white" }} />,
  },
  {
    id: "2",
    title: "Produit",
    lik: "/produit",
    icons: <AddCircle style={{ color: "white" }} />,
  },
  {
    id: "3",
    title: "Categorie",
    lik: "/categories",
    icons: <Create style={{ color: "white" }} />,
  },
  {
    id: "4",
    title: "Commandes",
    lik: "/commande",
    icons: <AddShoppingCart style={{ color: "white" }} />,
  },
];

export const DataDownItemCategorie = [
  {
    id: "1",
    title: "soulier",
    link: "/#",
    icons: <AddShoppingCart fontSize="small" color="primary" />,
  },
  {
    id: "2",
    title: "chemize",
    link: "/#",
    icons: <AddShoppingCart fontSize="small" color="primary" />,
  },
  {
    id: "3",
    title: "Lacoste",
    link: "/#",
    icons: <AddShoppingCart fontSize="small" color="primary" />,
  },
];

export const DataProduit = [
  {
    id: "1",
    type: "chemise",
    prix: 10,
    devise: "$",
    image: xa,
  },
  {
    id: "2",
    type: "pantalon",
    prix: 15,
    devise: "$",
    image: xb,
  },
  {
    id: "3",
    type: "culotte",
    prix: 5,
    devise: "$",
    image: xc,
  },
  {
    id: "4",
    type: "sous-vêtement",
    prix: 8,
    devise: "$",
    image: xb,
  },
  {
    id: "5",
    type: "ceinture",
    prix: 2,
    devise: "$",
    image: xc,
  },
  {
    id: "6",
    type: "soulier",
    prix: 25,
    devise: "$",
    image: xb,
  },
  {
    id: "7",
    type: "polo",
    prix: 5,
    devise: "$",
    image: xa,
  },
  {
    id: "8",
    type: "singlet",
    prix: 4,
    devise: "$",
    image: xc,
  },
  {
    id: "9",
    type: "bracèle",
    prix: 4,
    devise: "$",
    image: xd,
  },
  {
    id: "10",
    type: "shaussette",
    prix: 4,
    devise: "$",
    image: xc,
  },
  {
    id: "11",
    type: "lacoste",
    prix: 4,
    devise: "$",
    image: xd,
  },
  {
    id: "12",
    type: "lacoste",
    prix: 10,
    devise: "$",
    image: xd,
  },
];
export const DataUser = [
  {
    id: "1",
    title: "Profil",
    link: "/profile",
    icons: <AccountCircle fontSize="small" color="primary" />,
  },
  {
    id: "2",
    title: "Mes commandes",
    link: "/#",
    icons: <AddShoppingCart fontSize="small" color="primary" />,
  },
  {
    id: "3",
    title: "Déconnection",
    link: "/#",
    icons: <SettingsPower fontSize="small" color="primary" />,
  },
];

export const DataCommande = [
  {
    id: "1",
    title: "Journalier",
    link: "/commande-journaliere",
    icons: <Today style={{ color: "blue" }} />,
  },
  {
    id: "2",
    title: "Tous les commandes",
    link: "/commandes",
    icons: <Apps style={{ color: "blue" }} />,
  },
];
