import React, {useContext} from "react";
import Store from "./StoreCompo";
import { Link, useNavigate } from "react-router-dom";
import AddCompo from "./AddCompo";
import './style.css';

function Student(){
    const contextData = useContext(Store)
    let studentNavigation = useNavigate();
    console.log(contextData);
    return(
        <>
        <h1>Student Details!!!</h1>
        <button type="button" className="addNew" onClick={() => studentNavigation("/AddCompo")}>Add New Student</button>
        <table border='1px solid black'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {contextData.stuData.map((item , index) => {
                    return(
                        <tr key={index}>
                            {item ? <td>{item.Name}</td> :null}
                            {item ? <td>{item.Age}</td>:null}
                            {item ? <td>{item.Course}</td>:null}
                            {item ? <td>{item.Batch}</td>:null}
                            {item ? <td><Link to={`/editstudent/${index}`}>Edit</Link></td>:null}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        </>
    )
}
export default Student;