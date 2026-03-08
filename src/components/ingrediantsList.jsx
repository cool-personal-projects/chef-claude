
export default function IngredientsList(props) {
      return (
            <div className="other-container">
                  <h1 className="title">Ingredients on hand:</h1>
                  <ul className="ingredients-list">
                        {props.ingredientsListItems}
                  </ul>
            </div>
      )
}