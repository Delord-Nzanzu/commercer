import {
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Index } from "../../etat/Index";
import Api from "../../axios/Api";
import MaterialTable from "material-table";
import { BorderColor, Delete } from "@material-ui/icons";
import MDialogue from "../../menu/dialog/MDialogue";
import UpdateCategories from "./UpdateCategories";

const variable = {
  categorie: "",
};

function Categories() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [datas, setData] = useState(null);
  const valaidate = () => {
    let tabs = {};
    tabs.categorie = values.categorie ? "" : "completer";
    setError({ ...tabs });
    return Object.values(tabs).every((e) => e === "");
  };
  const update = (e) => {
    setOpen(true);
    setData(e);
  };
  const data = categories.map((item) => {
    return {
      id: item.id,
      designation: item.designation,
      update: (
        <IconButton onClick={() => update(item)} key={item.id}>
          <BorderColor color="primary" style={{ marginRight: "5%" }} />
        </IconButton>
      ),
    };
  });
  const column = [
    {
      title: "Numero",
      field: "id",
    },
    {
      title: "Catrgories",
      field: "designation",
    },
    {
      title: "Section",
      field: "update",
    },
  ];
  const { values, onchange, error, setError } = Index.Etat(variable);
  useEffect(() => {
    try {
      Api.get("category/show/all")
        .then((result) => {
          setTimeout(() => {
            setCategories(result.data);
          }, 2000);
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
            style={{ marginBottom: "1%", marginTop: "1%" }}
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
            style={{ marginBottom: "2%", marginLeft: "1%" }}
            onClick={() => Save()}
          >
            Enregistrer
          </Button>
          <MaterialTable
            data={data}
            columns={column}
            style={{ padding: "2%" }}
          />
          <MDialogue title="Modifier" open={open} setOpen={setOpen} taille="lg">
            <UpdateCategories categories={datas} />
          </MDialogue>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Categories;
