import React from "react";



const About = () => {
    return (
      <div className="container">
        
        <h2 className="about-title">About Us</h2>
        <p className="about">We are a real salon that exists. We do lots of cool stuff to people's hair that looks good.</p>
        
        <h3 className="stylist-title">Meet our Stylists:</h3>
      
        <div className="column">
          <div className="stylist">
            <h1 className="stylist-name">Jolisna Yuhashi</h1>
            <img src="/images/jolisna.jpg" alt="Jolisna Yuhashi" width="500" height="600"></img>
            <p>Jolisna is one of our best hair stylists, who specializes in styling hair. She holds a degree from Southeastern North Dakota Community Beauty College where she graduated top of her class and patented her famousand popular "Flock of Golden Eagles" hairstyle.
              She also enjoys going on walks with her dog, Chinese food, and plotting world domination with her spouse and children.
            </p>
          </div>
        </div>


        <div className="column">
          <div className="stylist">
            <h1 className="stylist-name">Kylie Roesbery</h1>
            <img src="/images/kylie.jpg" alt="Kylie Roesbery" width="500" height="600"></img>
            <p>Before working at SalonMe, Kylie worked as a stylist on various movie sets, most notably Star Wars, Top Gun, October Sky, Interstellar, and even had a cameo in Boogie Nights. She has also worked as a stylist for various
              U.S. Presidents. She decided to step down from these more prominent roles because she thinks this salon and everyone else who works there is so awesome. The stocked fridge full of salami was also difficult to turn down.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="stylist">
            <h1 className="stylist-name">Mary Doutis</h1>
            <img src="/images/mary.jpg" alt="Mary Doutis" width="500" height="600"></img>
            <p>When Mary isn't working hard in the salon, she can be found at home writing. She has published several books, such as "Hairstyling for Dummies," "Particle Physics for Dummies," "How to Successfully Pull Off the Shoelace-Tying Prank Without Being Noticed,"
              and she is currently working on a spinoff series loosely based on Frank Herbert's "Dune." She excels at hair color, and encourages everyone to dye their hair purple, her favorite color.
            </p>
          </div>
        </div>
    </div>
  );
};




export default About;

