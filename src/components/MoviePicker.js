import React, { useState } from 'react';

const MoviePicker = ({ movies, addMovie }) => {
  const [selectedMovie, setSelectedMovie] = useState('');

  const handleMovieChange = (e) => {
    setSelectedMovie(e.target.value);
  };

  const handleAddMovie = () => {
    if (selectedMovie !== '') {
      const movieToAdd = movies.find((movie) => movie.nombre === selectedMovie);
      if (movieToAdd) {
        addMovie(movieToAdd);
        setSelectedMovie('');
      }
    }
  };

  return (
    <div className="movie-picker">
      <h2>Lista de compras</h2>
      <select value={selectedMovie} onChange={handleMovieChange}>
        <option value="">Selecciona una película</option>
        {movies.map((movie) => (
          <option key={movie.nombre} value={movie.nombre}>
            {movie.nombre}
          </option>
        ))}
      </select>
      <button onClick={handleAddMovie}>Agregar</button>
    </div>
  );
};

export default MoviePicker;