import React from "react"
import { useEffect, useState } from "react"
import '../reuseStyles/Menu.css'
import { LANDING } from "../../constans/constans";
import './drinks.css';

function Drinks() {
    const [data,setData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:8081/drinks')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));

    },[])
    return(
        <div className="contentb">
             <h1 className="bf">Special</h1>
            <h1 className="bf">Drinks</h1>
            <div className="backdi">
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
export default Drinks;