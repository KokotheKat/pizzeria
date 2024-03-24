import "../styles/NavBar.scss"
import { NavButton } from "./NavButton"
import { NavBrand } from "./NavBrand"
import { NavButtonContainer } from "./NavButtonContainer"

export const NavBar = () => {
  return (
    <>
      <div className='NavBar'>
        <NavBrand />
        <NavButtonContainer />


      </div>
    </>
  )
}
