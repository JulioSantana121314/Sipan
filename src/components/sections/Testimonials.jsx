import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2">
            Testimonios
          </span>
          <h2 className="display-4 fw-bold mb-3">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Miles de familias peruanas confían en nosotros para llevar dulzura a sus hogares.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials