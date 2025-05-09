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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Notification is mandatory';
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
        I created this project together with ChatGPT - step by step, with questions, doubts, mistakes, and victories. It's not just a technical job - it's a joint journey into the world of development, and that's very important to me.
      </p>
      <p>
        Frontend became the door to the IT world for me. It made me feel like I was creating something real. This project is just the beginning of my journey.
      </p>
      <p>
        My goal is to work on and with artificial intelligence. I don't know all the answers and I don't know what the path will be, but I know where I want to go.
      </p>

      <h2 className={`appear ${isVisible ? 'visible' : ''}`}>About the application</h2>
      <p>
        The app allows you to search for wallpapers using the Unsplash API, view and save your favourites, and switch between dark and light themes.
      </p>

      <h2 className={`appear ${isVisible ? 'visible' : ''}`}>Technology:</h2>
      <ul>
        <li>React</li>
        <li>Unsplash API</li>
        <li>CSS Modules</li>
        <li>React Router</li>
      </ul>
      <h2 className={`appear ${isVisible ? 'visible' : ''}`}>Feedback</h2>
      {submitted ? (
        <p>Thank you for the message!</p>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
              Massage:
              <textarea name="message" value={formData.message} onChange={handleChange} />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default About;

