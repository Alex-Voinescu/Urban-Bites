import './header.css';
import img from '../../assets/images/headerImg.png';
import logo from '../../assets/images/loginIcon.jpg';
import arrow from '../../assets/images/arrow.png';
import { Link } from 'react-router-dom';
import MobileHeader from '../mobileHeader/MobileHeader';
import {INGREDIENTS, MEAL_PLANS, PUBLIC_RECIPIES, MY_RECIPIES, RECIPIES_WITH_MY_INGREDIENTS, ADD_NEW_RECIPE} from '../../constans/constans.js';
import {useState} from 'react';
function Header()
{
    const [isLogged, setIsLogged]=useState(true);
    return(
        <div className="header">
            <div className="PC">
                <div className="img">
                    <img src={img} />
                </div>
                <nav className="navList">
                    {isLogged &&
                        <ul className="bar">
                            <li className="list">
                                <a href="#">Recipes <img src={arrow} /></a>
                                <ul className="dropdown">
                                    <li><a href={PUBLIC_RECIPIES}>Public recipes</a></li>
                                    <li><a href={MY_RECIPIES}>My recipes</a></li>
                                    <li><a href={RECIPIES_WITH_MY_INGREDIENTS}>Recipes with my ingredients</a></li>
                                </ul>
                            </li>
                            <li className="list"><a href={INGREDIENTS}>Ingredients</a></li>
                            <li className="list"><a href={MEAL_PLANS}>Meal Plans</a></li>
                            <li className="list">
                                <div className="button">
                                    <a href={ADD_NEW_RECIPE}>ADD NEW RECIPE</a>
                                </div>
                            </li>
                            <li className="list">
                                <div className="icon">
                                    <Link to="/login"><img src={logo} /></Link>
                                </div>
                            </li>
                        </ul>}
                    {!isLogged &&
                        <div className="loggedIn">
                            <Link to="/login">LOGIN</Link>
                        </div>}
                </nav>
            </div>
            <div className='mobile'>
                    < MobileHeader />
            </div>
        </div>
       
    )
}
export default Header;