import axios from "axios";
import React, { useEffect, useState } from "react";
import { InputAdornment, InputBase } from "@mui/material";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardsRestaurant, ContainerFeed, Menu, MenuItem } from "./styled";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../../components/Footer/Footer";

const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [inputText, setInputText] = useState("");
  const [categoryRestaurant, setCategoryRestaurant] = useState([]);
  const [valueCategory, setValueCategory] = useState("");
  const [isActive, setIsActive] = useState(false);

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

    const result = categoryRestaurant.map((cat) => {
      if (cat.category === cat) {
        return {
          ...cat,
          select: true,
        };
      } else {
        return {
          ...cat,
          select: false,
        };
      }
    });
    setCategoryRestaurant(result);
  };

  return (
    <ContainerFeed>
      <Header title={"Future Eats"}></Header>
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
                select={category.select}
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
      <Footer></Footer>
    </ContainerFeed>
  );
};

export default Feed;
