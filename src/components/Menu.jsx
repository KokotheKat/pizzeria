import React from 'react'
import "../styles/Menu.scss"
import { MenuCard } from './MenuCard'
// const Menu =[{image="src/assets/pizzas/pizza-1.jpg"}]
import data from '../data.json'
export const Menu = () => {
    return (
        <div className='Menu'>
            <h2 className='Menu-Title'>

            </h2>
            <p className='Menu-Description'>

            </p>
            {/* <MenuCard/> */}
            {
                data.map((item,i)=>(
                    <MenuCard key={i}{...item}/>


                ))
            }

        </div>
    )
}
