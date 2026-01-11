const TestimonialCard = ({ testimonial }) => {
  const { rating, comment, author, location, initial } = testimonial;

  return (
    <div className="col-md-4">
      <div className="card h-100 border-0 shadow-sm p-4 d-flex flex-column">
        <div className="mb-3">
          <span className="text-warning">
            {'★'.repeat(rating)}
          </span>
        </div>
        <p className="fst-italic mb-4">
          "{comment}"
        </p>
        <div className="d-flex align-items-center mt-auto">
          <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
            <span className="fw-bold text-primary">{initial}</span>
          </div>
          <div>
            <h6 className="mb-0 fw-semibold">{author}</h6>
            <small className="text-muted">{location}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard