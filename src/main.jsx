import Header from "./components/header"
import Input from "./components/input"
import Suggestion from "./components/suggestion"
import IngredientsList from "./components/ingrediantsList"
import Generator from "./components/generator"
import { getRecipeFromGroq } from "./ai"

import React from "react"
import "../style.css"


export default function Main() {
      const [ingredients, setIngredients] = React.useState([])
      const ingredientsListItems = ingredients.map((i) => (
            <li key={i}>{i}</li>
      ))

      function addIngredient(formData) {
            const newIngredient = formData.get("ingredient")
            setIngredients(previousArray => [...previousArray, newIngredient])
      }

      const [recipeShown, setRecipeShown] = React.useState(false)
      const [recipe, setRecipe] = React.useState("")

      async function getRecipe() {
            setRecipeShown(true)
            const genereatedRecipeMarkDown = await getRecipeFromGroq(ingredients)
            setRecipe(genereatedRecipeMarkDown)
      }

      return (
            <div className="container">
                  <Header/>
                  <Input formAction = {addIngredient}/>
                  {ingredients.length > 0 && <IngredientsList ingredientsListItems = {ingredientsListItems}/>}
                  {ingredients.length > 3 && <Generator getRecipe = {getRecipe}/>}
                  {recipeShown && <Suggestion recipe = {recipe}/>}
            </div>
      )
}
