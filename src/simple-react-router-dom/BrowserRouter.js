import React from 'react'
import Router from './Router'
import { createBrowserHistory } from 'history'


class BrowserRouter extends React.Component {
    history = createBrowserHistory()
    render() {
        return <Router history={this.history} >
            {this.props.children}
        </Router>
    }
}

export default BrowserRouter