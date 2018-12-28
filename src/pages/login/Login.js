import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, List, WhiteSpace, WingBlank, InputItem, Button, NavBar, Icon } from 'antd-mobile';
import user from '../../assets/images/用户.png'
import pwd from '../../assets/images/密码.png'
// 引入登录样式
import './login.less'
// 引入icon

/* 首页 */
export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[<Icon key="1" type="ellipsis" />]}
        >登录</NavBar>
        <WingBlank size="lg">
          <Flex justify="center" className>
            <p>用户名登录</p>
          </Flex>
          <WhiteSpace size="lg" />
          <InputItem
          placeholder="请输入用户名/手机号"
          >
          <img src={user}/>
          </InputItem>
          <WhiteSpace size="lg" />
          <InputItem
          placeholder="请输入密码"
          >
          <img src={pwd}/>
          </InputItem>
          <WhiteSpace size="lg" />
            <Flex justify="end">
              <Link to="/reg">忘记密码</Link>
            </Flex>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <Button style={{backgroundColor:"#39BC30",borderRadius: "100px",color:"#fff"}}>登录</Button>
          <WhiteSpace size="lg" />
          <Button style={{border:"1px #39BC30 solid",borderRadius: "100px",color:"#39BC30"}}><Link to="/reg">注册</Link></Button>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <Flex justify="center">
            <p className="agreement">我同意此房产登录协议</p>
          </Flex>
        </WingBlank>
      </div>
    )
  }
}