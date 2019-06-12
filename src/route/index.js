import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from '../components/main';
import Login from '../components/login';
import Registration from '../components/registration';
import BotsGallery from '../components/bots';
import Forgot from '../components/forgot';
import ForgotComplete from '../components/forgot-complete';
// import Other from '../components/other';
import Header from '../components/partials/header';
import figuresAuth from '../components/partials/figuresAuth'
import figuresBots from '../components/partials/figuresBots'
import figuresMain from '../components/partials/figuresMain'


function AppRouter() {
    return (
        <Router>
            <Header />
            <main>
                <Route path="/" exact component={figuresMain} />                
                <Route path="/" exact component={Main} />
                <Route path="/login" component={figuresAuth} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={figuresAuth} />
                <Route path="/registration" component={Registration} />
                <Route path="/bots" component={figuresBots} />                
                <Route path="/bots" component={BotsGallery} />
                <Route path="/forgot" exact component={figuresAuth} />
                <Route path="/forgot" exact component={Forgot} />
                <Route path="/complete" component={figuresAuth} />
                <Route path="/complete" component={ForgotComplete} />

            </main>
        </Router>
    );
}

export default AppRouter;
