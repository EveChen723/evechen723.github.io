import React from 'react';
import { ProcessStep, Testimonial, Article, Encouragement } from './types';

const CalendarIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const DocumentTextIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ChatBubbleIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const PencilIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
  </svg>
);

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Step 1",
    title: "預約時段",
    description: "點擊「立即預約」按鈕，選擇您方便的時段，並完成付費。",
    icon: <CalendarIcon className="w-10 h-10 text-teal-600" />
  },
  {
    step: "Step 2",
    title: "會談前準備",
    description: "預約後將收到行前通知，協助您在對話前做好準備。",
    icon: <DocumentTextIcon className="w-10 h-10 text-teal-600" />
  },
  {
    step: "Step 3",
    title: "線上深度對話",
    description: "我們將在約定時間進行 1-2 小時的線上深度對談與牌卡探索。",
    icon: <ChatBubbleIcon className="w-10 h-10 text-teal-600" />
  },
  {
    step: "Step 4",
    title: "回饋與反思",
    description: "會談後，您將被邀請填寫匿名回饋表單，沉澱對話中的收穫。",
    icon: <PencilIcon className="w-10 h-10 text-teal-600" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "回朔過往的經驗及他人對我的評論，都讓我發現我在自我覺察、領導力、管理能力及人際關係建立上較突出，也許目前沒有深刻留下什麼事跡，但期許自己在未來能發揮所長。",
    name: "計畫參與者",
    title: "匿名回饋"
  },
  {
    quote: "以誠相待與他人互動，總有一天會從其他地方/他人的話語，得到相對應的回饋，不帶走的會留下來，這些是你的專屬品牌，願往後的日子閃閃發亮！",
    name: "計畫參與者",
    title: "匿名回饋"
  },
  {
    quote: "透過對話重新梳理過去經驗、選擇自己重視的價值觀、選擇自己的現況與未來。我很謝謝你願意花時間跟我分享。",
    name: "計畫參與者",
    title: "匿名回饋"
  }
];

export const ENCOURAGEMENTS: Encouragement[] = [
  {
    quote: "很多人都有相同的困擾，你並不孤單！除了向外尋找，也別忘了向內探索...花時間了解自己真正重視什麼、需要什麼，會讓你的選擇更有方向感。給自己一點時間和耐心，這個過程很值得。",
    author: "來自另一位探索者"
  },
  {
    quote: "願意迷茫願意尋找的你，真的超棒。相信我們都會走在找尋自己想要的道路上，最終走到盡頭，或者是更好的轉彎口。",
    author: "來自另一位探索者"
  },
  {
    quote: "不想單純的安慰『不用緊張、不用焦慮』，因為此時此刻的我仍處於這樣的狀態，但我認為經過一次一次的梳理可以看見更清晰的未來。請好好把握並用自己舒適的步調持續向前吧！",
    author: "來自另一位探索者"
  },
  {
    quote: "意識到困擾、找尋方式解決，已經跨出改變的第一步！每個人身上都有不一樣的特質，有實線、有虛線，這些線條會和不同類型或同類型的人交織再一起，從彼此身上看到自己的光芒！",
    author: "來自另一位探索者"
  },
   {
    quote: "如果遇到抉擇時，不管選擇哪種都要記得自己不會後悔。適當的把視野拉長，想著這些事對未來的自己而言具有什麼意義，或許抉擇會就不會那麼困難。",
    author: "來自另一位探索者"
  },
  {
    quote: "你不需要非得做出怎麼樣的成果才是值得被肯定的，踏實的過好每一天 好好吃飯、好好睡覺、好好感受每一天的陽光雨水，你的存在，本身就令人驕傲～",
    author: "來自另一位探索者"
  }
];

export const ARTICLES: Article[] = [
  {
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1470&auto=format&fit=crop',
    category: '職涯探索',
    title: '熱忱與天賦之外，你真正需要的是什麼？',
    excerpt: '當我們談論理想工作時，常聽到「追隨熱情」或「發揮天賦」。但如果這兩者都讓你感到迷惘，或許我們該問問...',
    url: 'https://medium.com/@evechentalk/%E7%86%B1%E5%BF%B1%E8%88%87%E5%A4%A9%E8%B3%A6%E4%B9%8B%E5%A4%96-%E4%BD%A0%E7%9C%9F%E6%AD%A3%E9%9C%80%E8%A6%81%E7%9A%84%E6%98%AF%E4%BB%80%E9%BA%BC-d5d46d2334ad'
  },
  {
    image: 'https://images.unsplash.com/photo-1457530378978-8bac673b8062?q=80&w=1470&auto=format&fit=crop',
    category: '個人成長',
    title: '在城市浪人長出我的影響力配方',
    excerpt: '影響力不是職位賦予的權力，而是一種從內而外散發的能量。分享我在城市浪人的經歷，如何找到並塑造...',
    url: 'https://medium.com/@evechentalk/%E5%9C%A8%E5%9F%8E%E5%B8%82%E6%B5%AA%E4%BA%BA%E9%95%B7%E5%87%BA%E6%88%91%E7%9A%84%E5%BD%B1%E9%9F%BF%E5%8A%9B%E9%85%8D%E6%96%B9-efcd65f47b48'
  },
  {
    image: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1587&auto=format&fit=crop',
    category: '思維轉換',
    title: '自我成長是很多無用技能的綜合體',
    excerpt: '許多看似與目標無關的學習和體驗，卻在無形中滋養著我們。探索那些「無用」技能如何成為你獨特的資產。',
    url: 'https://medium.com/@evechentalk/%E8%87%AA%E6%88%91%E6%88%90%E9%95%B7%E6%98%AF%E5%BE%88%E5%A4%9A%E7%84%¡E7%94%A8%E6%8A%80%E8%83%BD%E7%9A%84%E7%B6%9C%E5%90%88%E9%AB%94-d8675886359c'
  }
];