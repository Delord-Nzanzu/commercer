import { AddCircle, Dashboard } from "@material-ui/icons";

export const DataMEnu = [
  { id: "1", title: "Acceuille", link: "/" },
  { id: "2", title: "Nous contacter", link: "/contacter" },
  { id: "3", title: "Aide", link: "/aide" },
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
];

export const DataDownItemCategorie = [
  {
    id: "1",
    title: "soulier",
  },
  {
    id: "2",
    title: "chemize",
  },
  {
    id: "3",
    title: "Lacoste",
  },
];
