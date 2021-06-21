import React from "react"
import RouterContext from "./RouterContext"

class Router extends React.Component {
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" }
  }
  constructor(props) {
    super(props)
    this.state = { location: props.history.location }
    this.unlisten = props.history.listen((location) => {
      this.setState({ location: location })
    })
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten()
    }
  }

  render() {
    return (
      <RouterContext.Provider
        value={{
          location: this.state.location,
          history: this.props.history,
          match: Router.computeRootMatch(this.state.location.pathname),
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}

export default Router
