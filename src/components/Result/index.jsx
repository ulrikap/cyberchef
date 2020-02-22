import React from "react";
import "./index.scss";

const Result = ({ meal, cocktail }) => {
  const renderMeal = data => {
    const single = data.meals[0];
    return (
      <div className="element">
        <h1>{single.strMeal}</h1>
        <img src={single.strMealThumb} alt={single.strMeal}/>
        {single.strYoutube && <a href={single.strYoutube} target='_blank' rel="noopener noreferrer">Cooking guide</a>}
      </div>
    );
  };

  const renderCocktail = data => {
    const single = data.drinks[0];
    return (
        <div className="element">
          <h1>{single.strDrink}</h1>
          <img src={single.strDrinkThumb} alt={single.strDrink}/>
          {single.strGlass && <p>Served in a {single.strGlass}</p>}
        </div>
    );
  };

  return (
    <section className={"Result"}>
      {meal && renderMeal(meal)} {cocktail && renderCocktail(cocktail)}
    </section>
  );
};

export default Result;
