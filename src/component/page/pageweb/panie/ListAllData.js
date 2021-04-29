import { useState } from "react";
import ListeData from "../item/ListeData";
import { Container, Grid, List } from "@material-ui/core";
import { useDispatch } from "react-redux";
import ActionAchat from "../../../redux/actionicons/ActionAchat";
import ListeCommande from "../ListeCommande";
import { useSelector } from "react-redux";
import Connection from "../../pageuser/Connection";

function ListAllData() {
  const [achat, setAchat] = useState([]);
  const achats = useDispatch();
  const afficahge = useSelector((state) => state.afficheachat);
  const disp = useDispatch(); //permet de change l'etat avec type:"non de l'etat"
  const useSele = useSelector((store) => store.etatachatlogine); // on pointe sur le variable du state

  const addpanier = (item) => {
    if (sessionStorage.getItem("tockenclient") === null) {
      disp({ type: "etatatrue" });
    } else {
      setAchat((ex) => [...ex, item]);
      achats(ActionAchat());
    }
  };

  return (
    <Grid container style={{ backgroundColor: "#F2F2F2" }}>
      {afficahge === false ? (
        <Container>
          {useSele === false ? (
            <List>
              <ListeData addpanier={addpanier} />
            </List>
          ) : (
            <Connection />
          )}
        </Container>
      ) : (
        <ListeCommande achat={achat} />
      )}
    </Grid>
  );
}

export default ListAllData;
