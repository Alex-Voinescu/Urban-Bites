import React from "react"
import { useEffect, useState } from "react"
import '../reuseStyles/Menu.css'
import { LANDING } from "../../constans/constans";
import './dinner.css';

function Dinner() {
    const [data,setData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:8081/dinner')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));

    },[])
    return(
        <div className="contentb">
             <h1 className="bf">Dinner</h1>
            <h1 className="bf">Menu</h1>
            <div className="backd">
                <a href={LANDING}>Home</a>
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
export default Dinner;