import React from "react"
// import {
//     BrowserRouter,
//     Link,
//     Route,
//     Switch
// } from "react-router-dom"

import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from './simple-react-router-dom'

import HomePage from "./HomePage"
import UserPage from "./UserPage"
import ProductPage from "./ProductPage"
import _404Page from "./_404Page"
class RouterPage extends React.Component {
  render() {
    return (
      <div>
        <h1>RouterPage</h1>
        <BrowserRouter>
          <nav>
            <Link to="/">首页</Link> &nbsp;
            <Link to="/user">用户中心</Link> &nbsp;
            <Link to="/product/123">产品</Link> &nbsp;
            <Link to="/test">404</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={UserPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route component={_404Page} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default RouterPage
