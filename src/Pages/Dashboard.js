import React, { useState } from 'react';
import Footer1 from './Footer';
import { DashboardTwoTone } from '@ant-design/icons';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  TeamOutlined,UserOutlined,
  ProductOutlined,UsergroupAddOutlined 
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import Stockchart from './Stockchart';
import Currentstock from './Currentstock';
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
  
  getItem(<Link to="/Stocktable">Salestock</Link>, '2', <ProductOutlined/>),
  getItem(<Link to="/Inventory">Products</Link>, '2', <ProductOutlined/>),
  
  getItem(<Link to="/Vendors">Vendors</Link>,'3',<UsergroupAddOutlined />)
 
];


const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  
    
    
  


  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
         {/*  <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Link to="/" style={{float:"right"}}><LogoutIcon/></Link>
          <h1>Welcome to Tamizh Shirt Collection</h1> 
          <br>
          </br> 
          <br>
          </br> 
<p style={{fontSize:"20px"}}>Our shop's shirt collection is a vibrant fusion of style and comfort, curated to suit diverse tastes and occasions. From timeless classics like crisp white button-ups to trendy patterns and bold colors, each piece is crafted with quality materials and attention to detail. Whether you're dressing for a casual outing or a formal event, our collection offers something for everyone, ensuring you look and feel your best wherever you go.</p>
          </div>
          <center>
              <h1>Old Stock</h1>
          <Stockchart/>
          </center>
          <h1>Current Stock</h1>
          <Currentstock/> 
        </Content>
        <div ><Footer1 ></Footer1></div>
      </Layout>
     
      
      
    </Layout>
  );
};
export default Dashboard;