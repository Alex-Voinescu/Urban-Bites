import { NavLink } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <nav className="main-menu">
      <ul>
        <NavLink to="/allRecipes">ALL Recipes</NavLink>
        <NavLink to="/breakfast">Breakfast</NavLink>
        <NavLink to="/lunch">Lunch</NavLink>
        <NavLink to="/dinner">Dinner</NavLink>
        <NavLink to="/dessert">Dessert</NavLink>
        <NavLink to="/snack">Snack</NavLink>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search.."></input>
      </div>
    </nav>
  );
}