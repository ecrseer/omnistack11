import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Registro from './pages/Registro';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncidente';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/registro"  component={Registro}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidentes/new" component={NewIncident}/>

            </Switch>
        </BrowserRouter>
    )
}