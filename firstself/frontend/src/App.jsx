import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
function App() {

  return (
    <>
    <Home/>
    </>
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
