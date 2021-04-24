import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import { Index } from "../../etat/Index";

function UpdateCategories(props) {
  const { categories } = props;
  console.log(categories.designation);
  const variable = {
    id: "",
    Catrgories: categories.designation,
  };
  const { values, onchange, error, setError } = Index.Etat(variable);
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
          >
            Update
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
}

export default UpdateCategories;
