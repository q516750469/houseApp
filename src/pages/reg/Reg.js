import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, List, WhiteSpace, WingBlank, InputItem, Button, Checkbox, NavBar,Icon } from 'antd-mobile';
// 引入登录样式
import './Reg.less'

const AgreeItem = Checkbox.AgreeItem;

/* 首页 */
export default class Reg extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[<Icon key="1" type="ellipsis" />]}
        >注册</NavBar>
        <WingBlank size="lg">
          <Flex justify="center" className>
            <p>用户名注册</p>
          </Flex>
          <WhiteSpace size="lg" />
          <InputItem
          placeholder="请输入用户名/手机号"
          >
          </InputItem>
          <WhiteSpace size="lg" />
          <InputItem
          placeholder="请输入密码"
          type="password"
          >
          </InputItem>
          <WhiteSpace size="lg" />
          <InputItem
          placeholder="请确认密码"
          type="password"
          >
          </InputItem>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                我同意 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>xx房产服务协议</a>和<a>隐私权服务协议</a>
              </AgreeItem>
            </Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <Button style={{backgroundColor:"#E6E6E6",borderRadius: "100px",color:"#fff"}}>立即注册</Button>
          <WhiteSpace size="lg" />
          <Link to="/login">已有账号，请登录</Link>
        </WingBlank>
      </div>
    )
  }
}