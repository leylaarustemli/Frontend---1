import React, { useContext, useEffect, useState } from 'react'
import "./Section3.css"
import axios from "axios"
import { Link } from 'react-router-dom';
import MainContext from '../Context/Context';
const Section3 = () => {
const[data,setData]=useState([]);
const{addToBasket}=useContext(MainContext)
useEffect(()=>{
    axios.get("http://localhost:5505/api/products").then((res)=>{
        setData([...res.data]);
    });
},[data]);
function filterData(category){
    if(category=="main"){
        axios.get("http://localhost:5505/api/products").then((res)=>{
            setData([...res.data]);
    })}
        else{
            axios.get("http://localhost:5505/api/products").then((res)=>{
                setData([...res.data.filter((x)=>x.category.includes(category))])
            })
        }
    }


   

  return (
    <div className='section3'>
<div className="container">
    <span>OUR MENU</span>
    <h3>Discover Our Exclusive Menu</h3>
    <div className="eats">
        <div onClick={()=>{
            filterData("main");
        }} className="eat">
        <i  class="fa-solid fa-cookie-bite"></i>
        <p >Main</p>
        </div>
        <div onClick={()=>{
            filterData("desert")
        }} className="eat">
        <i class="fa-solid fa-cookie-bite"></i>
        <p >Deserts</p>
        </div>
        <div onClick={()=>{
            filterData("drinks")
        }} className="eat">
        <i class="fa-solid fa-cookie-bite"></i>
        <p >Drinks</p>
        </div>
    </div>
    <div className="cards">
       {data.map((item,index)=>( <div className="card">
            <div className="left-card">
                <img src={item.image}  alt="" />
            </div>
            <div className="center-card">
                <p>{item.title}</p>
                <span>{item.description}</span>
            </div>
            <div className="right-card">
                <h4>{item.price}</h4>
            </div>
            <button onClick={()=>addToBasket(item._id)} id='basket'>basket</button>
            <Link to={`/detail/${item._id}`} id='detail'>detail</Link>
        </div>))}
        
    </div>
</div>
    </div>
  )
}

export default Section3