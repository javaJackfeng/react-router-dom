import React from 'react'
import RouterContext from './RouterContext'


export const resolveToLocation = (to, currentLocation) =>
  typeof to === "function" ? to(currentLocation) : to;

class Link extends React.Component {
    static contextType = RouterContext
    handleClick = (e) => {
        try {
            e.preventDefault()
            const { replace = false } = this.props
            const location = resolveToLocation(this.props.to, this.context.location)
            let method = this.context.history.push
            if (replace) {
                method = this.context.history.replace
            }
            
            console.log('method', this.context)
            if (typeof method === 'function') {
                method(location)
            }
        } catch (ex) {
            e.preventDefault();
            throw ex;
        }
    }
    render() {
        const { children, to, ...restProps } = this.props
        return (
            <a href={to} onClick={this.handleClick} {...restProps}>
                {children}
            </a>
        )
    }
}

export default Link