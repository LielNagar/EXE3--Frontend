import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Ingredient from './Ingredient'

export default function Ingredients() {
  useEffect(() => {
    axios.get('https:localhost:44379/api/ingredients').then((response) => setIngredients(response.data))
  })

  const [ingredients, setIngredients] = useState([])

  return (
    <div className="row">
      {ingredients.map((ingredient) => <Ingredient key={ingredient.Id} id={ingredient.Id} name={ingredient.Name} imgUrl={ingredient.ImgUrl} calories={ingredient.Calories} />)}
    </div>
  )
}
