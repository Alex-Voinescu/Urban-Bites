import "./book.css";
import { LANDING } from "../../constans/constans";

function Book() {
    return(
        <div className="bookImage">
        <div className="animation">
            <div className="book">
                <div className="bookT">
                    <h1>Book NOW</h1>
                    <a href={LANDING}>Back</a>
                </div>
            <div className="bookform">
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <br />
                <br />
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" />
                    <br/>
		            <br/>
                <label htmlFor="numberOfPeople">Number of People:</label>
                    <select id="numberOfPeople" name="numberOfPeople">
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                        <option value="7">7 people</option>
                        <option value="8">8 people</option>
                        <option value="9">9 people</option>
                        <option value="10">10 people</option>
                        <option value="11">11 people</option>
                        <option value="12">12 people</option>
                    </select>
                    <br/>
		            <br/>
                <label htmlFor="reservationDate">Reservation Date:</label>
                <input type="datetime-local" id="reservationDate" name="reservationDate" />
		            <br/>
		            <br/>
                    <button type="submit" id="submit">Book your date</button>
                    <br/>
		            <br/>
        </form>
        </div>
    </div>
    </div>
    </div>
    )
}

export default Book;