import React from 'react'
import { createMemoryHistory } from 'history'
import Router from './Router'

class MemoryRouter extends React.Component {
    history = createMemoryHistory()
    render() {
        return (
            <Router history={this.history}>
                {this.props.children}
            </Router>
        )
    }
}

export default MemoryRouter