import React from 'react';
import { ARTICLES } from '../constants';

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900">精選文章</h2>
          <p className="mt-4 text-lg text-stone-600">
            分享我的職涯觀察與思考，希望能為你帶來一些啟發。
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, index) => (
            <a 
              key={index} 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-stone-50 rounded-lg shadow-md overflow-hidden block group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-teal-600 font-semibold mb-2">{article.category}</p>
                <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-teal-700 transition-colors">{article.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{article.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="https://medium.com/@evechentalk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            閱讀更多文章
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;