import { Hero } from "./components/Hero"
import { Info } from "./components/Info"
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
        </div>
    </div>
  )
}