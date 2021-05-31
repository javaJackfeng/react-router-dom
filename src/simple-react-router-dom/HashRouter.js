import React from 'react'
import { createHashHistory } from 'history'
import Router from './Router'

class HashRouter extends React.Component {
    history = createHashHistory()
    render() {
        return (
            <Router history={this.history}>
                {this.props.children}
            </Router>
        )
    }
}

export default HashRouter