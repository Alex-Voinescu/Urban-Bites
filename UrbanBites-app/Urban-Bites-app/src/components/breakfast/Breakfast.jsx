import React from "react"
import { useEffect, useState } from "react"
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
        <div className="content">
             <h1>Breakfast</h1>
            <h1>Menu</h1>
            <table className="table">
                <thead>
                    <tr className="row">
                        <th>Number</th>
                        <th>Name</th>
                        <th>Price $</th>
                    </tr> 
                </thead>
                <tbody>
                    {data.map((d,i) => (
                        <tr key={i} className="row">
                            <td>{d.NrCrt}</td>
                            <td>{d.Name}</td>
                            <td>{d.Price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Breakfast;