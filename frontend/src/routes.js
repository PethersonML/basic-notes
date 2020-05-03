import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Notes from './pages/Notes';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Notes} />
            </Switch>
        </BrowserRouter>
    )
}