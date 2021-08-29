//import './App.css';
import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path= '/' element= {<Home />}/>
        <Route path= '/:movieId' element= {<Movie />}/>
        <Route path= '/*' element= {<NotFound />}/>
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
