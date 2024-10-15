import React from "react";
import "./RecipeDetails.css";
import {useState} from 'react';

const RecipeDetails = ({
  image,
  title,
  description,
  time, 
  difficulty,
  rating, 
  categories,
  ingredients,
  instructions,
}) => {
  let roundedRating = rating == null ? null : Math.round(rating * 10) / 10;

  const [checkedIngredients, setCheckedIngredients] = useState(Array(ingredients.length).fill(false));
  const [checkedInstructions, setCheckedInstructions] = useState(Array(instructions.length).fill(false));

  const handleIngredientChange = (index) => {
    const newCheckedState = [...checkedIngredients];
    newCheckedState[index] = !newCheckedState[index]; 
    setCheckedIngredients(newCheckedState);
  };

  const handleInstructionChange = (index) => {
    const newCheckedState = [...checkedInstructions];
    newCheckedState[index] = !newCheckedState[index]; 
    setCheckedInstructions(newCheckedState);
  };
  return (
    <div className="recipe-details-container">
      <div className="recipe-details-top">
        <img
          src={`/images/${image}`}
          alt={title}
          className="recipe-details-image"
        />
        <div className="recipe-details-top-right">
          <h1 className="recipe-details-title">{title}</h1>
          <p className="recipe-details-description">{description}</p>
        
          <div className="recipe-details-time-rating">
            <h3>Ikon1 {time} min</h3>
            <h3>Ikon2 {difficulty}</h3>
            <h3>Ikon3 {roundedRating}</h3>
          </div>
          <div className="recipe-details-category-container">
            {categories.map((category, index) => (
                <span key={index} className="recipe-details-category">
                  {category}
                </span>
            ))}
          </div>
          
        </div>
      </div>
      
      <div className="ingredients-instructions-container">
        <div className="recipe-details-ingredients">
          <h2>Ingredienser</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li
                key={index}
                className={checkedIngredients[index] ? 'checked' : ''}>
              <input
                type="checkbox"
                id={`ingredient-${index}`}
                checked={checkedIngredients[index]}
                onChange={() => handleIngredientChange(index)}
              />
              <label htmlFor={`ingredient-${index}`}>{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="recipe-details-instructions">
          <h2>Gör så här</h2>
          <ul>
            {instructions.map((instruction, index) => (
              <li 
                key={index}
                className={checkedInstructions[index] ? 'checked' : ''}>
                <input
                  type="checkbox"
                  id={`instruction-${index}`}
                  checked={checkedInstructions[index]}
                  onChange={() => handleInstructionChange(index)}
                />
                <label htmlFor={`instruction-${index}`}>{`${index + 1}. ${instruction}`}</label>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
