import React, { useState, createContext } from 'react'

export const RecipeContext = createContext();

export default function RecipeContextProvider(props) {
    const [ingredientsInRecipe, setIngredientsInRecipe] = useState([])

    return (
        <RecipeContext.Provider value={{ ingredientsInRecipe, setIngredientsInRecipe }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
