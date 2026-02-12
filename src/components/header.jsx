import robot from "../assets/robot.png"
export default function Header() {
      return (
            <div className="header">
                  <img src={robot} alt="robot chef" id="icon"/>
                  <h1 id="header-title">Chef Claude</h1>
            </div>
      )
}
