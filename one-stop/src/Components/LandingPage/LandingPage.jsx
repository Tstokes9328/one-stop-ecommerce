import React from 'react'

//React Reveal
import Fade from 'react-reveal/Fade';

//Styling
import './LandingPage.css';

function landingPage(){
  return (
    <div className="landingPage-container">

        <nav className="landing-navbar">
          <h1>os.</h1>
        </nav>

        <Fade left duration={1500} delay={500}>
        <section className="landing-body-container">
          <h1>One Stop.</h1>
          <Fade left delay={1000}>
          <button>Enter</button>
          </Fade>
        </section>
        </Fade>
    </div>
  )
}

export default landingPage;