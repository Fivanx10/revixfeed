import React from 'react';
import { CheckCircle, ArrowRight, Briefcase, Truck, MessageSquare, PiggyBank } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const PartnersPage: React.FC = () => {
  return (
    <>
      {/* Banner */}
      <section className="bg-accent-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Партнерам и дистрибьюторам</h1>
            <p className="text-xl mb-8">
              Выгодные условия сотрудничества для дистрибьюторов и оптовых покупателей.
              Станьте частью нашей команды и развивайте свой бизнес вместе с нами.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Стать партнером
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <SectionTitle
            title="Преимущества сотрудничества"
            subtitle="Мы предлагаем нашим партнерам комплексную поддержку и выгодные условия"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center bg-accent-100 text-accent-600 rounded-lg mb-4">
                <PiggyBank size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Выгодные финансовые условия</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Гибкая система скидок в зависимости от объема закупок</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Специальные цены для постоянных партнеров</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Возможность отсрочки платежа</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Бонусная программа за достижение плановых показателей</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center bg-accent-100 text-accent-600 rounded-lg mb-4">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Логистическая поддержка</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Доставка продукции до терминала транспортной компании</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Специальные условия доставки для крупных заказов</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Помощь в организации международных поставок</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Возможность формирования сборных грузов</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center bg-accent-100 text-accent-600 rounded-lg mb-4">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Техническая поддержка</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Консультации специалистов по вопросам применения продукции</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Обучение персонала партнеров</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Предоставление информационных материалов</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Совместные выезды к клиентам</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center bg-accent-100 text-accent-600 rounded-lg mb-4">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Маркетинговая поддержка</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Предоставление маркетинговых материалов</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Совместное участие в выставках и отраслевых мероприятиях</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Размещение информации о партнере на официальном сайте</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                  <span>Помощь в организации региональных мероприятий</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-2">
              <h3 className="text-xl font-semibold mb-3">Эксклюзивное сотрудничество</h3>
              <p className="text-gray-600 mb-4">
                Для партнеров, готовых к долгосрочному стратегическому сотрудничеству, 
                мы предлагаем возможность получения эксклюзивных прав на реализацию продукции 
                в определенном регионе.
              </p>
              <p className="text-gray-600 mb-4">
                Такое сотрудничество включает расширенный пакет поддержки:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                    <span>Индивидуальный план развития территории</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                    <span>Защита коммерческих интересов партнера</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                    <span>Расширенные финансовые условия</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-accent-600 mt-1 mr-2" size={18} />
                    <span>Приоритетность в поставках и технической поддержке</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation Steps */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Как стать нашим партнером"
            subtitle="Простая процедура начала сотрудничества"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 pt-2">Заявка</h3>
                <p className="text-gray-600">
                  Оставьте заявку на сайте или свяжитесь с нами по телефону.
                  Укажите информацию о вашей компании и интересующих вас продуктах.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 pt-2">Переговоры</h3>
                <p className="text-gray-600">
                  Наш менеджер свяжется с вами для обсуждения условий сотрудничества 
                  и подготовит коммерческое предложение с учетом ваших потребностей.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 pt-2">Заключение договора</h3>
                <p className="text-gray-600">
                  После согласования всех условий мы подписываем договор поставки 
                  и предоставляем доступ к партнерским материалам.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3 pt-2">Начало работы</h3>
                <p className="text-gray-600">
                  Вы получаете первую поставку продукции, а также 
                  полный комплект информационных и маркетинговых материалов.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button to="/contact" variant="accent" size="lg">
              Оставить заявку на сотрудничество
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Требования к партнерам
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Мы заинтересованы в долгосрочном сотрудничестве с надежными партнерами, 
                которые разделяют наши ценности и стремятся к развитию. Для успешного 
                сотрудничества мы предъявляем следующие требования:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-3" size={20} />
                  <span className="text-gray-600">Юридически оформленная компания с опытом работы на рынке от 1 года</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-3" size={20} />
                  <span className="text-gray-600">Наличие собственного складского помещения, соответствующего условиям хранения продукции</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-3" size={20} />
                  <span className="text-gray-600">Наличие квалифицированного персонала для продвижения продукции</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-3" size={20} />
                  <span className="text-gray-600">Готовность к минимальному объему закупок</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent-600 mt-1 mr-3" size={20} />
                  <span className="text-gray-600">Четкое соблюдение финансовой дисциплины</span>
                </li>
              </ul>
              <p className="text-gray-600 italic">
                * Для каждого региона могут быть установлены индивидуальные условия сотрудничества
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://i.kayseriolay.com/c/60/1280x720/s/dosya/haber/isverenler-icin-yeni-bir-tesvi_1683551194_nVraRg.jpg" 
                alt="Деловое партнерство" 
                className="rounded-lg shadow-lg max-h-[400px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Отзывы наших партнеров"
            subtitle="Что говорят о сотрудничестве с нами"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://talentsbyaction.ru/storage/2023/12/29/Am0613xhkbSGekpfBLqoxULWjMZ6HtNskjHslPJP.jpg" 
                  alt="Иван Петров" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Иван Петров</h4>
                  <p className="text-sm text-gray-600">Генеральный директор, ООО "Агро-Союз"</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Сотрудничаем с компанией Ревикс Корма уже более 5 лет. За это время убедились в высоком качестве продукции и 
                профессионализме команды. Особенно ценим оперативность поставок и техническую поддержку."
              </p>
              <div className="flex text-accent-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://raexpert.ru/database/person/gladkih_elena_vladimirovna.jpg" 
                  alt="Елена Смирнова" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Елена Смирнова</h4>
                  <p className="text-sm text-gray-600">Коммерческий директор, ЗАО "Заря"</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Премиксы компании Ревикс Корма пользуются высоким спросом у наших клиентов благодаря стабильному качеству и видимому 
                эффекту. Отдельно хочу отметить маркетинговую поддержку и помощь в проведении семинаров для фермеров."
              </p>
              <div className="flex text-accent-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://sun1-56.userapi.com/s/v1/ig2/xfLiF0IxZeigpuJdCdEEIclFHQYFxG5H94smMpmI55bJINFCx44i8WMVFxiNYWW3Ef-i1sRy3ZIKFxMOCIQ0LApq.jpg?size=400x400&quality=95&crop=334,50,501,501&ava=1" 
                  alt="Алексей Никитин" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Алексей Никитин</h4>
                  <p className="text-sm text-gray-600">Руководитель отдела закупок, ООО "Агрокомплекс"</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Мы начали сотрудничество с Ревикс Корма около 2 лет назад. За это время объемы закупок выросли в 3 раза благодаря 
                высокому качеству продукции и гибкой системе скидок. Ценим прозрачные условия сотрудничества."
              </p>
              <div className="flex text-accent-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-accent-600 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold">Готовы стать нашим партнером?</h2>
              <p className="text-lg opacity-90 mt-2">
                Оставьте заявку, и мы свяжемся с вами для обсуждения деталей сотрудничества
              </p>
            </div>
            <Button to="/contact" variant="primary" size="lg">
              Стать партнером
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;