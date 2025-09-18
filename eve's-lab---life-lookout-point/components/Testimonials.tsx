import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900">聽聽參與者怎麼說</h2>
          <p className="mt-4 text-lg text-stone-600">
            他們在 Life Lookout Point 的真實體驗與收穫。
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex-grow mb-4">
                <svg className="w-10 h-10 text-teal-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.333 22.667h5.333l2.667-5.333v-8h-8v8h2.667l-2.667 5.333zM20 22.667h5.333l2.667-5.333v-8h-8v8h2.667l-2.667 5.333z"></path>
                </svg>
                <p className="text-stone-600 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
              <div>
                <p className="font-bold text-stone-800">{testimonial.name}</p>
                <p className="text-sm text-stone-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;