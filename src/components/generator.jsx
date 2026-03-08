
export default function Generator(props) {

      return (    
            <div className="recipe" onClick={props.getRecipe}>
                  <div className="text">
                        <p id="question">Ready for a recipe?</p>
                        <p id="details">Generate a recipe from your list of ingredients.</p>
                  </div>
                  <button id="generate-btn">Get recipe</button>
            </div>
      )
}