import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/Login' //登录
import Reg from './pages/reg/Reg' //注册
import Nav from './pages/nav/Nav' //导航页面
import Error404 from './pages/error404/Error404'//错误页面


export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Nav} ></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/reg' component={Reg}></Route>
                <Route component={Error404}></Route>
            </Switch>
        </HashRouter>
      </div>
    )
  }
}
