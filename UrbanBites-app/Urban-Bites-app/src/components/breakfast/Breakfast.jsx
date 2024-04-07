import React from "react"
import { useEffect, useState } from "react"
import './breakfast.css';
import { PAGE } from "../../constans/constans";
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
             <h1 className="bf">Breakfast</h1>
            <h1 className="bf">Menu</h1>
            <div className="backb">
                <a href={PAGE}>Home</a>
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