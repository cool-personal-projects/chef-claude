
export default function Input(props) {

      return (
           <div className='container'> 
                  <form className="input" action={props.formAction}>
                        <input type="text" 
                              placeholder="e.g. three eggs" 
                              id="ingredient-input" 
                              name="ingredient"
                              required
                        />
                        <button id="ingredient-btn">+ Add ingredient</button>
                  </form>
            </div> 
      )
}

