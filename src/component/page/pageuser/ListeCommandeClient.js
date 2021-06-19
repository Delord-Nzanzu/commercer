import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Api from "../../axios/Api";

function ListeCommandeClient() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    return () => {
      Api.get("command/show/client")
        .then((result) => {
          setTimeout(() => {
            console.log(result.data);
            //setDatas(result)
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, [datas]);

  return (
    <Grid
      container
      justify="center"
      style={{
        marginLeft: "1%",
        marginTop: "1%",
        marginRight: "1%",
        marginBottom: "1%",
      }}
    >
      <Grid item xs={12}>
        <MaterialTable
          title="Commande Effectuer"
          style={{ marginRight: "3%" }}
        />
      </Grid>
    </Grid>
  );
}

export default ListeCommandeClient;
