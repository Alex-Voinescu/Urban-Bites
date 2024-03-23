import menu from '../../assets/images/menu.png';
import img from '../../assets/images/headerImg.png';
import {Link} from 'react-router-dom';
import './mobileHeader.css';
import {INGREDIENTS, MEAL_PLANS, ADD_NEW_RECIPE, RECIPES} from '../../constans/constans.js';
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
                        <a href={RECIPES}>Recipes</a>
                    </li>
                    <li className="listMobile">
                        <a href={INGREDIENTS}>Ingredients</a>
                    </li>
                    <li className="listMobile">
                        <a href={MEAL_PLANS}>Meal Plans</a>
                    </li>
                    <li className="listMobile">
                            <a href={ADD_NEW_RECIPE}>Add new recipe</a>
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