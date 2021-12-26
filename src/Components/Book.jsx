import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { height } from "@mui/system";
import { Button } from "@mui/material";

export const Book = (props) => {
  const theme = useTheme();
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.author}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          Quantity : {props.quantity}
          <br />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <button>
            <ShoppingCartIcon />{" "}
          </button>
          <button color="error" onClick={() => props.deleteBook(props.id)}>
            <DeleteIcon />
          </button>
          <button
            onClick={() => {
              window.location.href = `/edit-book/${props.id}`;
            }}
          >
            <EditIcon />
          </button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ height: 500, width: 400 }}
        image={props.bookimg}
        alt="Live from space album cover"
      />
    </Card>
  );
};
