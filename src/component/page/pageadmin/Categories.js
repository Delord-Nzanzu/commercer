import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Index } from "../../etat/Index";
import Api from "../../axios/Api";
import MaterialTable from "material-table";

const variable = {
  categorie: "",
};

function Categories() {
  const [categories, setCategories] = useState([]);
  const valaidate = () => {
    let tabs = {};
    tabs.categorie = values.categorie ? "" : "completer";
    setError({ ...tabs });
    return Object.values(tabs).every((e) => e === "");
  };
  const column = [
    {
      title: "id",
      field: "id",
    },
    {
      title: "designation",
      field: "designation",
    },
  ];
  const { values, onchange, error, setError } = Index.Etat(variable);
  useEffect(() => {
    try {
      Api.get("category/show/all")
        .then((result) => {
          setCategories(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  }, [categories]);

  const Save = () => {
    if (valaidate()) {
      try {
        const data = {
          designation: values.categorie,
        };
        Api.post("category/save", data)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log("catchError" + error);
      }
    }
  };

  return (
    <Grid container style={{ backgroundColor: "#F2F2F2" }}>
      <Grid item xs={12}>
        <Container
          style={{
            backgroundColor: "#FFFFFF",
            marginBottom: "1%",
            marginTop: "1%",
          }}
        >
          <Typography
            variant="h5"
            style={{ marginBottom: "5%", marginTop: "2%" }}
          >
            Categories
          </Typography>
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
            style={{ marginBottom: "5%", marginLeft: "1%" }}
            onClick={() => Save()}
          >
            Enregistrer
          </Button>
          <MaterialTable data={categories} columns={column} />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Categories;
