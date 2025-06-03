import React, { useState } from 'react';
import { Calculator, HelpCircle, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

interface FormState {
  animalType: string;
  animalCount: number;
  animalWeight: number;
  purpose: string;
}

interface ResultState {
  recommendedProduct: string;
  dailyDosage: number;
  monthlyAmount: number;
  recommendedPackaging: string;
}

const CalculatorPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    animalType: 'cattle',
    animalCount: 100,
    animalWeight: 500,
    purpose: 'growth',
  });

  const [isCalculated, setIsCalculated] = useState(false);
  const [result, setResult] = useState<ResultState | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'animalCount' || name === 'animalWeight') {
      setFormState(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
    
    // Reset calculation when form changes
    if (isCalculated) {
      setIsCalculated(false);
    }
  };

  const calculateResult = (): ResultState => {
    // This is a simplified calculation for demonstration purposes
    // In a real application, this would likely be more complex
    
    // Determine recommended product based on animal type and purpose
    let recommendedProduct = '';
    
    if (formState.animalType === 'cattle') {
      if (formState.purpose === 'growth') {
        recommendedProduct = 'Премиум-КРС Рост';
      } else if (formState.purpose === 'reproduction') {
        recommendedProduct = 'Премиум-КРС Репродуктив';
      } else {
        recommendedProduct = 'Премиум-КРС Иммунитет';
      }
    } else if (formState.animalType === 'pigs') {
      recommendedProduct = 'Премиум-Свиньи Рост';
    } else if (formState.animalType === 'poultry') {
      recommendedProduct = 'Премиум-Птица Иммунитет';
    } else {
      recommendedProduct = 'Премиум-Рыба Рост';
    }
    
    // Calculate daily dosage per animal based on weight and type
    let baseDosage = 0;
    
    if (formState.animalType === 'cattle') {
      baseDosage = 0.1; // 0.1 kg per 1000 kg of body weight
    } else if (formState.animalType === 'pigs') {
      baseDosage = 0.2;
    } else if (formState.animalType === 'poultry') {
      baseDosage = 0.005;
    } else {
      baseDosage = 0.03;
    }
    
    // Calculate daily dosage
    const dailyDosagePer = (baseDosage * formState.animalWeight) / 1000; // kg per animal
    const dailyDosage = dailyDosagePer * formState.animalCount; // kg total
    
    // Calculate monthly amount
    const monthlyAmount = dailyDosage * 30; // kg for 30 days
    
    // Determine recommended packaging
    let recommendedPackaging = '';
    
    if (monthlyAmount <= 25) {
      recommendedPackaging = '25 кг';
    } else if (monthlyAmount <= 50) {
      recommendedPackaging = '50 кг';
    } else {
      recommendedPackaging = '50 кг x ' + Math.ceil(monthlyAmount / 50);
    }
    
    return {
      recommendedProduct,
      dailyDosage,
      monthlyAmount,
      recommendedPackaging,
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const calculationResult = calculateResult();
    setResult(calculationResult);
    setIsCalculated(true);
  };

  return (
    <>
      {/* Banner */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Калькулятор дозировки</h1>
            <p className="text-xl">
              Расчет оптимальной дозировки премикса в зависимости от вида и количества животных,
              а также целей применения.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Instructions */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Calculator size={24} className="mr-2 text-primary-600" />
                  Как пользоваться калькулятором
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1. Выберите вид животных</h3>
                    <p className="text-gray-600">
                      Укажите, для каких животных вы планируете использовать премикс: КРС, свиньи, птица или рыба.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">2. Введите количество</h3>
                    <p className="text-gray-600">
                      Укажите общее количество животных в вашем хозяйстве, для которых требуется премикс.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3. Укажите вес</h3>
                    <p className="text-gray-600">
                      Введите средний вес одного животного в килограммах.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4. Выберите цель применения</h3>
                    <p className="text-gray-600">
                      Укажите, для каких целей вы планируете использовать премикс: рост и развитие, 
                      репродуктивная функция или укрепление иммунитета.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-start">
                    <HelpCircle size={20} className="text-primary-600 mt-1 mr-2" />
                    <p className="text-sm text-gray-600">
                      Результаты расчета носят рекомендательный характер. Для получения более точных рекомендаций, 
                      пожалуйста, проконсультируйтесь с нашими специалистами.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Введите данные</h2>
                
                <form onSubmit={handleCalculate}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Вид животных
                      </label>
                      <select
                        name="animalType"
                        value={formState.animalType}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="cattle">КРС</option>
                        <option value="pigs">Свиньи</option>
                        <option value="poultry">Птица</option>
                        <option value="fish">Рыба</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Количество животных
                      </label>
                      <input
                        type="number"
                        name="animalCount"
                        value={formState.animalCount}
                        onChange={handleChange}
                        min="1"
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Средний вес одного животного (кг)
                      </label>
                      <input
                        type="number"
                        name="animalWeight"
                        value={formState.animalWeight}
                        onChange={handleChange}
                        min="0.1"
                        step="0.1"
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Цель применения
                      </label>
                      <select
                        name="purpose"
                        value={formState.purpose}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="growth">Рост и развитие</option>
                        <option value="reproduction">Репродуктивная функция</option>
                        <option value="immunity">Укрепление иммунитета</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                  >
                    Рассчитать
                  </Button>
                </form>
                
                {/* Results */}
                {isCalculated && result && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-4">Результаты расчета</h3>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-gray-600">Рекомендуемый продукт</p>
                          <p className="text-lg font-semibold">{result.recommendedProduct}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600">Суточная дозировка</p>
                          <p className="text-lg font-semibold">{result.dailyDosage.toFixed(2)} кг/день</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600">Месячная потребность</p>
                          <p className="text-lg font-semibold">{result.monthlyAmount.toFixed(2)} кг/месяц</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600">Рекомендуемая фасовка</p>
                          <p className="text-lg font-semibold">{result.recommendedPackaging}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-4">
                          Для получения коммерческого предложения или более детальной консультации по 
                          применению премикса, свяжитесь с нашими специалистами.
                        </p>
                        
                        <Button
                          to="/contact"
                          variant="primary"
                        >
                          Получить консультацию
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Часто задаваемые вопросы"
            subtitle="Ответы на наиболее распространенные вопросы о дозировке и применении премиксов"
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Как часто нужно давать премикс?</h3>
                <p className="text-gray-600">
                  Премиксы обычно добавляются в корм ежедневно. Рекомендуется равномерно распределять 
                  суточную дозу между кормлениями для достижения максимального эффекта.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Можно ли смешивать разные виды премиксов?</h3>
                <p className="text-gray-600">
                  Не рекомендуется смешивать разные виды премиксов без консультации со специалистом, 
                  так как это может привести к избытку определенных компонентов или их нежелательному 
                  взаимодействию.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Как долго хранится премикс после вскрытия упаковки?</h3>
                <p className="text-gray-600">
                  После вскрытия упаковки срок хранения премикса составляет до 3-х месяцев при соблюдении 
                  условий хранения: сухое, прохладное место, защищенное от прямых солнечных лучей.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Требуется ли адаптационный период при переходе на новый премикс?</h3>
                <p className="text-gray-600">
                  Да, при смене премикса рекомендуется переходный период 7-10 дней, в течение которого 
                  дозировка нового премикса постепенно увеличивается, а старого уменьшается.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold">Нужна индивидуальная консультация?</h2>
              <p className="text-lg opacity-90 mt-2">
                Наши специалисты помогут составить оптимальную программу кормления для вашего хозяйства
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

export default CalculatorPage;