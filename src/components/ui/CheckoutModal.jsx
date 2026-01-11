import { useEffect } from 'react';

const CheckoutModal = () => {
  useEffect(() => {
    const modalElement = document.getElementById('checkoutModal');
    
    const handleModalShow = () => {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    };
    
    const handleModalHide = () => {
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

  return (
    <div className="modal fade" id="checkoutModal" tabIndex="-99" data-bs-backdrop="static">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body text-center py-5">
            <div className="mb-4">
              <span style={{ fontSize: '5rem' }}>😊</span>
            </div>
            <h3 className="fw-bold mb-3">¡Casi casi!</h3>
            <p className="text-muted fs-5">
              Aquí te llevaría a una pasarela de pago...<br />
              <strong>¡Si tuviera una!</strong>
            </p>
          </div>
          <div className="modal-footer border-0 justify-content-center">
            <button 
              type="button" 
              className="btn btn-primary px-4" 
              data-bs-dismiss="modal"
            >
              Entendido 😄
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
