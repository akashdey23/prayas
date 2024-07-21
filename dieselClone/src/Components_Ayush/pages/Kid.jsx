import React from 'react';

const Kid = () => {
  const products = []; 

  return (
    <div className="Kid-page">
      {/* Product listing section */}
      <div className="product-listing">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Kid;