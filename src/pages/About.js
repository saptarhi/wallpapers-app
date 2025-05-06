import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
}, []);
  
const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
};
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Імʼя обовʼязкове';
    if (!formData.email.trim()) {
      newErrors.email = 'Email обовʼязковий';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Невірний формат email';
    }
    if (!formData.message.trim()) newErrors.message = 'Повідомлення обовʼязкове';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      // Тут можна реалізувати відправку на бекенд або API
      console.log('Submitted:', formData);
    }
  };


  return (
    <div className="about-container">
      <h1 className={`appear ${isVisible ? 'visible' : ''}`}>About Us</h1>
      <p>
        Цей проєкт я створила разом із ChatGPT — крок за кроком, із запитаннями, сумнівами, помилками й перемогами. Це не просто технічна робота — це спільна подорож у світ розробки, і для мене це дуже важливо.
      </p>
      <p>
        Фронтенд став для мене дверима у світ IT. Завдяки йому я змогла відчути, що створюю щось реальне. Цей проєкт — це лише початок мого шляху.
      </p>
      <p>
        Моя ціль — працювати над і зі штучним інтелектом. Я не знаю всіх відповідей і не знаю, яким буде шлях, але я знаю, куди хочу йти.
      </p>

      <h2 className={`appear ${isVisible ? 'visible' : ''}`}>Про застосунок</h2>
      <p>
        Застосунок дозволяє шукати шпалери за допомогою Unsplash API, переглядати, зберігати улюблені, перемикатися між темною і світлою темами.
      </p>

      <h2 className={`appear ${isVisible ? 'visible' : ''}`}>Технології:</h2>
      <ul>
        <li>React</li>
        <li>Unsplash API</li>
        <li>CSS Modules</li>
        <li>React Router</li>
      </ul>
      <h2 className={`appear ${isVisible ? 'visible' : ''}`}>Зворотній звʼязок</h2>
      {submitted ? (
        <p>Дякуємо за повідомлення!</p>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label>
            Імʼя:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
              Повідомлення:
              <textarea name="message" value={formData.message} onChange={handleChange} />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
          <button type="submit">Надіслати</button>
        </form>
      )}
    </div>
  );
};

export default About;

