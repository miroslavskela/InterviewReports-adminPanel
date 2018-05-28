import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WelcomePage from './app/login/WelcomePage'
import UserRoute from './app/routes/UserRoute';
import GuestRoute from './app/routes/GuestRoute'
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Switch ,Route} from 'react-router-dom'
ReactDOM.render(
<HashRouter>
<Fragment>
                <Switch>
                    <Route  path="/login" component={GuestRoute(WelcomePage)} />
                    <Route path="/" component={UserRoute(App)} />
                </Switch>
            </Fragment>
</HashRouter>
, document.getElementById('root'));
registerServiceWorker();
