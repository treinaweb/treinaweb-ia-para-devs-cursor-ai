import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `relative font-medium transition ${
      isActive 
        ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600' 
        : 'text-gray-700 hover:text-blue-600'
    }`;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cursor AI
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClasses('/')}>
              Home
            </Link>
            <Link to="/sobre" className={getLinkClasses('/sobre')}>
              Sobre
            </Link>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
            Começar Agora
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

