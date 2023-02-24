import axios from "axios";
import React, { useEffect, useState } from "react";
import { InputAdornment, InputBase } from "@mui/material";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardsRestaurant, Container, Menu, MenuItem } from "./styled";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../../components/Footer/Footer";
import { useRequestData } from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import { Toaster } from "sonner";

const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [inputText, setInputText] = useState("");
  const [categoryRestaurant, setCategoryRestaurant] = useState([]);
  const [valueCategory, setValueCategory] = useState("");
  const [isLoading] = useRequestData(
    `${BASE_URL}/restaurants`,
    localStorage.getItem("token")
  );

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
        filterCategory(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const filterCategory = (restaurants) => {
    const arrayAux = [];

    restaurants.map((res) => {
      arrayAux.push(res.category);
    });
    const takeOutRepeat = [...new Set(arrayAux)];

    const changeObjectArr = [];

    takeOutRepeat.map((category) => {
      const insertObject = { category, select: false };
      changeObjectArr.push(insertObject);
    });
    setCategoryRestaurant(changeObjectArr);
  };

  const filterRestaurant = restaurants
    .filter((restaurant) =>
      inputText
        ? restaurant.name.toLowerCase().includes(inputText.toLowerCase())
        : true
    )
    .filter((restaurant) =>
      valueCategory
        ? restaurant.category
            .toLowerCase()
            .includes(valueCategory.toLowerCase())
        : true
    )
    .map((restaurant, item) => {
      return <CardRestaurant key={item} restaurant={restaurant} />;
    });

  const changeCategory = (category) => {
    setValueCategory(category);

    const result = categoryRestaurant.map((category) => {
      if (category.category === category) {
        return {
          ...category,
          select: true,
        };
      } else {
        return {
          ...category,
          select: false,
        };
      }
    });
    setCategoryRestaurant(result);
  };

  return (
    <Container>
      <Header title={"Future Eats"}></Header>
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <CardsRestaurant>
            {
              <InputBase
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Restaurantes"
                inputProps={{ "aria-label": "search google maps" }}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            }
            <Menu>
              <MenuItem onClick={() => setValueCategory("")}>Todos</MenuItem>
              {categoryRestaurant.map((category, item) => {
                return (
                  <MenuItem
                    key={item}
                    onClick={() => {
                      changeCategory(category.category);
                    }}
                  >
                    {category.category}
                  </MenuItem>
                );
              })}
            </Menu>
            {filterRestaurant}
          </CardsRestaurant>
        </>
      )}

      <Footer page={"home"}></Footer>
    </Container>
  );
};

export default Feed;
