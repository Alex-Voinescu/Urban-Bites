import React from "react"
import { useEffect, useState } from "react"
import '../reuseStyles/Menu.css'
import { HOME } from "../../constans/constans";
import './desert.css';

function Desert() {
    const [data,setData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:8081/desert')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));

    },[])
    return(
        <div className="contentb">
             <h1 className="bf">Deserts</h1>
            <div className="backde">
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
export default Desert;