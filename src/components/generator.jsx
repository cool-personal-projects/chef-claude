
export default function Generator(props) {
      const ingredientsNumber = props.ingredientsNumber;
      let disableBtn = true
      if (ingredientsNumber > 3) {
            disableBtn = false;
      }

      return (    
            <div className="recipe" onClick={props.getRecipe}>
                  <div className="text">
                        <p id="question">Ready for a recipe?</p>
                        <p id="details">Generate a recipe from your list of ingredients.</p>
                  </div>
                  <button id="generate-btn" disabled={disableBtn}>Get recipe</button>
            </div>
      )
}
