import React from 'react';

const MovieItem = ({ movie, updateQuantity, removeMovie }) => {
  const handleQuantityChange = (e) => {
    updateQuantity(movie.nombre, parseInt(e.target.value));
  };

  return (
    <li className="movie-item">
      <div className="movie-info">
        <div className="movie-name">{movie.nombre}</div>
        <div className="movie-price">${movie.precio.toFixed(2)}</div>
        <input
          type="number"
          min="1"
          value={movie.quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={() => removeMovie(movie.nombre)}>Eliminar</button>
      </div>
    </li>
  );
};

export default MovieItem;