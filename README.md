## 实现简单的react-router-dom

> 思路： 通过url的变化， 触发相应页面渲染。

> 创建一个全局唯一的<Router>组件，做为顶级组件， 提供一个context包含{ location, match, history }字段。
> 点击路由（Link）跳转时， Router会根据url 去 match 相应的路由(Route), 匹配正确的路由渲染。
> 路由（Route）提供3种props方式渲染组件： children，component， render
> Switch 保证每次只有一个路由渲染

*这里Router使用 BrowserRouter*

[博文](https://juejin.cn/post/6968353259215912974)