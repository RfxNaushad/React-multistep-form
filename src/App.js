import './App.css';
import Home from './components/Home/Home';
import LogIn from './components/form/LogIn/LogIn';
// import { Routes, Route} from "react-router-dom";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";


function App() {

  return (
    <div className="App">

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
