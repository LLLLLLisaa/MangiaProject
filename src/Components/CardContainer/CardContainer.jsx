import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import './CardContainer.css';

const CardContainer = ({recipes}) => {
    return (
        <div className='card-container'>
            {recipes.map(recipe => {
                return (
                    <RecipeCard
                    key={recipe._id}
                    id={recipe._id}
                    image={recipe.imageUrl}
                    name={recipe.title}
                    description={recipe.description}
                    rating={recipe.avgRating}
                    categories={recipe.categories}
                    timeInMins={recipe.timeInMins}
                    />
                )
            })}
        </div>
    )
}

export default CardContainer;