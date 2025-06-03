import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-heading font-bold text-white tracking-tight">РЕВИКС</span>
              <span className="ml-1 text-2xl font-heading text-secondary-400">КОРМА</span>
            </Link>
            <p className="mb-4">Производство высококачественных премиксов для сельскохозяйственных животных.</p>
            <div className="flex space-x-4">
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Разделы сайта</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition duration-300">Главная</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition duration-300">О компании</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition duration-300">Продукция</Link>
              </li>
              <li>
                <Link to="/science" className="hover:text-white transition duration-300">Наука и технологии</Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition duration-300">Партнерам</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition duration-300">Контакты</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Продукция</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?type=cattle" className="hover:text-white transition duration-300">Премиксы для КРС</Link>
              </li>
              <li>
                <Link to="/products?type=pigs" className="hover:text-white transition duration-300">Премиксы для свиней</Link>
              </li>
              <li>
                <Link to="/products?type=poultry" className="hover:text-white transition duration-300">Премиксы для птицы</Link>
              </li>
              <li>
                <Link to="/products?type=fish" className="hover:text-white transition duration-300">Премиксы для рыбы</Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-white transition duration-300">Калькулятор дозировки</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>г. Новосибирск, ул. Варшавская, д. 11, офис 23</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+79134843988" className="hover:text-white transition duration-300">8 (913) 484-39-88</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:ivanmakarov4601@gmail.com" className="hover:text-white transition duration-300">ivanmakarov4601@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {currentYear} Ревикс Корма. Все права защищены.</p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm hover:text-white transition duration-300 mr-4">Политика конфиденциальности</Link>
              <Link to="/terms" className="text-sm hover:text-white transition duration-300">Условия использования</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;