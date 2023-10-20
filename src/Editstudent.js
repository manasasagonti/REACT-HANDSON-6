import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Store from "./StoreCompo";
import './style.css';

function EditStudent(){
    const contextData = useContext(Store);
    let param = useParams();
    let studentNavigation = useNavigate();
    const Navigate =useNavigate();
    console.log(contextData);
    console.log(contextData.stuData[param.id]);

    let UpdateObj = {
        Name : contextData.stuData[param.id].Name,
        Age : contextData.stuData[param.id].Age,
        Course : contextData.stuData[param.id].Course,
        Batch : contextData.stuData[param.id].Batch,
    }

    const handleChange = (e) => {
        UpdateObj[e.target.name] = e.target.value;
    }

    const handleSubmit = () => {
        console.log(UpdateObj);
        contextData.stuData[param.id] = UpdateObj;
        Navigate('/student')
    }
    return(
        <>
        <h1>Edit here</h1>
        <label>Name : </label>
        <input type="text" placeholder="enter your name" name="Name" className="form" onChange={handleChange}></input>
        <label>Age : </label>
        <input type="number" placeholder="enter your age" name="Age" className="form" onChange={handleChange}></input>
        <br></br>
        <label>Course : </label>
        <input type="text" placeholder="enter your course" name="Course" className="form" onChange={handleChange}></input>
        <label>Batch : </label>
        <input type="text" placeholder="enter your batch" name="Batch" className="form" onChange={handleChange}></input>
        <br></br>
        <button  onClick={handleSubmit} className="submit">Update</button>
        <button type="button" className="submit" onClick={() => studentNavigation("/Student")}>Back</button>
        </>
    )
}
export default EditStudent;