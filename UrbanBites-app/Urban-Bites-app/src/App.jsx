import {Route, Routes, BrowserRouter} from "react-router-dom";
import './App.css'
import LandingPage from './components/landingPage/LandingPage.jsx'
import Header from './components/header/Header.jsx';
import Breakfast from './components/breakfast/Breakfast.jsx';

export default function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path="/" 
        element={
          <>
          <Header />
          <LandingPage />
          </>
          }
        />
        <Route  path="breakfast"  element={<Breakfast />} />
      </Routes>
    </BrowserRouter>
  )
}


