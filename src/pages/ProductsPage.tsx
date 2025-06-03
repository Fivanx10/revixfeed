import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { products, Product } from '../data/products';

type Category = 'all' | 'cattle' | 'pigs' | 'poultry' | 'fish';
type Purpose = 'all' | 'growth' | 'reproduction' | 'immunity';
type Form = 'all' | 'powder' | 'granules' | 'liquid';

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedPurpose, setSelectedPurpose] = useState<Purpose>('all');
  const [selectedForm, setSelectedForm] = useState<Form>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      // Purpose filter
      const matchesPurpose =
        selectedPurpose === 'all' || product.purpose === selectedPurpose;

      // Form filter
      const matchesForm = selectedForm === 'all' || product.form === selectedForm;

      return matchesSearch && matchesCategory && matchesPurpose && matchesForm;
    });
  }, [searchQuery, selectedCategory, selectedPurpose, selectedForm]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedPurpose('all');
    setSelectedForm('all');
    setSearchQuery('');
  };

  return (
    <>
      {/* Banner */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Продукция</h1>
            <p className="text-xl mb-6">
              Премиксы и кормовые добавки для различных видов сельскохозяйственных
              животных, разработанные с учетом их потребностей и направленные на
              повышение продуктивности и сохранение здоровья.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="sticky top-[72px] z-20 bg-white shadow-md py-4 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Поиск продукции..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <Search
                size={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-300"
              >
                <Filter size={18} />
                <span>Фильтры</span>
              </button>
              
              {(selectedCategory !== 'all' || selectedPurpose !== 'all' || selectedForm !== 'all') && (
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 text-primary-600 hover:text-primary-800 transition duration-300"
                >
                  Сбросить
                </button>
              )}
            </div>
          </div>
          
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium mb-2">Вид животных</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Все</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedCategory === 'cattle'}
                      onChange={() => setSelectedCategory('cattle')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">КРС</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedCategory === 'pigs'}
                      onChange={() => setSelectedCategory('pigs')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Свиньи</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedCategory === 'poultry'}
                      onChange={() => setSelectedCategory('poultry')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Птица</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedCategory === 'fish'}
                      onChange={() => setSelectedCategory('fish')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Рыба</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Назначение</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedPurpose === 'all'}
                      onChange={() => setSelectedPurpose('all')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Все</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedPurpose === 'growth'}
                      onChange={() => setSelectedPurpose('growth')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Рост и развитие</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedPurpose === 'reproduction'}
                      onChange={() => setSelectedPurpose('reproduction')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Репродуктивная функция</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedPurpose === 'immunity'}
                      onChange={() => setSelectedPurpose('immunity')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Иммунитет</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Форма выпуска</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedForm === 'all'}
                      onChange={() => setSelectedForm('all')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Все</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedForm === 'powder'}
                      onChange={() => setSelectedForm('powder')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Порошок</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedForm === 'granules'}
                      onChange={() => setSelectedForm('granules')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Гранулы</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedForm === 'liquid'}
                      onChange={() => setSelectedForm('liquid')}
                      className="form-radio text-primary-600"
                    />
                    <span className="ml-2">Жидкость</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl mb-4">По вашему запросу ничего не найдено</p>
              <Button onClick={resetFilters} variant="primary">
                Сбросить фильтры
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-lg">
                  Найдено продуктов: <span className="font-semibold">{filteredProducts.length}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
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
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                          {product.category === 'cattle' && 'КРС'}
                          {product.category === 'pigs' && 'Свиньи'}
                          {product.category === 'poultry' && 'Птица'}
                          {product.category === 'fish' && 'Рыба'}
                        </span>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary-100 text-secondary-800">
                          {product.purpose === 'growth' && 'Рост'}
                          {product.purpose === 'reproduction' && 'Репродукция'}
                          {product.purpose === 'immunity' && 'Иммунитет'}
                        </span>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                          {product.form === 'powder' && 'Порошок'}
                          {product.form === 'granules' && 'Гранулы'}
                          {product.form === 'liquid' && 'Жидкость'}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                      <div className="mt-auto">
                        <Button to={`/products/${product.id}`} variant="outline" fullWidth>
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Не уверены, какой премикс выбрать?
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Воспользуйтесь нашим онлайн-калькулятором для расчета оптимальной
                дозировки премикса в зависимости от вида и возраста животных, а
                также состава вашего основного рациона.
              </p>
              <div className="flex items-start space-y-2 flex-col md:flex-row md:space-y-0 md:space-x-6">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mt-1 mr-2" size={20} />
                  <p>Простой в использовании</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mt-1 mr-2" size={20} />
                  <p>Точные расчеты</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mt-1 mr-2" size={20} />
                  <p>Экономичное решение</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 text-center">
              <Button to="/calculator" variant="primary" size="lg">
                Перейти к калькулятору
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold">Нужна консультация?</h2>
              <p className="text-lg opacity-90 mt-2">
                Наши специалисты помогут подобрать оптимальный продукт для вашего хозяйства
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

export default ProductsPage;