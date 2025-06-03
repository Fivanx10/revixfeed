import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Activity, Award, Beaker, ChevronRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import { articles } from '../data/articles';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Высококачественные премиксы для здоровья и продуктивности животных',
      subtitle: 'Инновационные решения для современного животноводства',
      image: 'https://img.freepik.com/free-photo/cows-eating-fresh-green-lettuce-sunny-summer-day-village_384344-5451.jpg',
      cta: '/products',
      ctaText: 'Перейти к продукции',
    },
    {
      title: 'Научный подход к разработке кормовых добавок',
      subtitle: 'Исследования и инновации для максимальной эффективности',
      image: 'https://img.freepik.com/premium-photo/female-chemist-put-dried-cannabis-glass-tube-experiment_151013-38967.jpg',
      cta: '/science',
      ctaText: 'Узнать больше',
    },
    {
      title: 'Надежный партнер для вашего бизнеса',
      subtitle: 'Гарантия качества, индивидуальный подход и своевременная поставка',
      image: 'https://img.freepik.com/premium-photo/quality-assurance-business-services-businessman-hand-shows-sign-top-service-quality-assurance-black-background-guarantee-standards-iso-certification-standardization-concept_162459-3099.jpg',
      cta: '/partners',
      ctaText: 'Стать партнером',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const featuredProducts = products.slice(0, 3);
  const featuredArticles = articles.slice(0, 2);

  return (
    <>
      {/* Hero section */}
      <section className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="container flex flex-col justify-center h-full text-white px-4">
              <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-slide-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-slide-up">
                  {slide.subtitle}
                </p>
                <div className="animate-slide-up">
                  <Button to={slide.cta} variant="primary" size="lg">
                    {slide.ctaText}
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <SectionTitle 
            title="Почему клиенты выбирают Ревикс Корма"
            subtitle="Мы предлагаем премиксы высочайшего качества для максимальной эффективности вашего хозяйства"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-50 text-primary-600 rounded-lg mb-4">
                <Beaker size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Инновационные формулы</h3>
              <p className="text-gray-600">
                Наши премиксы разработаны с использованием последних научных достижений в области кормления животных
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-secondary-50 text-secondary-600 rounded-lg mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Гарантия качества</h3>
              <p className="text-gray-600">
                Строгий контроль на всех этапах производства и соответствие международным стандартам качества
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-accent-50 text-accent-600 rounded-lg mb-4">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Доказанная эффективность</h3>
              <p className="text-gray-600">
                Наши продукты проходят тщательные испытания и демонстрируют высокую рентабельность инвестиций
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-50 text-primary-600 rounded-lg mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Индивидуальный подход</h3>
              <p className="text-gray-600">
                Разрабатываем и адаптируем рецептуры премиксов под потребности конкретного хозяйства
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Наша продукция"
            subtitle="Премиксы для различных видов сельскохозяйственных животных"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="flex flex-col h-full"
                to={`/products/${product.id}`}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800 mb-2">
                      {product.category === 'cattle' && 'КРС'}
                      {product.category === 'pigs' && 'Свиньи'}
                      {product.category === 'poultry' && 'Птица'}
                      {product.category === 'fish' && 'Рыба'}
                    </span>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                  <div className="mt-auto flex items-center text-primary-600 font-medium">
                    <span>Подробнее</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/products" variant="outline" size="lg">
              Все продукты
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Нужна консультация специалиста?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Наши эксперты помогут подобрать оптимальную программу кормления для вашего хозяйства
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="accent" size="lg">
                Получить консультацию
              </Button>
              <Button to="/calculator" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Перейти к калькулятору
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <SectionTitle 
            title="Научные статьи и исследования"
            subtitle="Узнайте больше о влиянии премиксов на здоровье и продуктивность животных"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {featuredArticles.map((article) => (
              <Card 
                key={article.id} 
                className="flex flex-col h-full"
                to={`/science/${article.id}`}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary-100 text-secondary-800 mb-2">
                      {article.category === 'research' && 'Исследование'}
                      {article.category === 'application' && 'Практика'}
                      {article.category === 'technology' && 'Технологии'}
                    </span>
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-4 mb-4">
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                  </div>
                  <div className="mt-auto flex items-center text-primary-600 font-medium">
                    <span>Читать статью</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/science" variant="outline" size="lg">
              Все статьи
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Станьте нашим партнером
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Мы предлагаем выгодные условия сотрудничества для дистрибьюторов и оптовых покупателей. Присоединяйтесь к сети партнеров Ревикс Корма и развивайте свой бизнес с нами.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <div className="w-5 h-5 rounded-full bg-secondary-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Гибкие условия оплаты и доставки</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <div className="w-5 h-5 rounded-full bg-secondary-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Маркетинговая и техническая поддержка</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <div className="w-5 h-5 rounded-full bg-secondary-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Обучение персонала и консультации экспертов</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <div className="w-5 h-5 rounded-full bg-secondary-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Специальные цены для оптовых заказов</span>
                </li>
              </ul>
              <Button to="/partners" variant="primary" size="lg">
                Подробнее о сотрудничестве
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://img.freepik.com/free-psd/3d-collection-with-hands-shaking-agreement_23-2148938850.jpg" 
                alt="Партнерство" 
                className="rounded-lg shadow-lg max-h-[400px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;