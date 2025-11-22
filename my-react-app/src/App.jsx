import './App.css';
import Landingpage from "./components/Landingpage";
import { Routes, Route } from "react-router-dom";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/movies" element={<MovieCard />} />
    </Routes>
  )
}

export default App;