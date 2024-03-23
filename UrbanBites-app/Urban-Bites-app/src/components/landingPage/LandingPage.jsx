import img from '../../assets/images/miniLogo2.png';
import "./landingPage.css";
import { Link } from 'react-router-dom';
function LandingPage(){
    return(
    <div className="landingPage">
        <div className="content">
            <img src={img} />
            <div className="para">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi</p>
                <p>ab officia dignissimos consequuntur neque eum quas esse, ullam error</p> 
                <p>ratione natus fuga voluptatum quis eveniet ipsum! Excepturi, iure verita?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est</p>
                <p>asperiores ducimus, tempore qui quasi quisquam voluptatem quam</p>
                <p>exercitationem repudiandae error quaerat delectus reiciendis recusandae.</p>
            </div>
            <Link to="/start">Discover More</Link>
        </div>
    </div>
    )
}
export default LandingPage;