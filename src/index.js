import React from 'react';
import {render} from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './containers/App';
import AddFoodMenu from './components/AddFoodMenu'
import AddDrinkMenu from './components/AddDrinkMenu'
import registerServiceWorker from './registerServiceWorker';

const router = (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={browserHistory}>
            <Route path='/'>
                <Route path='/list' component={ App } />
                <Route path='/addFoodMenu' component={ AddFoodMenu } />
                <Route path='/addDrink' component={ AddDrinkMenu } />
                <IndexRedirect to = '/list' />
            </Route>
        </Router>
    </ MuiThemeProvider>
)

render(router, document.getElementById('root'));
registerServiceWorker();