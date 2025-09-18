import React from 'react';

const Workshop: React.FC = () => {
  return (
    <section id="workshop" className="py-20 md:py-28 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-600 font-semibold mb-2">最新活動</p>
            <h2 className="text-3xl font-bold text-stone-900 mb-4">設計人生工作坊</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Hut 是在爬山過程中，停留休息的山屋，有人在這裡休息過夜，有人在這裡和其他山友交流，如果你也想要和其他人一起打造有意義的工作與生活，歡迎你來參加這個微型工作坊，額滿即關閉活動頁面。
            </p>
            
            <div className="my-8 p-6 bg-white/70 rounded-lg border border-teal-200 space-y-3">
              <p className="flex items-start"><strong className="w-20 flex-shrink-0 font-semibold text-teal-700">時間：</strong><span>10/4(六) 14:00-17:00</span></p>
              <p className="flex items-start"><strong className="w-20 flex-shrink-0 font-semibold text-teal-700">地點：</strong><span>日嚐漫漫咖啡</span></p>
              <p className="flex items-start"><strong className="w-20 flex-shrink-0 font-semibold text-teal-700">報名費：</strong><span>300元 (含下午茶)</span></p>
            </div>

            <a 
              href="https://www.accupass.com/event/2508060826281907511598" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              查看活動詳情並報名
            </a>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" 
              alt="一群人在舒適的環境中參與設計人生工作坊，進行小組合作與討論" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;