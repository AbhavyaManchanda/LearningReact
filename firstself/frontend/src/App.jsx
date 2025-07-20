import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Favs from './pages/Favs';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <NavBar />

      
      {/* The NavBar component is imported and used here to display the navigation links */}
      {/* The Routes component is used to define the different routes in the application */}
      {/* Each Route component defines a path and the component to render for that path */}


      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favs />} />
        
        
      </Routes>
      
      </main>
    </div>
  )
}

export default App



//a component is a javascript function that returns a piece of JSX
//JSX is a syntax extension that allows us to write HTML-like code in JavaScript
//components can be reused and composed to build complex UIs
//the App component is the root component of our application
//we can import other components and use them inside the App component 
//only one element can be returned from a component
//we can use fragments <> </> to return multiple elements without adding extra nodes to the DOM.they are parents that do not create a DOM element
