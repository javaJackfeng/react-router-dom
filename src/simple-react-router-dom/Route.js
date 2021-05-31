import React from "react"
import matchPath from "./matchPath"
import RouterContext from "./RouterContext"

function isEmptyChildren(children) {
  return React.Children.count(children) === 0
}

class Route extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const location = this.props.location || context.location
          const match = this.props.computedMatch
            ? this.props.computedMatch // <Switch> already computed the match for us
            : this.props.path
            ? matchPath(location.pathname, this.props)
            : context.match
          const props = { ...context, location, match }
          let { children, component, render } = this.props
          if (Array.isArray(children) && isEmptyChildren(children)) {
            children = null
          }

          return (
            <RouterContext.Provider value={props}>
              {props.match
                ? children
                  ? typeof children === "function"
                    ? children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render(props)
                  : null
                : null}
            </RouterContext.Provider>
          )
        }}
      </RouterContext.Consumer>
    )
  }
}

export default Route
