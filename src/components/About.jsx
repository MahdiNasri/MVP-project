import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="About_container">
      <div id='Heading' >
     
     <h1 >ABOUT US</h1>
   </div>
   <section>
        <p>TwensaEvents is a website dedicated to buy tickets for events in Tunisia. Whether you're looking for music festivals, art exhibits, or sports events, we've got you covered.</p>
        <div className="icon-row">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/3844/3844724.png" alt="Music Icon" />
            <h3>Music Festivals</h3>
          </div>
          <div className="icon">
            <img src="https://media.istockphoto.com/id/1155278164/vector/theatrical-masks-set.jpg?s=612x612&w=0&k=20&c=WH0oQRqYG8BsOTFt7x-uuGB7vi5lXECPoNIy1CTZ-Xc=" alt="Art Icon" />
            <h3>Art Exhibits</h3>
          </div>
          
        </div></section>
      </div>
    </section>
  );
}

export default About;
