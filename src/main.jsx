import Header from "./components/header"
import Input from "./components/input"
import Suggestion from "./components/suggestion"
import Generator from "./components/generator"
import IngredientTags from "./components/ingredientTags"
import { getRecipeFromGroq } from "./ai"

import React from "react"
import "../style.css"


export default function Main() {
      // initial ingredients
      const initialIngredients = [
        { id: 1, name: 'milk' },
        { id: 2, name: 'sugar' },
        { id: 3, name: 'flour' },
        { id: 4, name: 'eggs' },
      ];

      const [ingredients, setIngredients] = React.useState(initialIngredients)
      const ingredientsListItems = ingredients.map((ingredient) => (
          <div key={ingredient.id} className="ingredient-tag">
            <span className="ingredient-name">{ingredient.name}</span>
            <button 
                className="remove-btn" 
                onClick={() => removeIngredient(ingredient.id)}
                aria-label={`Remove ${ingredient.name}`}
            >
                <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        ))

      // Fonction pour ajouter un ingrédient
      function addIngredient(formData) {
            const ingredientName = formData.get("ingredient")
            if (!ingredientName || ingredientName.trim() === "") return;

            const newIngredient = {
                  id: crypto.randomUUID(),
                  name: ingredientName.trim().toLowerCase()
            }

            setIngredients(previousArray => [...previousArray, newIngredient])
      }

      // Fonction pour supprimer un ingrédient
      const removeIngredient = (idToRemove) => {
            setIngredients(ingredients.filter(ingredient => ingredient.id !== idToRemove));
            console.log(`Ingrédient ${idToRemove} supprimé`);
      };

      const [recipeShown, setRecipeShown] = React.useState(false)
      const [recipe, setRecipe] = React.useState("")

      async function getRecipe() {
            const ingredientsNames = ingredients.map((i) => i.name)
            console.log(ingredientsNames)
            setRecipeShown(true)
            const genereatedRecipeMarkDown = await getRecipeFromGroq(ingredientsNames)
            setRecipe(genereatedRecipeMarkDown)
      }


      return (
            <div className="container">
                  <Header/>
                  <div className="user-componant">
                        <Input formAction = {addIngredient}/>
                        <IngredientTags ingredientsListItems = {ingredientsListItems}/>
                        
                        {<Generator getRecipe = {getRecipe} ingredientsNumber = {ingredients.length}/>}
                  </div>
                  {recipeShown && <Suggestion recipe = {recipe}/>}
            </div>
      )
}
