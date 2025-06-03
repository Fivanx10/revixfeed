import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, FlaskRound as Flask } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `block px-3 py-2 transition duration-300 text-base font-medium ${
      isActive 
        ? 'text-primary-600 font-semibold' 
        : 'text-gray-700 hover:text-primary-600'
    }`;

  return (
    <header className={`sticky top-0 z-50 w-full transition duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur'
    }`}>
      <div className="container">
        <div className="hidden py-2 md:flex items-center justify-between text-sm border-b border-gray-100">
          <div className="flex items-center gap-6">
            <a href="mailto:ivanmakarov4601@gmail.com" className="flex items-center gap-1 text-gray-600 hover:text-primary-600">
              <Mail size={16} />
              <span>ivanmakarov4601@gmail.com</span>
            </a>
            <a href="tel:+79134843988" className="flex items-center gap-1 text-gray-600 hover:text-primary-600">
              <Phone size={16} />
              <span>8 (913) 484-39-88</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/calculator" className="flex items-center gap-1 text-primary-600 hover:text-primary-700">
              <Flask size={16} />
              <span>Калькулятор дозировки</span>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="flex items-center">
              <div className="bg-primary-600 text-white p-1 rounded mr-2">
                <Flask size={24} />
              </div>
              <div>
                <span className="text-xl font-heading font-bold tracking-tight">РЕВИКС</span>
                <span className="ml-1 text-xl font-heading text-secondary-600">КОРМА</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              <li>
                <NavLink to="/" className={navLinkClasses} end>Главная</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClasses}>О компании</NavLink>
              </li>
              <li>
                <NavLink to="/products" className={navLinkClasses}>Продукция</NavLink>
              </li>
              <li>
                <NavLink to="/science" className={navLinkClasses}>Наука</NavLink>
              </li>
              <li>
                <NavLink to="/partners" className={navLinkClasses}>Партнерам</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClasses}>Контакты</NavLink>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Получить консультацию
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-primary-600 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <nav className="container pb-5 bg-white border-t border-gray-100">
          <ul className="space-y-1 pt-2">
            <li>
              <NavLink to="/" className={navLinkClasses} onClick={closeMenu} end>Главная</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClasses} onClick={closeMenu}>О компании</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={navLinkClasses} onClick={closeMenu}>Продукция</NavLink>
            </li>
            <li>
              <NavLink to="/science" className={navLinkClasses} onClick={closeMenu}>Наука</NavLink>
            </li>
            <li>
              <NavLink to="/partners" className={navLinkClasses} onClick={closeMenu}>Партнерам</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClasses} onClick={closeMenu}>Контакты</NavLink>
            </li>
            <li>
              <NavLink to="/calculator" className={navLinkClasses} onClick={closeMenu}>Калькулятор дозировки</NavLink>
            </li>
            <li className="pt-3">
              <Link to="/contact" className="btn-primary w-full text-center" onClick={closeMenu}>
                Получить консультацию
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;