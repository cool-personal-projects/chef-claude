import React from 'react'

export default function Input() {

      const [ingredients, setIngredients] = React.useState([])
      const ingredientsListItems = ingredients.map((i) => (
            <li key={i}>{i}</li>
      ))

      function addIngredient(event) {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const newIngredient = formData.get("ingredient")
            setIngredients(previousArray => [...previousArray, newIngredient])
            document.querySelector("#ingredient-input").value = ""
      }

      return (
           <div> 
                  <form className="input" onSubmit={addIngredient}>
                        <input type="text" 
                              placeholder="e.g. three eggs" 
                              id="ingredient-input" 
                              name="ingredient"
                        />
                        <button id="ingredient-btn">+ Add ingredient</button>
                  </form>  
                  <div className="ingredients-container">
                        <h1 id="list-title">Ingredients on hand:</h1>
                        <ul id="ingredients-list">
                              {ingredientsListItems}
                        </ul>
                  </div>    
            </div> 
      )
}

