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
