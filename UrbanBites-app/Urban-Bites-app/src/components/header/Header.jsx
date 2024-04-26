import './header.css';
import img from '../../assets/images/logo.png';
import logo from '../../assets/images/loginIcon.jpg';
import arrow from '../../assets/images/arrow.png';
import { Link } from 'react-router-dom';
import MobileHeader from '../mobileHeader/MobileHeader';
import {HOME, CONTACT, BREAKFAST,LUNCH,DINNER,DESERT,DRINKS, BOOK_NOW} from '../../constans/constans.js';
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
                        <ul className="bar">
                            <li className="list">
                                <div className='menu'>
                                    <a href="#">Menu <img src={arrow} /></a>
                                </div>
                                <ul className="dropdown">
                                    <li><a href={BREAKFAST}>Breakfast</a></li>
                                    <li><a href={LUNCH}>Lunch</a></li>
                                    <li><a href={DINNER}>Dinner</a></li>
                                    <li><a href={DESERT}>Desert</a></li>
                                    <li><a href={DRINKS}>Drinks</a></li>
                                </ul>
                            </li>
                            <li className="list"><a href={HOME}>Home</a></li>
                            <li className="list"><a href={CONTACT}>Contact</a></li>
                            <li className="list">
                                <div className="button">
                                    <a href={BOOK_NOW}>BOOK NOW</a>
                                </div>
                            </li>
                        </ul>
                </nav>
            </div>
            <div className='mobile'>
                    < MobileHeader />
            </div>
        </div>
       
    )
}
export default Header;