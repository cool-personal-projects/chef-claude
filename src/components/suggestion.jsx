import ReactMarkdown from "react-markdown"

export default function Suggestion(props) {
      return (
            <div className="other-container" aria-live="polite">
                  <h2>The Chef Recommends: </h2>
                  <div className="suggested-recipe-container">
                        <ReactMarkdown>{props.recipe}</ReactMarkdown>
                  </div>
            </div>
            
      )
}
