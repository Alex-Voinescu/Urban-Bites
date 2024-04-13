import menu from '../../assets/images/menu.png';
import img from '../../assets/images/headerImg.png';
import {Link} from 'react-router-dom';
import './mobileHeader.css';
import {LANDING, CONTACT, ORDER_NOW, MENU} from '../../constans/constans.js';
function MobileHeader(){
    return(
        <div className="mobileHeader">
            <div className="imgMobile">
                <img src={img} />
            </div>
            <div className="dropdownMobile">
                <button className="menu"><img src={menu} /></button>
                <div className="dropdownMenu">
                <ul>
                    <li className="listMobile">
                        <a href={MENU}>Menu</a>
                    </li>
                    <li className="listMobile">
                        <a href={LANDING}>Home</a>
                    </li>
                    <li className="listMobile">
                        <a href={CONTACT}>Contact</a>
                    </li>
                    <li className="listMobile">
                            <a href={ORDER_NOW}>ORDER NOW</a>
                    </li>
                    <li className="listMobile">
                        <div className="iconMobile">
                            <Link to="/login">Login</Link>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}
export default MobileHeader;