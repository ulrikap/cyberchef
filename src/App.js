import React, {useState} from "react";
import Searchbar from "./components/Searchbar";
import Result from "./components/Result";
import { mealUrl, cocktailUrl } from "./config/api-config";
import { ReactComponent as Chef } from "./assets/chef.svg";
import "./App.scss";

function App() {
  const [meal, setMeal] = useState(undefined);
  const [cocktail, setCocktail] = useState(undefined);

  const fetchData = async url => {
    const result = await fetch(`${url}random.php`);
    const json = await result.json();
    return json;
  };

  const getRandom = async meal => {
    if (meal) {
      const result = await fetchData(mealUrl);
      setMeal(result);
    } else {
      const result = await fetchData(cocktailUrl);
      setCocktail(result);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Chef />
      </div>
      <h1 className="title">CYBERCHEF</h1>
      <div className="container">
        <p>Made by Ulrik Palmstrøm</p>
        <Searchbar getRandom={getRandom} />
        <Result meal={meal} cocktail={cocktail} />
      </div>
    </div>
  );
}

export default App;