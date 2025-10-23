const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cursor AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">
              Funcionalidades
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition">
              Vantagens
            </a>
            <a href="#why-use" className="text-gray-700 hover:text-blue-600 transition">
              Por que usar
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">
              Preços
            </a>
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

