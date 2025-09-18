import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900">簡單的預約流程</h2>
          <p className="mt-4 text-lg text-stone-600">
            四個步驟，讓我們一起開啟你的探索旅程。
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((item) => (
            <div key={item.step} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-teal-700 mb-2">{item.step}</h3>
              <h4 className="text-xl font-semibold text-stone-800 mb-3">{item.title}</h4>
              <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;