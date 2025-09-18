import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Workshop from './components/Workshop';
import About from './components/About';
import Process from './components/Process';
import LifeLookout from './components/LifeLookout';
import Testimonials from './components/Testimonials';
import Encouragement from './components/Encouragement';
import Articles from './components/Articles';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-stone-50 text-stone-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Workshop />
        <About />
        <Process />
        <LifeLookout />
        <Testimonials />
        <Encouragement />
        <Articles />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;