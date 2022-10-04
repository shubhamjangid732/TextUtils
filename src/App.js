import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import { Link } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [AlerT, setAlerT] = useState(null);
  const showAlert = (message, type) => {
    setAlerT({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlerT(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#454545";
      showAlert("dark mode is enabled", "success");
      document.title = "TextUtils-dark mode";
      // setInterval(() => {
      //   document.title="orr bhamiya";
      // }, 2300);
      // setInterval(() => {
      //   document.title="hemlo";
      // }, 1700);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success");
      document.title = "TextUtils-light mode";
    }
  }
  return (
    <>
      <Alert alert={AlerT} />
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/>  */}
      <BrowserRouter>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );


}

export default App;
