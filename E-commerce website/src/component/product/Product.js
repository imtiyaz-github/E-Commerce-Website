import React from 'react';
import './Product.css';

function Product({ addToCart }) {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a description of Product 1',
      price: 10.99,
      image: 'https://picsum.photos/id/1011/200/300',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is a description of Product 2',
      price: 15.99,
      image: 'https://picsum.photos/id/1021/200/300',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is a description of Product 3',
      price: 20.99,
      image: 'https://picsum.photos/id/1031/200/300',
    },

  ];

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{`$${product.price}`}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
