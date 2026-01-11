import { useCart } from '../../context/CartContext';
import { useEffect } from 'react';

const Navbar = () => {
  const { cartCount } = useCart();

  useEffect(() => {
  }, []);

  const handleCartClick = () => {
    const modalElement = document.getElementById('cartModal');
    
    if (modalElement && window.bootstrap) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Bootstrap no disponible o modal no encontrado');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
      <div className="container">
        <a className="navbar-brand fs-2 fw-bold text-primary" href="#inicio">
          Sipán
        </a>
        
        <div className="d-flex align-items-center order-lg-2">
          <button 
            className="btn btn-link position-relative p-2"
            onClick={handleCartClick}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            className="navbar-toggler ms-2" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div className="collapse navbar-collapse order-lg-1" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
