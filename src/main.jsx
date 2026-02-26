import Header from "./components/header"
import Input from "./components/input"
import Suggestion from "./components/suggestion"
import "../style.css"


export default function Main() {
      return (
            <div className="container">
                  <Header/>
                  <Input />
                  <Suggestion/>
            </div>
      )
}
