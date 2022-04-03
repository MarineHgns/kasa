import { Routes, Route } from "react-router-dom"
import Home from './pages/homePage'
import Header from "./components/header";
import "./css/app.css"



function App() {

  return (
      <div className="App">
      <Header />
      
        <Routes>
          <Route exact path="/" element={<Home />}/>
          {/* <Route exact path="/about" element={<About />}/>
          <Route path="/housing/:id" element={<Housing />}/>
          <Route path="/*" element={<Error404 />}/> */}
        </Routes>
      
      {/* <Footer /> */}

      </div>
  );
}

export default App