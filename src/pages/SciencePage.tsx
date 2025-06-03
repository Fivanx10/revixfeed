import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, BookOpen, FlaskRound as Flask, Microscope } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { articles, Article } from '../data/articles';

const SciencePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredArticles = articles.filter((article) => {
    // Search filter
    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory =
      selectedCategory === 'all' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Banner */}
      <section className="bg-secondary-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наука и исследования</h1>
            <p className="text-xl mb-6">
              Научные статьи, исследования и рекомендации по применению премиксов
              в кормлении сельскохозяйственных животных.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Categories */}
      <section className="sticky top-[72px] z-20 bg-white shadow-md py-4 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
              />
              <Search
                size={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <button
                className={`px-4 py-2 rounded-full transition duration-300 whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-secondary-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                Все статьи
              </button>
              <button
                className={`px-4 py-2 rounded-full transition duration-300 whitespace-nowrap ${
                  selectedCategory === 'research'
                    ? 'bg-secondary-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                onClick={() => setSelectedCategory('research')}
              >
                Исследования
              </button>
              <button
                className={`px-4 py-2 rounded-full transition duration-300 whitespace-nowrap ${
                  selectedCategory === 'application'
                    ? 'bg-secondary-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                onClick={() => setSelectedCategory('application')}
              >
                Практика
              </button>
              <button
                className={`px-4 py-2 rounded-full transition duration-300 whitespace-nowrap ${
                  selectedCategory === 'technology'
                    ? 'bg-secondary-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                onClick={() => setSelectedCategory('technology')}
              >
                Технологии
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl mb-4">По вашему запросу ничего не найдено</p>
              <Button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('all');}} 
                variant="secondary"
              >
                Сбросить фильтры
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-lg">
                  Найдено статей: <span className="font-semibold">{filteredArticles.length}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article) => (
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
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-2 
                          ${article.category === 'research' && 'bg-secondary-100 text-secondary-800'}
                          ${article.category === 'application' && 'bg-primary-100 text-primary-800'}
                          ${article.category === 'technology' && 'bg-accent-100 text-accent-800'}
                        ">
                          {article.category === 'research' && 'Исследование'}
                          {article.category === 'application' && 'Практика'}
                          {article.category === 'technology' && 'Технологии'}
                        </span>
                        <h3 className="text-xl font-semibold">{article.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-auto mb-4">
                        <span>{article.author}</span>
                        <span className="mx-2">•</span>
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center text-secondary-600 font-medium">
                        <span>Читать статью</span>
                        <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      
      {/* Research Approach */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            title="Наш научный подход"
            subtitle="Мы разрабатываем премиксы на основе последних научных исследований и технологий"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Исследования</h3>
              <p className="text-gray-600">
                Наша компания регулярно проводит научные исследования в области кормления сельскохозяйственных животных, 
                изучая влияние различных компонентов на здоровье и продуктивность.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full mb-4">
                <Flask size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Разработка</h3>
              <p className="text-gray-600">
                На основе полученных данных и с использованием передовых технологий мы разрабатываем инновационные формулы 
                премиксов, оптимально сбалансированные по составу.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full mb-4">
                <Microscope size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Контроль</h3>
              <p className="text-gray-600">
                Каждая партия премикса проходит строгий контроль качества в нашей лаборатории, что гарантирует 
                соответствие продукции заявленным характеристикам.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Collaboration */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Сотрудничество с научными организациями
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Мы активно сотрудничаем с ведущими научно-исследовательскими институтами и университетами в области сельского 
                хозяйства. Это позволяет нам быть в курсе последних научных достижений и применять их в разработке наших продуктов.
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
                  <span className="ml-3 text-gray-600">Всероссийский научно-исследовательский институт животноводства</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <div className="w-5 h-5 rounded-full bg-secondary-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Московская государственная академия ветеринарной медицины и биотехнологии</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <div className="w-5 h-5 rounded-full bg-secondary-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Российский государственный аграрный университет</span>
                </li>
              </ul>
              <Button to="/contact" variant="secondary" size="lg">
                Предложить сотрудничество
              </Button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://img.freepik.com/premium-photo/doctor-team-hands-together-with-gloves-healthcare-partnership-trust-collaboration-unity-support-lab-group-medical-experts-piling-hand-teamwork-motivation-safety_590464-158583.jpg" 
                alt="Научное сотрудничество" 
                className="rounded-lg shadow-lg max-h-[400px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-secondary-600 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold">Остались вопросы?</h2>
              <p className="text-lg opacity-90 mt-2">
                Наши эксперты готовы поделиться своими знаниями и опытом
              </p>
            </div>
            <Button to="/contact" variant="accent" size="lg">
              Связаться с экспертом
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SciencePage;