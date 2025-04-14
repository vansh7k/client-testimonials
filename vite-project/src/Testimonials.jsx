import React from 'react';
import './App.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Great service! Highly recommended.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Very professional team.',
      rating: 4
    },
    {
      id: 3,
      name: 'Mike Johnson',
      text: 'Exceeded our expectations.',
      rating: 5
    }
  ];

  return (
    <div className="testimonials">
      <h2>Client Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <div className="testimonial-rating">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
