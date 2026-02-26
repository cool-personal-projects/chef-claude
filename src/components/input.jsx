import React from 'react'

export default function Input() {

      const [ingredients, setIngredients] = React.useState([])
      const ingredientsListItems = ingredients.map((i) => (
            <li key={i}>{i}</li>
      ))

      function addIngredient(formData) {
            const newIngredient = formData.get("ingredient")
            setIngredients(previousArray => [...previousArray, newIngredient])
      }

      return (
           <div className='container'> 
                  <form className="input" action={addIngredient}>
                        <input type="text" 
                              placeholder="e.g. three eggs" 
                              id="ingredient-input" 
                              name="ingredient"
                              required
                        />
                        <button id="ingredient-btn">+ Add ingredient</button>
                  </form>  
                  {ingredients.length > 0 && <div className="other-container">
                        <h1 className="title">Ingredients on hand:</h1>
                        <ul className="ingredients-list">
                              {ingredientsListItems}
                        </ul>
                  </div>}


                  {ingredients.length > 2 && <div className="recipe">
                        <div className="text">
                              <p id="question">Ready for a recipe?</p>
                              <p id="details">Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button id="generate-btn">Get recipe</button>
                  </div>}  
            </div> 
      )
}

