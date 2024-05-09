import "./contact.css"
import adress from '../../assets/images/adress.png';
import phone from '../../assets/images/phone.png';
import email from '../../assets/images/email.png';
import { LANDING } from "../../constans/constans";
import "../reuseStyles/animation.css";

function Contact(){
    return(
        <div className="contactimg">
            <div className="animation">
             <div className="contact">
                <h1>Get in Touch</h1>
                <div className="backc">
                    <a href={LANDING}>Back</a>
                </div>
                <div className="cimages">
                    <div><img src={adress}/></div>
                    <div><img src={phone}/></div>
                    <div><img src={email}/></div>
                </div>
                <table className="contactInfo">
                        <tr className="titles">
                            <td>Downtown Location</td>
                            <td>Downtown Location</td>
                            <td>Downtown Location</td>
                        </tr>
                        <tr>
                            <td>456 Downtown Avenue</td>
                            <td>(555) 555-1234</td>
                            <td> downtown@urbanbites&sips.com</td>
                        </tr>
                        <tr>
                            <td colspan="3">- - - - - - - - - - - - - - -
                             - - - - - - - - - - - - - - - - - - - - - - -
                              - - - - - - - - - - - - - - - - - - -</td>
                        </tr>
                        <tr className="titles">
                            <td>Riverside Location</td>
                            <td>Riverside Location</td>
                            <td>Riverside Location</td>
                        </tr>
                        <tr>
                            <td>321 Riverside Drive</td>
                            <td>(555) 555-9012</td>
                            <td>riverside@urbanbites&sips.com</td>
                        </tr>
                        <tr>
                        <td colspan="3">- - - - - - - - - - - - - - -
                             - - - - - - - - - - - - - - - - - - - - - - -
                              - - - - - - - - - - - - - - - - - - -</td>
                        </tr>
                        <tr className="titles">
                            <td>Central Park Location</td>
                            <td>Central Park Location</td>
                            <td>Central Park Location</td>
                        </tr>
                        <tr>
                            <td>101 Central Park Avenue</td>
                            <td>(555) 555-3456</td>
                            <td>centralpark@urbanbites&sips.com</td>
                        </tr>
                            <tr>
                            <td colspan="3">- - - - - - - - - - - - - - -
                             - - - - - - - - - - - - - - - - - - - - - - -
                              - - - - - - - - - - - - - - - - - - -</td>
                            </tr>
                </table>
                <h1>Come visit us!</h1>
            </div>
         
        </div>
        </div>
       
    )
}

export default Contact;