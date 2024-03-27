import {Carousel} from "./components/Carousel";
import { Category } from "./components/Category";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Menu } from "./components/Menu";
import { NavBar } from "./components/NavBar";
import { News } from "./components/News";
import { Pricing } from "./components/Pricing";
import { PricingCard } from "./components/PricingCard";
import { PricingCarousel } from "./components/PricingCarousel";

import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Welcome } from "./components/Welcome";

export const App = () => {
  return (
    <div>
      <NavBar />
      <div className="mainContainer">
        <Hero></Hero>
        <Info></Info>
        <Welcome />
        <Services />
        <Menu />
        <Pricing />
        <Stats />
        <Category />
        <News />
        <ContactUs />
        <Footer />
        <Carousel></Carousel>
      </div>
    </div>
  );
};
