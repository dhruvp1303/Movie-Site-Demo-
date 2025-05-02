import './css/App.css'  
import MovieCard from "./components/MovieCard"
import Home from "./pages/Home.jsx"
import { Routes, Route } from "react-router-dom"
import Favorites from "./pages/Favorites.jsx"
import NavBar from "./components/NavBar.jsx"

function App() {
  return (
    <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
      </main>
    </div>
  );
}


export default App;
