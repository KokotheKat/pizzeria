import { Hero } from "./components/Hero"
import { Info } from "./components/Info"
import { Menu } from "./components/Menu"
import { NavBar } from "./components/NavBar"
import { Services } from "./components/Services"
import { Welcome } from "./components/Welcome"

export const App = () => {
  return (
    <div>
      <NavBar/>
      <div className="mainContainer">
      <Hero></Hero>
      <Info></Info>
      <Welcome/>
      <Services/>
      <Menu/>
      
        </div>
    </div>
  )
}