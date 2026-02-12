import Main from "./main.jsx"
import {createRoot} from "react-dom/client"
import "../style.css"


const root = createRoot(document.getElementById("root"))
function App () {
      return (
            <Main/>
      )
}

root.render(
      <App/>
)
