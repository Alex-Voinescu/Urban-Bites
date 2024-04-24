import "./home.css";
import { LANDING } from "../../constans/constans";

function Home(){
    return(
       <div className="homeimg">
              <div className="contenth">
                <h1>Urban</h1>
                <h1>Bites & Sips</h1>
                <div className="backh">
                    <a href={LANDING}>Back</a>
                </div>
                <div className="storyh"> 
                    <p>Seven dishes. Six drinks. That's what we started with. </p>
                    <p>Our initial menu was lean but perfectly curated. Our   </p>
                    <p>offerings have grown a lot since then, but our commitment </p>
                    <p>to perfection remains.</p>
                </div>
              
            </div>
            <div className="open">
                <h1>Opening Hours</h1>
                <table className="hometable">
                    <tr className="homerow">
                        <td className="">Monday</td>
                        <td>12am - 10pm</td>
                    </tr>
                    <tr>
                        <td className="">Tuesday</td>
                        <td>12am - 10pm</td>
                    </tr>
                    <tr>
                        <td className="">Wednesday</td>
                        <td>12am - 10pm</td>
                    </tr>
                    <tr>
                        <td className="">Thursday</td>
                        <td>12am - 10pm</td>
                    </tr>
                    <tr>
                        <td className="">Friday</td>
                        <td>12am - 10pm</td>
                    </tr>
                    <tr>
                        <td className="">Saturday</td>
                        <td>12am - 9pm</td>
                    </tr>
                    <tr>
                        <td className="">Sunday</td>
                        <td>14am - 8pm</td>
                    </tr>
                </table>
            </div>
       </div>
    )
}

export default Home;