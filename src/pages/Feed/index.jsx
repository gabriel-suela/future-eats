import { AccountCircle, Input } from "@mui/icons-material";
import { InputAdornment, InputBase, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../components/CardRestaurant";
import Header from "../../components/Header";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardsRestaurant, ContainerFeed } from "./styled";
import SearchIcon from "@mui/icons-material/Search";
import { goToRestaurants } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate()
  useProtectedPage();
  const getRestaurants = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <ContainerFeed>
      <Header title={"Future Eats"}></Header>
      <CardsRestaurant onClick={()=> goToRestaurants(navigate)}>
        {
          <InputBase
            placeholder="Restaurantes"
            inputProps={{ "aria-label": "search google maps" }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        }
        {restaurants.map((restaurant, item) => {
          return <CardRestaurant key={item} restaurant={restaurant}  />;
        })}
      </CardsRestaurant>
    </ContainerFeed>
  );
};

export default Feed;
