import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ShoppingCart, Truck, CheckCircle, Award } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { products, Product } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = useMemo(() => {
    return products.find(p => p.id === id);
  }, [id]);
  
  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Продукт не найден</h2>
        <p className="mb-8">Запрашиваемый продукт не существует или был удален.</p>
        <Button to="/products" variant="primary">
          Вернуться к списку продуктов
        </Button>
      </div>
    );
  }
  
  // Get similar products (same category, but different id)
  const similarProducts = useMemo(() => {
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
  }, [product]);

  return (
    <>
      <div className="bg-gray-50 py-4">
        <div className="container">
          <button 
            onClick={() => navigate('/products')}
            className="flex items-center text-gray-600 hover:text-primary-600 transition duration-300"
          >
            <ArrowLeft size={18} className="mr-2" />
            <span>Вернуться к списку продуктов</span>
          </button>
        </div>
      </div>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800">
                  {product.category === 'cattle' && 'КРС'}
                  {product.category === 'pigs' && 'Свиньи'}
                  {product.category === 'poultry' && 'Птица'}
                  {product.category === 'fish' && 'Рыба'}
                </span>
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-secondary-100 text-secondary-800">
                  {product.purpose === 'growth' && 'Рост'}
                  {product.purpose === 'reproduction' && 'Репродукция'}
                  {product.purpose === 'immunity' && 'Иммунитет'}
                </span>
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
                  {product.form === 'powder' && 'Порошок'}
                  {product.form === 'granules' && 'Гранулы'}
                  {product.form === 'liquid' && 'Жидкость'}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <p className="text-lg text-gray-700 mb-6">
                {product.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Рекомендуемая дозировка:</h3>
                <p className="p-4 bg-gray-50 rounded-lg">{product.dosage}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Доступные варианты фасовки:</h3>
                <div className="flex flex-wrap gap-4">
                  {product.packaging.map((pack, index) => (
                    <div 
                      key={index}
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg text-center min-w-[80px] hover:border-primary-600 hover:text-primary-600 cursor-pointer transition duration-300"
                    >
                      {pack}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Запросить цену
                </Button>
                {product.pdfUrl && (
                  <Button
                    href={product.pdfUrl}
                    variant="outline"
                    size="lg"
                    className="flex-1"
                  >
                    <Download size={20} className="mr-2" />
                    Скачать инструкцию
                  </Button>
                )}
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Truck size={24} className="text-primary-600 mr-3" />
                  <span>Доставка по всей России</span>
                </div>
                <div className="flex items-center">
                  <Award size={24} className="text-primary-600 mr-3" />
                  <span>Сертифицированный продукт</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Состав</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="whitespace-pre-line">{product.composition}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Преимущества</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <ul className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {similarProducts.length > 0 && (
        <section className="py-12">
          <div className="container">
            <SectionTitle 
              title="Похожие продукты"
              subtitle="Вам также могут быть интересны"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {similarProducts.map((product) => (
                <div key={product.id} className="card">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                    <Button to={`/products/${product.id}`} variant="outline" fullWidth>
                      Подробнее
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <section className="py-12 bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold">Нужна консультация?</h2>
              <p className="text-lg opacity-90 mt-2">
                Свяжитесь с нами для получения профессиональной консультации по применению продукта
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

export default ProductDetailPage;