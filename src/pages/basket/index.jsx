import React from "react";
import Header from "./../../layout/header";
import Card from "./../../components/card";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

function Basket({ basketFav, setBasketFav }) {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <button
        onClick={() => {
          let check = JSON.parse(localStorage.getItem("isLogin"));
          console.log(check);
          if (check) {
            console.log("odenis edildi");
          } else {
            navigate("/login");
          }
        }}
      >
        CheckCount
      </button>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {basketFav &&
            basketFav.basket?.map((prod) => {
              return <Card key={uuidv4()} product={prod} />;
            })}
        </Grid>
      </Container>
    </div>
  );
}

export default Basket;