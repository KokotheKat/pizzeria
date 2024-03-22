import "../styles/NavBar.scss"
import { NavButton } from "./NavButton"
import { NavBrand } from "./NavBrand"

export const NavBar = () => {
  return (
    <>
      <div className='NavBar'>
        <NavBrand />

        <div
          style={{
            marginLeft: 'auto'
          }}
        >

          <NavButton>Texto del botón1</NavButton>
          <NavButton>Texto del botón2</NavButton>
          <NavButton>Texto del botón</NavButton>
          <NavButton>Texto del botón</NavButton>
          <NavButton>Texto del botón</NavButton>
          <NavButton>Texto del botón</NavButton>
        </div>


      </div>
    </>
  )
}
