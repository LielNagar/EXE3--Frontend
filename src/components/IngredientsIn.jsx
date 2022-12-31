import React from 'react'
import { useEffect } from 'react'
import IngredientIn from './IngredientIn'

export default function IngredientsIn(props) {
    return (
        <div className='IngredientsInRecipe'>
            {props.ingredients.map((ingredient) => <IngredientIn key={ingredient.Id} id={ingredient.Id} name={ingredient.Name} imgUrl={ingredient.ImgUrl} calories={ingredient.Calories} />)}
        </div>
    )
}
