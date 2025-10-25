import './App.css';

function App() {
  const movies = [
    { id: 1, title: 'THE WALKING DEAD', image: '/walking-dead.jpg' },
    { id: 2, title: 'SOULITE PARK', image: '/soulite-park.jpg' },
    { id: 3, title: 'GHOST HUNT', image: '/ghost-hunt.jpg' },
    { id: 4, title: 'GOOD GAME', image: '/good-game.jpg' },
  ];

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#favourites" className="nav-link">Favourites</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">Discover Movies Instantly!</h1>
        <button className="get-started-btn">Get Started</button>
      </div>

      {/* Movies Grid */}
      <div className="movies-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <div className="favorite-icon">♥</div>
            <div className="movie-poster"></div>
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;