import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100 border-0 shadow-sm product-card">
        <div className="card-img-wrapper">
          <img 
            src={product.image} 
            className="card-img-top" 
            alt={product.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">{product.name}</h5>
          <p className="card-text text-muted small">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fs-4 fw-bold text-primary">
              S/ {product.price.toFixed(2)}
            </span>
            <button 
              className="btn btn-primary"
              onClick={handleAddToCart}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard