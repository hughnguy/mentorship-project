import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import {Home} from './pages/Home';
import {Example} from './pages/Example';

const HOME_ROUTE = "/";
const EXAMPLE_ROUTE = "/example";

export const Router = () => {
    return (
        <Switch>
            <Route path={EXAMPLE_ROUTE}>
                <Example/>
            </Route>
            <Route path={HOME_ROUTE}>
                <Home/>
            </Route>
        </Switch>
    );
};
