//import './App.css';
import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
