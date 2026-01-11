const About = () => {
  return (
    <section id="nosotros" className="py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2">
              Nuestra Historia
            </span>
            <h2 className="display-5 fw-bold mb-4">
              Tradición que se Saborea desde 1920
            </h2>
            <p className="text-muted mb-3">
              El King Kong es un dulce tradicional originario de Lambayeque, al norte del Perú. 
              Su nombre proviene del famoso gorila de las películas, debido a su gran tamaño 
              que lo hacía parecer "gigante" entre los demás dulces.
            </p>
            <p className="text-muted mb-3">
              En <span className="text-primary fw-semibold">Sipán</span>, honramos esta 
              tradición centenaria utilizando las mismas técnicas artesanales de nuestros 
              antepasados, combinando galletas crujientes con el más cremoso manjar blanco.
            </p>
            <p className="text-muted mb-4">
              Cada pieza es elaborada a mano en nuestro taller de Lambayeque, garantizando 
              la calidad y autenticidad que nos caracteriza.
            </p>
            
            <div className="row g-4 mt-4">
              <div className="col-4">
                <h3 className="display-5 fw-bold text-primary mb-0">100+</h3>
                <p className="text-muted small mb-0">Años de tradición</p>
              </div>
              <div className="col-4">
                <h3 className="display-5 fw-bold text-primary mb-0">50K+</h3>
                <p className="text-muted small mb-0">Clientes felices</p>
              </div>
              <div className="col-4">
                <h3 className="display-5 fw-bold text-primary mb-0">100%</h3>
                <p className="text-muted small mb-0">Artesanal</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="about-image-box text-center p-5 rounded-4">
              <div className="mb-4">
                <span className="fs-1">🍮</span>
              </div>
              <h3 className="h2 fw-bold mb-3">Receta Familiar</h3>
              <p className="text-muted">Transmitida de generación en generación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About