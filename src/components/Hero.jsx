import { Button } from "./Button"
import "../styles/Hero.scss"


export const Hero = () => {
    return (
        <div className="Hero">
           <div className="Hero-imgContainer">
           <img className="Hero-img" src="src/assets/plato.png" alt="plato.png" />
            </div> 
            <div className="Hero-info">

            <span className="Hero-frase"> hero frase
            </span>
            <h2 className="Hero-title">  distinctio vitae debitis labore accusamus veritatis aspernatur amet, magnam delectus corrupti!</h2>
            <p className="Hero-subtitle"> Lorem ipsum dolor sit.</p>
            <div className="Hero-buttonContainer">
                <Button>a</Button>
                <Button>b</Button>
            </div>
            </div>
        </div>
    )
}
