import React, { useState } from 'react';

import { DashboardTwoTone } from '@ant-design/icons';
import {
  TeamOutlined,UserOutlined,
  ProductOutlined,UsergroupAddOutlined 
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


/* function handleClick(){
  
  Navigate('/home/inventory')
} */



const items = [
  getItem(<Link to="/Dashboard">Dashboard</Link>, '1', <DashboardTwoTone />), 
  /* getItem('Details', 'sub1', <UserOutlined />, [
    getItem('Product', '3'),
    getItem('vendors', '4'),
  ]), */
  getItem(<Link to="/Stocktable">Salestock</Link>, '2', <ProductOutlined/>),
  getItem(<Link to="/Inventory">Products</Link>, '2', <ProductOutlined/>),
  getItem(<Link to="/Vendors">Vendors</Link>,'3',<UsergroupAddOutlined />)
 
];


const Slider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        maxHeight:'contents',
        display:"flex"
       
      }}
    >
      <Sider /* collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} */>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      
    </Layout>
  );
};
export default Slider;