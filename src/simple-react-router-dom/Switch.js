import React from 'react'
import RouterContext from './RouterContext'
import matchPath from './matchPath'

class Switch extends React.Component {
    render() {
        return (
            <RouterContext.Consumer>
                {context => {
                    const location = this.props.location || context.location
                    let element, match
                    React.Children.forEach(this.props.children, child => {
                        if (match == null && React.isValidElement(child)) {
                            element = child
                            const path = child.props.path || child.props.from
                            match = path ? matchPath(location.pathname, {...child.props, path }) : context.match
                        }
                    })

                    return match ? React.cloneElement(element, {location, computedMatch: match}) : context.match
                }}
            </RouterContext.Consumer>
        )
    }
}

export default Switch