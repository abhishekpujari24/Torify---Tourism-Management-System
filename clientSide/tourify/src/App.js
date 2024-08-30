

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>

        <ToastContainer
          position="top-right"
          theme="dark"
          autoClose={4000}
        />
        
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
