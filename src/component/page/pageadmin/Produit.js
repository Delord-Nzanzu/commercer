import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Index } from "../../etat/Index";
import MaterialTable from "material-table";
import Api from "../../axios/Api";

function Produit() {
  //cette entite permet d'enregistre de nouveau produit dans le systeme
  const [taille, setTaille] = useState([]);
  const [data, setData] = useState([]);
  const [, setDidMound] = useState(false);
  const [selectfile, setSelectFile] = useState(null);

  const variable = {
    designationproduit: "",
    quantite: "",
    prixunitaire: "",
    // categorie: "",
    taille: "",
  };

  const onChange = (e) => {
    setSelectFile(e.target.files[0]);
  };
  useEffect(() => {
    setDidMound(true);
    try {
      Api.get("category/show/all")
        .then((result) => {
          setTimeout(() => {
            setTaille(result.data);
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
      Api.get("product/show/all")
        .then((result) => {
          setTimeout(() => {
            setData(result.data);
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
    return () => setDidMound(false);
  }, []);

  const validate = () => {
    let tbs = {};
    tbs.designationproduit = values.designationproduit
      ? ""
      : "complter cet champs";
    tbs.quantite = values.quantite ? "" : "complter cet champs";
    tbs.prixunitaire = values.prixunitaire ? "" : "complter cet champs";
    // tbs.categorie = values.categorie ? "" : "complter cet champs";
    tbs.taille = values.taille ? "" : "complter cet champs";
    setError({ ...tbs });
    return Object.values(tbs).every((x) => x === "");
  };
  const { values, onchange, error, setError, videlechamps } =
    Index.Etat(variable);

  const Save = () => {
    if (validate()) {
      try {
        const datass = {
          designation: values.designationproduit,
          qteStock: parseInt(values.quantite),
          montant: parseFloat(values.prixunitaire),
          refCategorie: values.taille,
          image: selectfile,
        };
        // let uplodeImage = new FormData();
        // uplodeImage.append("designation", values.designationproduit);
        // uplodeImage.append("qteStock", values.quantite);
        // uplodeImage.append("montant", values.prixunitaire);
        // uplodeImage.append("refCategorie", values.taille);
        // uplodeImage.append("image", selectfile, selectfile.name);

        console.log(
          values.taille +
            "  " +
            values.designationproduit +
            "  " +
            values.prixunitaire +
            "  " +
            values.quantite +
            "  " +
            selectfile
        );
        Api.post("product/save", datass)
          .then((result) => {
            console.log(result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {}
    }
  };
  const datas = data.map((item) => {
    return {
      designation: item.designation,
      qteStock: item.qteStock,
      montant: item.montant,
      refCategorie: item.refCategorie,
    };
  });
  const column = [
    {
      title: "Designation",
      field: "designation",
    },
    {
      title: "Quantiter",
      field: "qteStock",
    },
    {
      title: "Prix unitaire",
      field: "montant",
    },
    {
      title: "categorie",
      field: "refCategorie",
    },
    // {
    //   title: "taille",
    //   field: "taille",
    // },
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
          Produits
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
              <input
                type="file"
                name="file"
                onChange={(e) => onChange(e)}
                accept=".jpg, .jpeg, .png"
              />
              <Index.Combobox
                label="Taille"
                name="taille"
                value={values.taille}
                onChange={onchange}
                error={error.taille}
                item={taille}
              />
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => Save()}
                style={{ textDecoration: "none" }}
              >
                Enregistrer
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                style={{ marginLeft: "2%", textDecoration: "none" }}
                onClick={() => videlechamps()}
              >
                Annuler
              </Button>
            </Grid>
          </Grid>
        </Index.Form>
        <MaterialTable
          title="Listes"
          data={datas}
          columns={column}
          style={{
            marginBottom: "2%",
            marginTop: "1%",
            padding: "2%",
            backgroundColor: "#528686",
            color: "white",
          }}
        />
      </Container>
    </Grid>
  );
}

export default Produit;
