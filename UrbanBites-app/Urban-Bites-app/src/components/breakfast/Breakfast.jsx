import React from "react"
import { useEffect, useState } from "react"
import '../reuseStyles/Menu.css'
import { LANDING } from "../../constans/constans";
import './breakfast.css';

function Breakfast() {
    const [data,setData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:8081/breakfast')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));

    },[])
    return(
        <div className="contentb">
             <h1 className="bf">Morning</h1>
            <h1 className="bf">Meals</h1>
            <div className="backb">
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
export default Breakfast;