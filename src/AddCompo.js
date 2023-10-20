import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Store from './StoreCompo';
import './style.css';
function AddCompo() {
    let studentNavigation = useNavigate();
    const index = useParams().id;
    const contextData = useContext(Store);
    let newObj = {
        Name : '',
        Age : '',
        Course : '',
        Batch : ''
    }
    const handleChange = (e) => {
        newObj[e.target.name] = e.target.value;
    }
    const handleSubmit = () => {
       console.log(newObj);
       contextData.stuData.push(newObj);
        studentNavigation('/student');
    }
    return (
        <section>
            <h1>Add Components!!</h1>
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
        <button className='submit' onClick={() => studentNavigation('/student')} type='button'>Cancel</button>
        <button className='submit' onClick={handleSubmit} >Submit</button>
        
        </section>
    )
}
export default AddCompo;







