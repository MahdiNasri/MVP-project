import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Events = () => {
    const [events,setEvents]=useState([])
    const [update,setUpdate]=useState(false)
    const [show,setShow]=useState(false)
    const [date,setDate]=useState(new Date())
  

    const fetch = () => (
        axios.get('http://localhost:3001/api/events').then((response)=>{
            setEvents(response.data)
            console.log(response.data)
          }).catch((err)=>{
            console.log(err)
          })
      )
    useEffect( ()=>{fetch()} , [update])
console.log("data",events);

const deleted = (id) => {
  axios.delete(`http://localhost:3001/api/events/${id}`).then((response)=>{
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
}

const updated = (id) => {
  axios.put(`http://localhost:3001/api/events/${id}`,{date:date}).then((response)=>{
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
}
  return (
    <div>
 
    <div>
        <div id='Heading' >
     
     <h1 >CLUBBING</h1>
   </div>
        <section className="courses-content" >
       {events.filter(e=>e.category==="CLUBBING").map((e,i)=>
         <div className="roww" key={i}>
           <span style={{fontSize:'40px'}} onClick={()=>{setShow(!show)}}>&#10227;</span>
           <span style={{fontSize:'40px',marginLeft:'300px'}} onClick={()=>{
            deleted(e._id)
           }}>&#9003;</span>
            <img src={e.imageUrl} alt="../img/course3.jpg" />
            <div className="courses-text">
                <h5>{e.name}</h5>
                 <h5>{e.date.slice(0,10)}</h5>
                 <h5>{e.time}</h5>
            </div>
            {show&&(
              <div>
            <input className='input'  type='date' 
            onChange={(e)=>{setDate(e.target.value)}}
            
            /> 
          
             <button onClick={()=>{
              updated(e._id)
              setShow(!show)
            }}>UPDATE</button>
            </div>
            )}
                    <button className='outline-btn'>SEE MORE !</button>  
        </div>)}

       
    </section>
=
    </div>

<section>
        <div id='Heading'>
     
     <h1>FESTIVAL</h1>
   </div>
        <section className="courses-content">
       {events.filter(e=>e.category==="FESTIVAL").map((e,i)=>
         <div className="roww" key={i}>
           <span style={{fontSize:'40px'}} onClick={()=>{setShow(!show)}}>&#10227;</span>
           <span style={{fontSize:'40px',marginLeft:'320px'}} onClick={()=>{
            deleted(e._id)
           }}>&#9003;</span>
            <img src={e.imageUrl} alt="../img/course3.jpg" />
            <div className="courses-text">
                <h5>{e.name}</h5>
                 <h5>{e.date.slice(0,10)}</h5>
                 <h5>{e.time}</h5>
            </div> {show&&(
              <div>
            <input className='input'  type='date' 
            onChange={(e)=>{setDate(e.target.value)}}
            
            /> 
          
             <button onClick={()=>{
              updated(e._id)
              setShow(!show)
            }}>UPDATE</button>
            </div>
            )}

                    <button className='outline-btn'>SEE MORE !</button>  
        </div>)}

       
    </section>

    </section>
    <section>
        <div id='Heading'>
     
     <h1>SPECTACLE</h1>
   </div>
        <section className="courses-spectacle">
       {events.filter(e=>e.category==="SPECTACLE").map((e,i)=>
         <div className="rowwspec" key={i}>
         <span style={{fontSize:'40px'}} onClick={()=>{setShow(!show)}}>&#10227;</span>
           <span style={{fontSize:'40px',marginLeft:'320px'}} onClick={()=>{
            deleted(e._id)
           }}>&#9003;</span>
           
          
            <img src={e.imageUrl} alt="../img/course3.jpg" />
            <div className="courses-textcpec">
                <h5>{e.name}</h5>
                 <h5>{e.date.slice(0,10)}</h5>
                 <h5>{e.time}</h5>
            </div>
            {show&&(
              <div>
            <input className='input'  type='date' 
            onChange={(e)=>{setDate(e.target.value)}}
            
            /> 
          
             <button onClick={()=>{
              updated(e._id)
              setShow(!show)
            }}>UPDATE</button>
            </div>
            )}

                    <button className='outline-btn'>SEE MORE !</button>   
                    
        </div>)
      
        }

       
    </section>

    </section>
    </div>
  )
}

export default Events