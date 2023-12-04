import { useEffect, useState } from "react"
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard"
// ff2bffa1


const App = () => {

  const API_URL = 'https://www.omdbapi.com?apikey=ff2bffa1'
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies(searchTerm)
  }, []);

  return (

    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input type="text" placeholder="Search for Movies" value={`${searchTerm}`} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src="{searchIcon}" alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>
      <div className="container">
        {movies?.length ? <>{movies.map((movie) => (<MovieCard key={movie.Poster} movie={movie} />))}</> : (
          <div className="empty">
            Not Found
          </div>
        )}
      </div>
    </div>
  )
}

export default App
