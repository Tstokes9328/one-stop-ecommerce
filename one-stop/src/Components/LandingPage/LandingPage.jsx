import React, {Component} from 'react'
import fire from '../../config/fire';

//React Reveal
import Fade from 'react-reveal/Fade';

//Styling
import './LandingPage.css';

class landingPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }


  render(){
  return (
    <div className="landingPage-container">

        <nav className="landing-navbar">
          <h1>os.</h1>
        </nav>

        <Fade duration={1500} delay={500}>
        <section className="landing-body-container">
          <h1>One Stop.</h1>
          <Fade duration={1500} delay={1500}>
          <form className="login-container">

            <input type="email" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email}/>

            <input type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password}/>

            <div className="login-btn-container">
              <button type="sumbmit" onClick={this.login}>Log In</button>
              <button onClick={this.signup}>Sign Up</button>
            </div>
          </form>
          </Fade>
        </section>
        </Fade>
    </div>
  )
}
}

export default landingPage;