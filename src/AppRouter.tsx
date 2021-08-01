import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dash from './pages/create-post'
import Home from './pages/home-page'

const AppRouter:React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dash" component={Dash} />
            </Switch>
        </Router>
    )
}

export default AppRouter
