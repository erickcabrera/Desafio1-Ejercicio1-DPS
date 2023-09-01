import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ cart, updateQuantity, removeMovie }) => {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
      };

  return (
    <div className="movie-list">
      <h2>Mis compras</h2>
      <ul>
        {cart.map((item) => (
          <MovieItem
            key={item.nombre}
            movie={item}
            updateQuantity={updateQuantity}
            removeMovie={removeMovie}
          />
        ))}
      </ul>
      <div className="total">
        <span>Total a pagar:</span>
        <span>${calculateTotal().toFixed(2)}</span>
      </div>
    </div>
  );
};

export default MovieList;