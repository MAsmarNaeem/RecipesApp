import React from 'react';
import style from "./recipie.module.css"

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} className={style.image} alt='' height="200px" width="200px" />
    </div>
  );
};

export default Recipe;
