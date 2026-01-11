const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="row w-100">
          <div className="col-lg-7 margin-left-md">
            <span className="badge bg-primary bg-opacity-25 text-white mb-3 px-3 py-2">
              Tradición Lambayecana
            </span>
            <h1 className="display-1 fw-bold text-white mb-4">
              El Sabor Auténtico del<br />
              <span className="text-warning">King Kong</span>
            </h1>
            <p className="lead text-white mb-4">
              Descubre el dulce más emblemático del norte peruano, elaborado artesanalmente 
              con recetas que han pasado de generación en generación.
            </p>
            <div className="d-flex gap-3 flex-wrap align-items-center">
              <a href="#productos" className="btn btn-primary btn-lg px-4">
                Ver Productos
              </a>
              <a href="#nosotros" className="btn btn-outline-light btn-lg px-4">
                Nuestra Historia
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator"></div>
    </section>
  );
}

export default Hero