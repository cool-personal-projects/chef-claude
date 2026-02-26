import {React} from 'react'

export default function Suggestion(props) {

      return (
            <div className="container">
                  <div className="suggestion">
                        <h1 className="title">Suggested recipe:</h1>
                        <p id="intro">la moza del papa del mondo</p>
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
                              {}
                        </ul>
                  </div>
            </div>
      )
}

