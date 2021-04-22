import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Index } from "../../etat/Index";
import MaterialTable from "material-table";

function Produit() {
  const taille = [
    { id: "1", taille: "sl" },
    { id: "2", taille: "md" },
    { id: "3", taille: "sm" },
    { id: "1", taille: "xs" },
  ];
  const variable = {
    designationproduit: "",
    quantite: "",
    prixunitaire: "",
    categorie: "",
    taille: "",
    file: "",
  };

  const validate = () => {
    let tbs = {};
    tbs.designationproduit = values.designationproduit
      ? ""
      : "complter cet champs";
    tbs.quantite = values.quantite ? "" : "complter cet champs";
    tbs.prixunitaire = values.prixunitaire ? "" : "complter cet champs";
    tbs.categorie = values.categorie ? "" : "complter cet champs";
    tbs.taille = values.taille ? "" : "complter cet champs";
    setError({ ...tbs });
    return Object.values(tbs).every((x) => x === "");
  };
  const { values, onchange, error, setError, videlechamps } = Index.Etat(
    variable
  );

  const column = [
    {
      title: "designation",
      field: "designation",
    },
    {
      title: "quantiter",
      field: "quantiter",
    },
    {
      title: "prix",
      field: "prix",
    },
    {
      title: "categorie",
      field: "categorie",
    },
    {
      title: "taille",
      field: "taille",
    },
  ];

  return (
    <Grid container justify="center" style={{ backgroundColor: "#F2F2F2" }}>
      <Container
        style={{
          backgroundColor: "#ffffff",
          marginBottom: "5%",
          marginTop: "2%",
        }}
      >
        <Typography variant="h6" align="left">
          Gestion des produits
        </Typography>
        <Index.Form>
          <Grid container>
            <Grid item xs={6}>
              <Index.Input
                label="Designation produit"
                name="designationproduit"
                value={values.designationproduit}
                onChange={onchange}
                error={error.designationproduit}
                type=""
                variant="outlined"
              />
              <Index.Input
                label="Quantiter"
                name="quantite"
                value={values.quantite}
                onChange={onchange}
                error={error.quantite}
                type="number"
                variant="outlined"
              />
              <Index.Input
                label="Prix unitaire"
                name="prixunitaire"
                value={values.prixunitaire}
                onChange={onchange}
                error={error.prixunitaire}
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Index.Input
                name="file"
                value={values.file}
                onChange={onchange}
                error={error.categorie}
                type="file"
              />
              <Index.Input
                label="Categorie"
                name="categorie"
                value={values.categorie}
                onChange={onchange}
                error={error.categorie}
                type=""
                variant="outlined"
              />
              <Index.Combobox
                label="Taille"
                name="taille"
                value={values.taille}
                onChange={onchange}
                error={error.taille}
                item={taille}
              />
              <Button variant="outlined" color="primary" size="small">
                Enregistrer
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                style={{ marginLeft: "2%" }}
              >
                Annuler
              </Button>
            </Grid>
          </Grid>
        </Index.Form>
        <MaterialTable
          title="Liste des produits"
          columns={column}
          style={{ marginBottom: "2%", marginTop: "1%", padding: "2%" }}
        />
      </Container>
    </Grid>
  );
}

export default Produit;
