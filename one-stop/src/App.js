import React, { Component } from 'react';
import fire from './config/fire';

//Reset CSS
import 'reset-css';

//Components
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: {}
    }

    this.authListener = this.authListener.bind(this);
  }

  //Lifecycle hooks
  componentDidMount(){
    this.authListener();
  }

  //Listens to check if user is logged in
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
        { this.state.user ? (<Home />) : (<LandingPage />)}
      </div>
    );
  }
}

export default App;
