import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import axios from 'axios'
const Nav = () => {
  const [modalIsOpen, setIsOpen]  = useState(false)
  const [imageUrl,setImageUrl] = useState('')
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [date,setDate] = useState(new Date())
  const [time,setTime] = useState('')
  const [location,setLocation] = useState('')
  const [price,setPrice] = useState(0)
  const [category,setCategory] = useState('')


  let subtitle;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const add = () => {
    axios.post(`http://localhost:3001/api/events`,{
      imageUrl:imageUrl,
            name:name,
            description:description,
            date:date,
            time:time,
            location:location,
            price:price,
            category:category
         
 
    }).then((response)=>{
    }).catch((err)=>{
      console.log(err)
    })
  }
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
   
      <div className="container">
        <nav className="navbar" data-navbar>
          <a href="http://127.0.0.1:3000/" className="logo">TwensaEvents</a>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link">About</a>
            </li>
            <li className="navbar-item">
              <a href="#Heading" className="navbar-link">Event</a>
            </li>
          
          </ul>

          <button className="add-event-button" onClick={openModal}>Add Event</button>
          <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>ADD YOUR EVENT </h2>
      <input type='text' placeholder='image url' onChange={(e)=>{setImageUrl(e.target.value)}}/>
      <input type='text'  placeholder='name' onChange={(e)=>{setName(e.target.value)}}/>
      <input type='text'  placeholder='description' onChange={(e)=>{setDescription(e.target.value)}}/>
      <input type='date'  placeholder='date' onChange={(e)=>{setDate(e.target.value)}}/>
      <input type='text'  placeholder='time' onChange={(e)=>{setTime(e.target.value)}}/>
      <input type='text'  placeholder='location'onChange={(e)=>{setLocation(e.target.value)}}/>
      <input type='number'  placeholder='price' onChange={(e)=>{setPrice(e.target.value)}}/>
      <input type='text'  placeholder='category' onChange={(e)=>{setCategory(e.target.value)}}/>
      <button onClick={()=>{
        add()
                closeModal()
                window.location.reload();
       
      }}>SUBMIT</button>
      <button onClick={closeModal}>CLOSE</button>
        
      </Modal>
        </nav>
      </div>
  
  );
}

export default Nav;
