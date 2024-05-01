import {Route, Routes, BrowserRouter} from "react-router-dom";
import './App.css'
import LandingPage from './components/landingPage/LandingPage.jsx'
import Header from './components/header/Header.jsx';
import Breakfast from './components/breakfast/Breakfast.jsx';
import Lunch from "./components/lunch/Lunch.jsx";
import Dinner from "./components/dinner/Dinner.jsx";
import Desert from "./components/desert/Desert.jsx";
import Drinks from "./components/drinks/Drinks.jsx";
import Home from "./components/homecmp/Home.jsx";
import Contact from "./components/contact/Contact.jsx";
import Book from "./components/book/Book.jsx";

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
        <Route  path="lunch"  element={<Lunch />} />
        <Route  path="dinner"  element={<Dinner />} />
        <Route  path="desert"  element={<Desert />} />
        <Route  path="drinks"  element={<Drinks />} />
        <Route  path="home"  element={<Home />} />
        <Route  path="contact"  element={<Contact/>} />
        <Route  path="book-now"  element={<Book/>} />
      </Routes>
    </BrowserRouter>
  )
}


