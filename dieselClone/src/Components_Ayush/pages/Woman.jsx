import React from 'react';

const Woman = () => {
  const products = []; 

  return (
    <div className="Woman-page">
      {/* Product listing section */}
      <div className="product-listing">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Woman;