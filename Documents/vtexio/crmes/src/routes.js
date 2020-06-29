import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Corte from './pages/Corte';
import Costureira from './pages/Costureira';
import NewCostureira from './pages/Newcostureira';
import Dashboard from './pages/Dashboard';
import Produto from './pages/Produto';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/corte" component={Corte} />
                <Route path="/costureira" component={Costureira} />
                <Route path="/newcostureira" component={NewCostureira} />
                
                <Route path="/produto" component={Produto} />
            </Switch>
        </BrowserRouter>
    )
}
