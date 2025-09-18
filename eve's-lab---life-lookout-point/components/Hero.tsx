import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 md:py-32 bg-amber-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight">
          Life Lookout Point
        </h1>
        <p className="mt-6 text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
          透過<span className="font-semibold text-teal-700">牌卡</span>與<span className="font-semibold text-teal-700">引導式對話</span>，在 1-2 小時的一對一深度交流中，重新梳理你的過去、現在與未來，找到屬於你的內在價值與方向。
        </p>
        <a 
          href="https://foil-bamboo-2d4.notion.site/246c3a20360d80608330e832e989bb3b?pvs=105" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          預約你的 Life Lookout Point
        </a>
      </div>
    </section>
  );
};

export default Hero;