import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=1470&auto=format&fit=crop" 
              alt="生涯諮詢師 Eve 的形象照，展現溫暖專業的工作情境" 
              className="rounded-lg shadow-2xl object-cover w-full h-full sticky top-28"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">關於我 About Eve</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-700 mb-3 border-l-4 border-teal-500 pl-3">經歷與背景</h3>
                <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                  <li>NPO組織管理Ｘ社會工作</li>
                  <li>2023 紐西蘭打工度假</li>
                  <li>2021 台大設計人生引導員培訓</li>
                  <li>2018 教育局學校社工師</li>
                  <li>2017 高考社會工作師</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-700 mb-3 border-l-4 border-teal-500 pl-3">我的探索過程</h3>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    社工系畢業後，我跟大家一樣考取社工師執照、投入助人工作。轉換到企業的過程中，我曾負責ESG報告書分析、規劃公益活動，也因為事事要求自己而時常加班，卻始終無法肯定自己。
                  </p>
                  <p>
                    後來，一個打工度假的機會帶我去了紐西蘭。2024年回國後，為了安穩，我曾短暫地回到社工領域，卻發現那已不是我心之所向。在非營利組織短暫停留後，透過前輩介紹，我踏入了管理顧問公司的行銷領域，負責推廣EAP服務，這就是現在的我。
                  </p>
                  <p>
                    你說我找到天職了嗎？還沒有。但我學會了在工作中找到能賦予我意義感的事情，那就是將腦中的想法付諸行動——「Life Lookout Point」因此誕生。
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-300">
                 <p className="text-stone-700 font-medium italic leading-relaxed">
                    "Lookout Point 是在爬山時能夠俯瞰風景的瞭望處。"
                    <br />
                    "我希望，每當你努力爬上目標時，也能回頭看看自己努力的軌跡。透過對話，陪伴對生活感到不滿意的你，一起梳理自己的狀態。"
                 </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;