import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import LandingPage from './Components/LandingPage/LandingPage';

export default (
    <Switch>
        <Route exact path='/' component={LandingPage}/>
    </Switch>
)