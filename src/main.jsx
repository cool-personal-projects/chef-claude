import Header from "./components/header"
import Input from "./components/input"
import List from "./components/list"
import Recipe from "./components/generate-recipe"
import "../style.css"


export default function Main() {
      return (
            <div className="container">
                  <Header/>
                  <Input />
                  <Recipe/>
            </div>
      )
}
