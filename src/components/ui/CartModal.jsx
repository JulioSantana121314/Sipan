import { useCart } from '../../context/CartContext';
import { useEffect } from 'react';

const CartModal = () => {
  const { cartItems, cartCount, removeFromCart, updateQuantity, getTotal } = useCart();

  useEffect(() => {
    const modalElement = document.getElementById('cartModal');
    
    const handleModalShow = () => {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    };
    
    const handleModalHide = () => {
      if (document.activeElement) {
        document.activeElement.blur();
      }
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };

    if (modalElement) {
      modalElement.addEventListener('show.bs.modal', handleModalShow);
      modalElement.addEventListener('hide.bs.modal', handleModalHide);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('show.bs.modal', handleModalShow);
        modalElement.removeEventListener('hide.bs.modal', handleModalHide);
      }
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  const handleCheckout = () => {
    const cartModalElement = document.getElementById('cartModal');
    const cartModal = window.bootstrap.Modal.getInstance(cartModalElement);
    
    if (document.activeElement) {
      document.activeElement.blur();
    }
    
    cartModal.hide();

    setTimeout(() => {
      const checkoutModalElement = document.getElementById('checkoutModal');
      const checkoutModal = new window.bootstrap.Modal(checkoutModalElement);
      checkoutModal.show();
    }, 300);
  };

  if (cartCount === 0) {
    return (
      <div className="modal fade" id="cartModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Carrito de Compras</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body text-center py-5">
              <svg width="64" height="64" fill="currentColor" className="text-muted mb-3" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              <p className="text-muted">Tu carrito está vacío</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal fade" id="cartModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Carrito de Compras ({cartCount} items)</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item-row border-bottom py-3">
                <div className="d-flex align-items-start gap-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="rounded cart-item-image"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.name}</h6>
                    <p className="text-muted small mb-2">S/ {item.price.toFixed(2)}</p>
                    
                    <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <div className="d-flex align-items-center gap-2">
                        <button 
                          className="btn btn-sm btn-outline-secondary cart-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Disminuir cantidad"
                        >
                          -
                        </button>
                        <span className="fw-bold px-2">{item.quantity}</span>
                        <button 
                          className="btn btn-sm btn-outline-secondary cart-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                        <button 
                          className="btn btn-sm btn-danger cart-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Eliminar producto"
                        >
                          🗑️
                        </button>
                      </div>
                      <div className="text-end">
                        <strong className="text-primary">S/ {(item.price * item.quantity).toFixed(2)}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="modal-footer flex-column gap-3">
            <div className="w-100 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Total:</h5>
              <h5 className="mb-0 text-primary">S/ {getTotal().toFixed(2)}</h5>
            </div>
            <div className="w-100 d-flex flex-column flex-sm-row gap-2">
              <button 
                type="button" 
                className="btn btn-secondary flex-grow-1" 
                data-bs-dismiss="modal"
              >
                Seguir Comprando
              </button>
              <button 
                type="button" 
                className="btn btn-primary flex-grow-1"
                onClick={handleCheckout}
              >
                Proceder al Pago
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
