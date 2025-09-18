import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-amber-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900">準備好開啟你的探索之旅了嗎？</h2>
        <p className="mt-6 text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
          為自己預約一個「Life Lookout Point」的時段，給自己一個看見內心風景、釐清未來方向的機會。
        </p>
        <a 
          href="https://foil-bamboo-2d4.notion.site/246c3a20360d80608330e832e989bb3b?pvs=105" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-10 inline-block bg-teal-600 text-white font-bold py-4 px-10 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          立即預約 Life Lookout Point
        </a>
      </div>
    </section>
  );
};

export default CTA;