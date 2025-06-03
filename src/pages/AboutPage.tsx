import React from 'react';
import { CheckCircle, Factory, Award, Users, Shield, Microscope } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero section */}
      <section className="relative py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании Ревикс Корма</h1>
              <p className="text-xl text-gray-600 mb-8">
                Мы специализируемся на разработке и производстве высококачественных премиксов для сельскохозяйственных животных, основываясь на передовых научных исследованиях и инновационных технологиях.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mt-1 mr-2" size={20} />
                  <p>Более 10 лет на рынке кормовых добавок</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mt-1 mr-2" size={20} />
                  <p>Современное производство, соответствующее международным стандартам</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mt-1 mr-2" size={20} />
                  <p>Команда ученых и практиков с многолетним опытом в животноводстве</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mt-1 mr-2" size={20} />
                  <p>Сотрудничество с ведущими научно-исследовательскими институтами</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute top-0 right-0 w-full h-full rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://avatars.mds.yandex.net/get-altay/5496626/2a0000017ee6dbd8420caec62063847c7278/XXXL"
                  alt="Производство премиксов"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary-600 text-white p-6 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm mt-1">лет опыта на рынке</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our mission */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Наша миссия</h2>
            <p className="text-xl leading-relaxed">
              Обеспечивать животноводов инновационными и эффективными решениями в области кормления, 
              которые способствуют повышению продуктивности, улучшению здоровья животных и рентабельности 
              сельскохозяйственного производства при соблюдении высоких стандартов экологической ответственности.
            </p>
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Производство и контроль качества"
            subtitle="Современные технологии и строгие стандарты на каждом этапе производства"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 mr-4">
                    <Factory className="text-primary-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Современное оборудование</h3>
                    <p className="text-gray-600">
                      Наш завод оснащен современным европейским оборудованием, которое обеспечивает высокую точность дозирования компонентов и однородность смешивания.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 mr-4">
                    <Microscope className="text-primary-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Лабораторный контроль</h3>
                    <p className="text-gray-600">
                      Каждая партия сырья и готовой продукции проходит тщательный контроль в нашей собственной лаборатории, оснащенной новейшим аналитическим оборудованием.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 mr-4">
                    <Shield className="text-primary-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Система качества</h3>
                    <p className="text-gray-600">
                      Производство сертифицировано по международным стандартам ISO 9001 и HACCP, что гарантирует высокое качество и безопасность нашей продукции.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://reveex.ru/upload/iblock/e0f/srpjxihcsaldpcwne1cwb3zlfx9iodp1.jpg"
                  alt="Лаборатория контроля качества"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Гарантия качества</h3>
                  <p className="text-lg">
                    Мы гарантируем стабильное качество премиксов и строгое соответствие заявленному составу.
                  </p>
                  <Button
                    to="/contact"
                    variant="accent"
                    className="mt-4 inline-block"
                  >
                    Запросить сертификаты
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Сертификаты и награды
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Качество нашей продукции подтверждено международными сертификатами и отраслевыми наградами. Мы гордимся признанием наших достижений в области разработки инновационных кормовых решений.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 mr-4">
                    <Award className="text-accent-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">ISO 9001:2015</h3>
                    <p className="text-gray-600">
                      Международный сертификат системы менеджмента качества
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 mr-4">
                    <Award className="text-accent-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">HACCP</h3>
                    <p className="text-gray-600">
                      Система анализа рисков и критических контрольных точек
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 mr-4">
                    <Award className="text-accent-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Золотая медаль выставки "АгроФарм-2024"</h3>
                    <p className="text-gray-600">
                      За инновационную разработку в области кормления животных
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
                <img
                  src="https://i.pinimg.com/736x/3e/55/5d/3e555d13595e2ae7037be6a8473953b7.jpg"
                  alt="Сертификат ISO"
                  className="max-h-[150px]"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
                <img
                  src="https://static.insales-cdn.com/images/articles/1/7368/4947144/chto-takoe-hassp.jpg"
                  alt="Сертификат HACCP"
                  className="max-h-[150px]"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
                <img
                  src="https://kartinkof.club/uploads/posts/2022-03/1648730685_32-kartinkof-club-p-kartinki-smeshnie-premiya-33.png"
                  alt="Награда за достижение"
                  className="max-h-[150px]"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
                <img
                  src="https://unitedwithisrael.org/wp-content/uploads/2014/10/Medal-1024x1020.jpg"
                  alt="Награда за инновации"
                  className="max-h-[150px]"
                />
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
              <h2 className="text-2xl md:text-3xl font-bold">Готовы к сотрудничеству?</h2>
              <p className="text-lg opacity-90 mt-2">
                Свяжитесь с нами, чтобы обсудить ваши потребности
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="accent" size="lg">
                Оставить заявку
              </Button>
              <Button to="/products" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Посмотреть продукцию
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;