import {Route, Routes, BrowserRouter} from "react-router-dom";
import './App.css'
import LandingPage from "./components/landingPage/LandingPage.jsx";

export default function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}


