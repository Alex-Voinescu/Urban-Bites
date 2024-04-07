import React from "react"
import { useEffect, useState } from "react"
import '../reuseStyles/Menu.css';
import { HOME } from "../../constans/constans";
import './lunch.css';
function Lunch() {
    const [data,setData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:8081/lunch')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));

    },[])
    return(
        <div className="contentb">
             <h1 className="bf">Lunch</h1>
            <h1 className="bf">Menu</h1>
            <div className="backl">
                <a href={HOME}>Home</a>
            </div>
            <table className="table">
                <tbody>
                    {data.map((d,i) => (
                        <><tr key={i} className="row">
                            <td>{d.Name}</td>
                            <td>${d.Price}</td>

                        </tr><tr className="ingredients">
                                <td>{d.ingredients}</td>
                            </tr></>
                    ))}
                </tbody>
             
            </table>
        </div>
    )
}
export default Lunch;