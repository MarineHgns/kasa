import { Routes, Route } from "react-router-dom"
import Home from './pages/homePage'
import Header from "./components/header";
import "./css/app.css"
import Footer from './components/footer'
import Error from "./pages/errorPage";
import About from "./pages/aProposPage";



function App() {

  return (
      <div className="App">
      <Header />
      
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route path="/*" element={<Error />}/> 
        </Routes>
      
      <Footer />

      </div>
  );
}

export default App