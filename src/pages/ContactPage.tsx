import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, User, Briefcase } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: 'consultation',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error when field is changed
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Пожалуйста, укажите ваше имя';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Пожалуйста, укажите ваш email';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Пожалуйста, укажите корректный email';
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = 'Пожалуйста, укажите ваш телефон';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Пожалуйста, напишите сообщение';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormState({
        name: '',
        company: '',
        email: '',
        phone: '',
        topic: 'consultation',
        message: '',
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Banner */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h1>
            <p className="text-xl">
              Наши специалисты готовы ответить на любые вопросы о продукции и помочь 
              подобрать оптимальное решение для вашего хозяйства.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info and form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm h-full">
                <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 mr-4 bg-primary-100 text-primary-600 rounded-full">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-gray-600">г. Новосибирск, ул. Варшавская, д. 11, офис 23</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 mr-4 bg-primary-100 text-primary-600 rounded-full">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-gray-600">
                        <a href="tel:+79134843988" className="hover:text-primary-600 transition duration-300">
                          8 (913) 484-39-88
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 mr-4 bg-primary-100 text-primary-600 rounded-full">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:ivanmakarov4601@gmail.com" className="hover:text-primary-600 transition duration-300">
                          ivanmakarov4601@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold mb-4">Режим работы</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Пн-Пт:</p>
                      <p className="text-gray-600">09:00 - 18:00</p>
                    </div>
                    <div>
                      <p className="font-medium">Сб-Вс:</p>
                      <p className="text-gray-600">Выходной</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-lg mb-2">Спасибо за обращение!</h3>
                    <p>Ваше сообщение успешно отправлено. Наши специалисты свяжутся с вами в ближайшее время.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Ваше имя <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className={`form-input pl-10 ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                            placeholder="Иван Иванов"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Компания
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Briefcase size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            className="form-input pl-10"
                            placeholder="ООО Агрофирма"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className={`form-input pl-10 ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                            placeholder="example@example.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Телефон <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Phone size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className={`form-input pl-10 ${errors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                            placeholder="+7 (___) ___-__-__"
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Тема обращения
                      </label>
                      <select
                        name="topic"
                        value={formState.topic}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="consultation">Консультация по продукции</option>
                        <option value="order">Заказ продукции</option>
                        <option value="partnership">Сотрудничество</option>
                        <option value="technical">Техническая поддержка</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Сообщение <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageSquare size={18} className="text-gray-400" />
                        </div>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          className={`form-input pl-10 min-h-[150px] ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                          placeholder="Опишите ваш вопрос или запрос..."
                        ></textarea>
                      </div>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                        Я согласен на обработку персональных данных в соответствии с{' '}
                        <a href="/privacy" className="text-primary-600 hover:underline">
                          политикой конфиденциальности
                        </a>
                      </label>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;