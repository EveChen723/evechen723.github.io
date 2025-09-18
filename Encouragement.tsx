import React from 'react';
import { ENCOURAGEMENTS } from '../constants';

const Encouragement: React.FC = () => {
  return (
    <section id="encouragement" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900">給正在探索的你</h2>
          <p className="mt-4 text-lg text-stone-600">
            一些來自夥伴們的溫暖話語，你並不孤單。
          </p>
        </div>
        
        {/* Wrapper for the content and the overlay */}
        <div className="relative">
          {/* The grid of cards, which will be underneath the overlay */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 blur-sm select-none pointer-events-none" aria-hidden="true">
            {ENCOURAGEMENTS.map((item, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-lg shadow-md flex flex-col">
                <div className="flex-grow">
                  <p className="text-stone-600 leading-relaxed mb-4">"{item.quote}"</p>
                </div>
                <div>
                  <p className="font-semibold text-teal-700 text-right">{item.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The semi-transparent overlay */}
          <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center rounded-lg p-8 text-center">
            <svg className="w-12 h-12 text-teal-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-stone-700 mb-2">更多溫暖話語，收集中...</h3>
            <p className="text-stone-500 max-w-md">這裡即將充滿更多來自夥伴們的支持與力量，敬請期待！</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://foil-bamboo-2d4.notion.site/246c3a20360d80248901c499869c5200?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-stone-800 font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            我也想給予鼓勵
          </a>
        </div>
      </div>
    </section>
  );
};

export default Encouragement;