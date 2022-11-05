import './App.css';
import zuri from './assets/Zuri.Internship_Logo.svg'
import I4G from './assets/I4G.svg'
import { Routes, Route} from "react-router-dom";   
import Home from './pages/home';
import Contact from './pages/contact';
function App() {  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <div className="footer">
        <img src={zuri} alt="zuri logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="I4G logo" />
      </div>
    </>
  );
}

export default App;
