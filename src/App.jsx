import React from "react";
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";
import Carusel from "./components/carusel/Carusel";
import Contact from "./components/contact/Contact";
import Events from "./components/events/Events";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl flex items-center justify-center   font-semibold text-green-700 ">
        Hello World
      </h1>
      <Header />
      <Hero />
      <Card />
      <Carusel />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
