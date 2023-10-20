import React , {Component, useState} from "react";
import { BrowserRouter , Link , Route , Routes } from "react-router-dom";
import Home from './Home';
import Contact from "./Contact";
import Student from './Student';
import Store from "./StoreCompo";
import EditStudent from "./Editstudent";
import './style.css';
import AddCompo from "./AddCompo";

function RouteCompo(){
    const [stuData, setStuData] = useState([
        {Name:'john' , Age:26, Course:'MERN', Batch:'October', id:1},
        {Name:'Doe' , Age:25, Course:'MERN', Batch:'November', id:2},
        {Name:'Biden' , Age:26, Course:'MERN', Batch:'September',id:3},
        {Name:'Barar' , Age:22, Course:'MERN', Batch:'September',id:4},
        {Name:'Christ' , Age:23, Course:'MERN', Batch:'October',id:5},
        {Name:'Elent' , Age:24, Course:'MERN', Batch:'November',id:6}
    ])
    return(
        <>
        <BrowserRouter >
        <div className="parent">
        <Link to= '/' className="navbar" >Home  </Link>
        <Link to = '/Student' className="navbar">Student </Link>
        <Link to = '/Contact' className="navbar">Contact</Link>
        <Link to = '/AddCompo' ></Link>
        </div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/student' element={
            <Store.Provider value ={{stuData,setStuData}}>
                <Student />
            </Store.Provider>
            } />
            <Route path='/editstudent/:id' element={
                <Store.Provider value = {{stuData,setStuData}}>
                    <EditStudent />
                </Store.Provider>
            }></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path="/AddCompo" element={
                 <Store.Provider value = {{stuData,setStuData}}>
                    <AddCompo />
                 </Store.Provider>
            }></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouteCompo;