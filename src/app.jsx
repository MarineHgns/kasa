import { Routes, Route } from "react-router-dom"
import Home from './pages/homePage'
import Header from "./components/header";
import "./css/app.css"
import Footer from './components/footer'
import Error from "./pages/errorPage";
import About from "./pages/aProposPage";
import Accomodation from "./pages/accomodationPage";

function App() {
  return (
      <div className="App">
        <Header />
        
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route path="/logements/:id" element={<Accomodation />} />
            <Route path="/*" element={<Error />}/>
            <Route path="/logements/*" element={<Error />}/>  
          </Routes>
        
        <Footer />

      </div>
  );
}



export default App