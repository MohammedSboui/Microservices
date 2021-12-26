import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import axios from "axios";
export const EditBook = () => {
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
  React.useEffect(() => {
    const wa = async () => {
      const link = window.location.href.split("/");
      const result = await axios.get(
        `http://localhost:9500/books/${link[link.length - 1]}`
      );
      Setform(result.data);
    };
    wa();
  }, []);
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
    const link = window.location.href.split("/");

    await axios.put(
      `http://localhost:9500/books/${link[link.length - 1]}`,
      form
    );
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
                value={form[e.name]}
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
            Modifier Livre
          </Button>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </>
  );
};
