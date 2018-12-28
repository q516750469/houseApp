import React from 'react';
import ReactDOM from 'react-dom';
// 引入大组件
import App from './App';
// 引入全局样式
import './index.less'
// 引入ant design全局样式
import 'antd-mobile/dist/antd-mobile.css';

// 视口
ReactDOM.render(<App />, document.getElementById('root'));
