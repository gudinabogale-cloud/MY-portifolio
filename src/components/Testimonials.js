import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      /*id: 1,
      name: 'John Doe',
      company: 'Tech Startup Inc.',
      role: 'CEO',
      content: 'Working with this developer was a game-changer for our project. Excellent communication and quality work!',
      rating: 5,
      image: 'JD'
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'Creative Agency Co.',
      role: 'Project Manager',
      content: 'Delivered the website on time and exceeded our expectations. Highly recommended!',
      rating: 5,
      image: 'JS'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      company: 'E-commerce Solutions',
      role: 'Director',
      content: 'Professional, reliable, and super knowledgeable. A pleasure to work with.',
      rating: 5,
      image: 'MJ'*/
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">{testimonial.image}</div>
                <div className="client-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              {renderStars(testimonial.rating)}
              <p className="testimonial-content">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
