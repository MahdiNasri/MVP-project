import React from 'react'
import bg from '../img/bg.png'
import { Tilt } from 'react-tilt'

const Home = () => {
  return (
    <section className="home" id="home">
    <div className="home-text">
        <h6>Unleash the Power of Extraordinary Events</h6>
        <h1> Welcome to TwensaEvents</h1>
        <p> Discover your dream event with TwensaEvents.</p>
       
    </div>
    <div className="home-img">
    <Tilt options={{ max: 35 , scale:1.02 }}>
        <img src={bg} />
        </Tilt>
    </div>
</section>
  )
}

export default Home