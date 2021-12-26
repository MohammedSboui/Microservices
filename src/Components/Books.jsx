import Grid from "@mui/material/Grid";
import axios from "axios";
import { Book } from "./Book";
import React from "react";
const Books = () => {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    const wa = async () => {
      const result = await axios.get("http://localhost:9500/books");
      console.log(result.data);
      setBooks(result.data);
    };
    wa();
  }, []);
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:9500/books/${id}`);
    setBooks((prevBooks) => books.filter((book) => book._id !== id));
  };
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(books).map((e, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Book
            title={e.title}
            author={e.author}
            quantity={e.quantity}
            bookimg={e.bookImg}
            deleteBook={deleteBook}
            id={e._id}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default Books;
