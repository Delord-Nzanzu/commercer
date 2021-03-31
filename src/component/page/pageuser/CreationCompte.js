import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Index } from "../../etat/Index";

const variable = {
  nom: "",
  prenom: "",
  telephone: "",
  password: "",
  email: "",
};

function CreationCompte() {
  const valaidate = () => {
    let tb = {};
    tb.nom = values.nom ? "" : "complter le nom";
    tb.prenom = values.prenom ? "" : "completer le prenom";
    tb.telephone = values.telephone ? "" : "saisier votre numero telephonique";
    tb.password = values.password ? "" : "saisier votre numero telephonique";
    tb.email = /$^|.+@.+..+/.test(values.email) ? "" : "completer..";

    setError({ ...tb });
    return Object.values(tb).every((x) => x === "");
  };

  const { values, onchange, error, setError, videlechamps } = Index.Etat(
    variable
  );
  const create = () => {
    if (valaidate()) {
    }
  };
  return (
    <Container style={{ marginTop: "1%" }}>
      <Index.Form>
        <Paper elevation={0}>
          <Typography variant="subtitle1">
            CREER VOTRE COMPTE EN TOUTE SECURITER
          </Typography>
          <Grid container direction="row">
            <Grid item xs={6} md={6}>
              <Index.Input
                label="Nom"
                name="nom"
                value={values.nom}
                onChange={onchange}
                error={error.nom}
                type=""
                variant="standard"
              />
              <Index.Input
                label="Prenom"
                name="prenom"
                value={values.prenom}
                onChange={onchange}
                error={error.prenom}
                type=""
                variant="standard"
              />
              <Index.Input
                label="Telephone"
                name="telephone"
                value={values.telephone}
                onChange={onchange}
                error={error.telephone}
                type=""
                variant="standard"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Index.Input
                label="Password"
                name="password"
                value={values.password}
                onChange={onchange}
                error={error.password}
                type="password"
                variant="standard"
              />
              <Index.Input
                label="Email"
                name="email"
                value={values.email}
                onChange={onchange}
                error={error.email}
                type=""
                variant="standard"
              />
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  create();
                }}
              >
                Enregistrer
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  videlechamps();
                }}
                style={{ marginLeft: "1%" }}
              >
                Annuler
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Index.Form>
    </Container>
  );
}

export default CreationCompte;
