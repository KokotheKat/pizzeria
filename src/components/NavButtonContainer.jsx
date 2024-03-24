import React, { useState } from 'react'
import { NavButton } from './NavButton'

export const NavButtonContainer = () => {
    const [navButtonToggle, setNavButtonToggle] = useState(false)
    const handleNavButtonToggle = () => { setNavButtonToggle(!navButtonToggle) }
    return (
        <div className='NavButtonContainer'>

            <button className='NavToggleButton' onClick={()=>{handleNavButtonToggle()}}>
                X
            </button>
            {
                    (
                        
                        <div className={`NavButtonList ${navButtonToggle?'isActive':''}`} >
                <NavButton>Texto del botón1</NavButton>
                <NavButton>Texto del botón2</NavButton>
                <NavButton>Texto del botón</NavButton>
                <NavButton>Texto del botón</NavButton>
                <NavButton>Texto del botón</NavButton>
                <NavButton>Texto del botón</NavButton>
            </div>
                            )
            }
        </div>
    )
}
