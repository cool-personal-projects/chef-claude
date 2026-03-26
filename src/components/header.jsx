import robot from "../assets/robot.png"
export default function Header() {
      return (
            <div className="header">
                  <span id="fork-icon" className="material-symbols-outlined">restaurant</span>
                  <span className="logo-chef-claude">Miamm Miamm</span>
                  <span id="icon" className="material-symbols-outlined text-orange-800" data-icon="account_circle">account_circle</span>
            </div>
      )
}
