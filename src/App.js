import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Recipiee from "./Recipie";
import { queries } from "@testing-library/react";

function App() {
  const [search, setsearch] = useState("");
  const [recipies, setrecipies] = useState([]);
  const [query, setquery] = useState("chicken");
  const App_ID = "60bc3f3a";
  const App_Key = "e117d1f52556736684ee7e9dee1ecfdd";
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=f8ce441a&app_key=0acaacd8401f62e14dcbd30385b794e1`
      );
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      const data = await response.json();
      // console.log("data is:", data.hits);
      setrecipies(data.hits);
    } catch (error) {
      console.error(error);
    }
  };
  const updateSearch = (e) => {
    setsearch(e.target.value);
    console.log("sreach is ", search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setquery(search);
    console.log("wuery is ", query);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          placeholder="Search recipes"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button">search</button>
      </form>
<div className="recipes">
      {recipies.map((recipi) => {
        return (
          <Recipiee
            key={recipi.recipe.label}
            title={recipi.recipe.label}
            calories={recipi.recipe.calories}
            image={recipi.recipe.image}
            ingredients={recipi.recipe.ingredients}
          />
        );
      })}</div>
    </div>
  );
}

export default App;
