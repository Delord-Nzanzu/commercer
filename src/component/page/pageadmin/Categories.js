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
import { BorderColor } from "@material-ui/icons";
import MDialogue from "../../menu/dialog/MDialogue";
import UpdateCategories from "./UpdateCategories";

const variable = {
  categorie: "",
};

function Categories() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [datas, setData] = useState(null);
  const [, setDidMound] = useState(false);
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

  const { values, onchange, error, setError } = Index.Etat(variable);
  useEffect(() => {
    setDidMound(true);
    try {
      Api.get("category/show/all")
        .then((result) => {
          setTimeout(() => {
            setCategories(result.data);
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
    return () => setDidMound(false);
  }, [categories]);
  const data = categories.map((item) => {
    return {
      id: item.id,
      designation: item.designation,
      update: (
        <IconButton onClick={() => update(item)} key={item.id}>
          <BorderColor style={{ marginRight: "5%", color: "white" }} />
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
            padding: "1%",
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
            title="Categoris"
            style={{
              padding: "5%",
              backgroundColor: "#528686",
              color: "white",
            }}
          />
          <MDialogue title="Modifier" open={open} setOpen={setOpen} taille="md">
            <UpdateCategories categories={datas} />
          </MDialogue>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Categories;
