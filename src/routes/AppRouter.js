import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Users from '../components/Users/Users';
import NewUser from '../components/Users/NewUser';
import NotFound from '../components/NotFound';
import Login from '../components/Login';

import createHistory from 'history/createBrowserHistory';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className='container'>
            <Switch>
                <PublicRoute path="/" component={Login} exact={true} />
                <PrivateRoute path="/users" component={Users} exact={true} />
                <PrivateRoute path="/users/new" component={NewUser} exact={true} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
