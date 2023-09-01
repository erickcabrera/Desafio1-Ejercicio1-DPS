import React, { useState } from 'react';
import './App.css';
import MoviePicker from './components/MoviePicker';
import MovieList from './components/MovieList';

const movies = [
  { nombre: 'Interstellar', precio: 19.98 },
  { nombre: 'El padrino', precio: 25 },
  { nombre: 'Mad Max: Furia en la carretera', precio: 14},
  { nombre: 'Tiburón', precio: 20 },
  { nombre: 'Los Cazafantasmas', precio: 35 },
  { nombre: 'Terminator', precio: 12 },
  { nombre: 'El resplandor', precio: 16 },
  { nombre: 'El señor de los anillos', precio: 24 },
  { nombre: 'Reservoir Dogs', precio: 18 },
  { nombre: 'American Psycho', precio: 22 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addMovieToCart = (movie) => {
    const existingMovie = cart.find((item) => item.nombre === movie.nombre);
    if (existingMovie) {
      // Si la película ya está en el carrito, actualizamos la cantidad
      const updatedCart = cart.map((item) =>
        item.nombre === movie.nombre
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Si la película no está en el carrito, la agregamos con cantidad 1
      setCart([...cart, { ...movie, quantity: 1 }]);
    }
  };

  const updateQuantity = (movieName, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.nombre === movieName ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const removeMovieFromCart = (movieName) => {
    const updatedCart = cart.filter((item) => item.nombre !== movieName);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <header>
        <h1>Lista de Compras</h1>
      </header>
      <div className="content">
        <MoviePicker movies={movies} addMovie={addMovieToCart} />
        <MovieList
          cart={cart}
          updateQuantity={updateQuantity}
          removeMovie={removeMovieFromCart}
        />
      </div>
    </div>
  );
}

export default App;