import React from 'react';

const Man = () => {
  const products = []; 

  return (
    <div className="man-page">
      {/* Product listing section */}
      <div className="product-listing">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Man;