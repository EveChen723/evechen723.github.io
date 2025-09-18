import React from 'react';

const InstagramIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.343 2.525c.636-.247 1.363-.416 2.427-.465C9.792 2.013 10.146 2 11.685 2h.63m-.001-2C9.252 0 8.874.011 7.828.057c-1.135.053-1.921.227-2.613.502A6.903 6.903 0 002.525 2.525c-.275.692-.449 1.478-.502 2.613C2.011 6.126 2 6.504 2 8.685v.63c0 2.181.011 2.559.057 3.605.053 1.135.227 1.921.502 2.613a6.903 6.903 0 002.013 2.613c.692.275 1.478.449 2.613.502 1.046.046 1.424.057 3.605.057h.63c2.181 0 2.559-.011 3.605-.057 1.135-.053 1.921-.227 2.613-.502a6.903 6.903 0 002.613-2.013c.275-.692.449-1.478.502-2.613.046-1.046.057-1.424.057-3.605v-.63c0-2.181-.011-2.559-.057-3.605-.053-1.135-.227-1.921-.502-2.613A6.903 6.903 0 0019.475 2.525c-.692-.275-1.478-.449-2.613-.502C15.814.011 15.436 0 13.254 0h-.63z" clipRule="evenodd" /><path d="M12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.27a3.135 3.135 0 110-6.27 3.135 3.135 0 010 6.27zM16.95 6.05a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" /></svg>
);

const MediumIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.62,17.24V6.76h2.09l1.8,5.43,1.8-5.43h2.09V17.24h-1.6V9.45l-1.8,5.43h-1.2l-1.8-5.43V17.24H5.62Zm12.18,0V11.35c0-2.19-.88-3.18-2.58-3.18-1.7,0-2.55,1-2.55,3.18V17.24h-1.6V6.76h1.6v1.23c.66-.95,1.68-1.5,2.93-1.5,2.1,0,3.8,1.4,3.8,4.2v6.55h-1.6Z" />
    </svg>
);

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/firefly0723?igsh=Z3FoNXFmamJpaG1o&utm_source=qr', icon: InstagramIcon },
    { name: 'Medium', href: 'https://medium.com/@evechentalk', icon: MediumIcon },
  ];

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-teal-600 transition-colors">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Eve's Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;