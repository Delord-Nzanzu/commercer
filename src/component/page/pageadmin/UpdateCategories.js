import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import { Index } from "../../etat/Index";
import Api from "../../axios/Api";

function UpdateCategories(props) {
  const categ = props.categories;

  const variable = {
    id: categ.id,
    categorie: categ.designation,
  };
  const { values, onchange, error, setError } = Index.Etat(variable);
  console.log("ok==>" + values.categorie);
  const valaidate = () => {
    let tabs = {};
    tabs.categorie = values.categorie ? "" : "completer";
    setError({ ...tabs });
    return Object.values(tabs).every((e) => e === "");
  };

  const update = () => {
    if (valaidate()) {
      try {
        const datas = {
          designation: values.categorie,
          active: 1,
        };

        Api.post(`category/update/${values.id}`, datas)
          .then((reslt) => {
            console.log(reslt);
          })
          .catch((er) => {
            console.log(er);
          });
      } catch (error) {}
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container style={{ backgroundColor: "#ffffff" }}>
          <Index.Form>
            <Index.Input
              label="categorie"
              name="categorie"
              value={values.categorie}
              onChange={onchange}
              error={error.categorie}
              type=""
              variant="outlined"
            />
          </Index.Form>
          <Button
            variant="contained"
            style={{ marginBottom: "2%", marginLeft: "1%" }}
            onClick={() => update()}
          >
            Updates
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
}

export default UpdateCategories;
