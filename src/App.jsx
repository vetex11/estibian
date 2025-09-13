import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AIAssistant from "./components/AIAssistant";
import ConditionalLogic from "./components/ConditionalLogic";
import ResponsiveDesign from "./components/ResponsiveDesign";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import TrustedBy from "./components/TrustedBy";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <AIAssistant />
      <ConditionalLogic />
      <ResponsiveDesign />
      <Pricing />
      <Testimonials />
      <FAQ />
      <TrustedBy />
      <Footer />
    </div>
  );
}

export default App;
