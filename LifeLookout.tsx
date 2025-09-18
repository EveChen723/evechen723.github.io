import React from 'react';

const LifeLookout: React.FC = () => {
  const targetAudience = [
    "對現況感到焦慮",
    "找不到生活意義感或重心",
    "覺得自己不夠好",
    "對生活的一成不變感到疲乏"
  ];

  return (
    <section id="life-lookout-point" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop" 
              alt="一條通往日出的道路，象徵在 Life Lookout Point 中找到人生的新方向" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">計畫主題：Life Lookout Point</h2>
            <p className="text-stone-600 mb-4 leading-relaxed">
              這是一場為期 1-2 小時的一對一深度對話，我們會運用圖像豐富的牌卡與精心設計的引導反思問題，陪你一起站上生命的制高點，眺望自己的內心風景。
            </p>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-stone-800 mb-2">在這趟旅程中，你將會：</h3>
                    <ul className="list-disc list-inside text-stone-600 space-y-2">
                      <li>透過對話，重新梳理你的過去經驗。</li>
                      <li>透過牌卡，選擇並澄清你所重視的價值觀。</li>
                      <li>透過引導，描繪你理想的未來樣貌。</li>
                    </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <h3 className="font-semibold text-stone-800 mb-3">如果你有以下感受，這個計畫很適合你：</h3>
                  <ul className="space-y-2">
                    {targetAudience.map(item => (
                      <li key={item} className="flex items-start">
                        <svg className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-stone-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeLookout;