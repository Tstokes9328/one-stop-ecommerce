import React, { Component } from 'react'
import fire from '../../config/fire';

export default class Home extends Component {
    constructor(){
        super()

        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }

  render() {
    return (
      <div>
        this is home
        <button onClick={() => this.logout()}>Sign out</button>
      </div>
    )
  }
}
