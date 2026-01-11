import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const Products = () => {
  return (
    <section id="productos" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2">
            Nuestros Productos
          </span>
          <h2 className="display-4 fw-bold mb-3">Dulzura en Cada Bocado</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Cada King Kong es elaborado con ingredientes seleccionados y el amor 
            de nuestros maestros pasteleros lambayecanos.
          </p>
        </div>

        <div className="row g-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products