import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Experience', href: '/experience' },
    { name: 'Find me', href: '/contact' },
  ];

  return (
    <header className="bg-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Browser-style tabs */}
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
          
          <nav className="ml-8 flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-black font-mono text-sm hover:underline transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;