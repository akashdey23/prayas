import React from 'react';

const SS24 = () => {
  const products = []; 

  return (
    <div className="SS24-deals">
      {/* Product listing section */}
      <div className="product-listing">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SS24;