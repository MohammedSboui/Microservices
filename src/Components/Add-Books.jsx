import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";
import axios from "axios";
export const AddBook = () => {
  const inputFields = [
    { placeholder: "Titre", name: "title" },
    { placeholder: "Auteur", name: "author" },
    { placeholder: "prix", name: "price" },
    { placeholder: "Date de publication", name: "publishingDate" },
    { placeholder: "Quantité", name: "quantity" },
    { placeholder: "Image Livre URL", name: "bookImg" },
  ];
  const [form, Setform] = React.useState({
    title: "",
    author: "",
    price: "",
    publishingDate: "",
    quantity: "",
    bookImg: undefined,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    Setform((prevform) => {
      return {
        ...prevform,
        [name]: value,
      };
    });
  };
  const submit = async () => {
    await axios.post("http://localhost:9500/books", form);
    window.location.href = "/books";
  };
  return (
    <>
      <Grid container spacing={3} marginTop={6}>
        <Grid item md={3}></Grid>
        <Grid item md={6}>
          <h1>Informations Livres</h1>
          {inputFields.map((e) => {
            return (
              <Input
                style={{ marginBottom: 50 }}
                id="standard-adornment-amount"
                placeholder={e.placeholder}
                onChange={handleChange}
                fullWidth={true}
                name={e.name}
              />
            );
          })}
          <Button variant="outlined" fullWidth={true} onClick={submit}>
            Ajouter Livre
          </Button>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </>
  );
};
