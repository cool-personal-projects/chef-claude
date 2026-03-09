import ReactMarkdown from "react-markdown"

export default function Suggestion(props) {
      return (
            <div className="other-container">
                  <div className="suggested-recipe-container">
                        <ReactMarkdown>{props.recipe}</ReactMarkdown>
                  </div>
            </div>
            
      )
}

/*
<div className="suggestion">
                        <h1 className="title">Suggested recipe:</h1>
                        <p id="intro"></p>
                  </div>
                  <div className="other-container">
                        <h2 className="small-title">Ingrediants:</h2>
                        <ul className="ingredients-list">
                              {}
                        </ul>
                  </div>
                  <div className="other-container">
                        <h2 className="small-title">Instructions:</h2>
                        <ul className="instructions-list">
                              {props.intructions}
                        </ul>
                  </div> */