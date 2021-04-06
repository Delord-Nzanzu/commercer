import { useState } from "react";
import ListeData from "../item/ListeData";
import { Container, Grid, List } from "@material-ui/core";
import { useDispatch } from "react-redux";
import ActionAchat from "../../../redux/actionicons/ActionAchat";
import ListeCommande from "../ListeCommande";
import { useSelector } from "react-redux";

function ListAllData() {
  const [achat, setAchat] = useState([]);
  const achats = useDispatch();
  const afficahge = useSelector((state) => state.afficheachat);

  const addpanier = (item) => {
    setAchat((ex) => [...ex, item]);
    achats(ActionAchat());
  };

  return (
    <Grid container style={{ backgroundColor: "#F2F2F2" }}>
      {afficahge === false ? (
        <Container>
          <List>
            <ListeData addpanier={addpanier} />
          </List>
        </Container>
      ) : (
        <ListeCommande achat={achat} />
      )}
    </Grid>
  );
}

export default ListAllData;
