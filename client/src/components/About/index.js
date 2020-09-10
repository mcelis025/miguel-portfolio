import React from "react";

function About() {
  return (
    <div>  
      <h1 className="center">about.</h1>
      <div className="row">
        <div className="col s4">
          <img src="images/miguel.jpg" alt="miguel"></img>
        </div>
        <div className="col s8">
          <p>Are you in need of a highly reliable and motivated team member? Throughout the 4 years of my military career, I learned what it means to be part of a team. Communication, discipline, and integrity are key qualities that helped me be successful and qualities that I will bring to future teams. I am looking for a position as a web developer to put those skills into practice.</p>
          <p>My military career has taught me to work in an environment that can change at any moment. I have been recognized by Senior Management as Airman, employee, of the Quarter due to my excellent management and problem-solving skills. I have led operations with teams that maintained accountability over items valued at $935M.</p>
          <p>I truly believe that the work ethic and skills I have acquired throughout my life will provide a unique perspective to any team! Allow me to show you how great of an addition I can be in your team!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
