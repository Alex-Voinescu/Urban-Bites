import "./home.css";
import { LANDING } from "../../constans/constans";

function Home(){
    return(
       <div className="homeimg">
        <div className="animation">
              <div className="contenth">
                <h1>Urban</h1>
                <h1>Bites & Sips</h1>
                <div className="backh">
                    <a href={LANDING}>Back</a>
                </div>
                <div className="storyh"> 
                    <div className="paragraf">
                        <p>In the heart of downtown, nestled amidst the hustle and bustle of urban life, lies a culinary gem</p>
                        <p>known as Urban Bites & Sips. This restaurant, with its sleek modern décor and inviting ambiance,</p>
                        <p>is more than just a place to dine—it's a journey through the vibrant flavors and diverse cultures of</p>
                        <p>the city</p>
                    </div>
                    <div className="paragraf">
                        <p>What truly sets Urban Bites & Sips apart is its commitment to community. From </p>
                        <p>supporting local farmers and producers to hosting charity events and art </p>
                        <p>exhibitions, the restaurant serves as a hub for creativity and connection. Here, </p>
                        <p>diners come not just to eat, but to share stories, forge friendships, and celebrate </p>
                        <p>the vibrant tapestry of urban life.</p>
                    </div>
                    <div className="paragraf">
                        <p>So come, take a seat at Urban Bites & Sips, and embark on a culinary journey </p>
                        <p>unlike any other. Whether you're a longtime resident or a curious traveler passing </p>
                        <p>through, you'll find a warm welcome and a feast for the senses awaiting you in this </p>
                        <p>urban oasis.</p>
                    </div>
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
       </div>
    )
}

export default Home;