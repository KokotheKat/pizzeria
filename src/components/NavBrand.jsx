import "../styles/NavBrand.scss"
import logo from "../assets/pizzalogo.svg" 
export const NavBrand = () => {
  return (
    <div className="NavBrand">
      <div className="NavBrand-content">
          
      <img className="NavBrand-logo" src={logo} alt="" />
      <h1 className="NavBrand-title">Pizza</h1>
      </div>
      <h2 className="NavBrand-description">DELICIOUS</h2>
    </div>
  )
}