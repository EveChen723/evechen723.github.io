import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: '關於我' },
    { href: '#workshop', label: '最新工作坊' },
    { href: '#process', label: '預約流程' },
    { href: '#life-lookout-point', label: 'Life Lookout Point' },
    { href: '#testimonials', label: '參與者回饋' },
    { href: '#encouragement', label: '給你的話' },
    { href: '#articles', label: '精選文章' },
    { href: 'https://foil-bamboo-2d4.notion.site/246c3a20360d80608330e832e989bb3b?pvs=105', label: '立即預約' },
  ];

  return (
    <header className="bg-stone-50/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-teal-700 tracking-wider">
          Eve's Lab
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith('http');
            return (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-stone-600 hover:text-teal-600 transition-colors duration-300"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-stone-100">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('http');
              return (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-stone-600 hover:text-teal-600 transition-colors duration-300" 
                  onClick={() => setIsOpen(false)}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;