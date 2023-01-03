import React, { useEffect, useState } from 'react'
import {
  PieChartOutlined,
  UserOutlined,
  UnorderedListOutlined,
  DownOutlined,
  CarOutlined,
  GroupOutlined,
  BankOutlined,
  AppstoreOutlined,
  FileProtectOutlined,
  AccountBookOutlined,
  ExportOutlined,
  ReadOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, Dropdown, Space } from 'antd';
import './MainLayout.css'
import RoutesMain from '../../routes/main.routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { useRouter } from 'next/router';
import logo from '../../Assets/logo_copy.png'
import SubMenu from 'antd/lib/menu/SubMenu';
import avatar from '../../Assets/avatar.png';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  let { path, url } = useRouteMatch();

  const history = useHistory()
  const logOut = () => {
    history.push('/')
    sessionStorage.clear()
  }
  const menu = () => {
    return (
      <Menu>
        <Menu.Item>
          <Button onClick={logOut}><ExportOutlined /> Logout</Button>
        </Menu.Item>
      </Menu>
    )
  }

  // useEffect(()=>{
  //     if(!sessionStorage.getItem('accessToken')) {
  //         history.push('/')
  //     }
  // },[])

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Layout>
        <Sider collapsible collapsed={collapsed} theme="light"
          className='left-menu'
          onCollapse={(value) => setCollapsed(value)}>

          <div className="logo"> <img className='logo-admin' src={logo} /></div>
          <Menu className='menu-layout' defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="/Dashboard" icon={<PieChartOutlined />}> <a href={`${url}/Dashboard`} >  Dashboard </a> </Menu.Item>

            <Menu.Item key="/Category" icon={<AppstoreOutlined />} > <a href={`${url}/category-management`} > Quản lý Danh Mục</a> </Menu.Item>

            <Menu.Item key="/CategoryList" icon={<AppstoreOutlined />} > <a href={`${url}/category-list-management`} > Quản lý List Danh Mục</a> </Menu.Item>

            <Menu.Item key="/CategoryItem" icon={<AppstoreOutlined />} > <a href={`${url}/category-item-management`} > Quản lý Item Danh Mục</a> </Menu.Item>
            
            <Menu.Item key="/Product" icon={<AppstoreOutlined />} > <a href={`${url}/product-management`} > Quản lý Sản phẩm</a> </Menu.Item>
            
            <Menu.Item key="/TourCode" icon={<AppstoreOutlined />} > <a href={`${url}/tourcode-management`} > Quản lý Danh sách tour</a> </Menu.Item>
            
            <Menu.Item key="/Checkout" icon={<AppstoreOutlined />} > <a href={`${url}/checkout-management`} > Quản lý Đặt tour</a> </Menu.Item>

            {/* <SubMenu key={'/cate-management'} title="Quản lý Danh mục" icon={<UnorderedListOutlined />}>
              <Menu.Item key="/tour-management" icon={<GroupOutlined />}> <a href={`${url}/tour-management`} > Quản lý Tour </a> </Menu.Item>
              <Menu.Item key="/hotel-management" icon={<BankOutlined />}> <a href={`${url}/hotel-management`} >Quản lý Khách sạn </a> </Menu.Item>
              <Menu.Item key="/vehicle-management" icon={<CarOutlined />}> <a href={`${url}/vehicle-management`} >Quản lý Phương tiện </a> </Menu.Item>
            </SubMenu> */}

            
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background layout-header">
            <div className='header-item'>
              <Dropdown overlay={menu}>
                <a onClick={e => e.preventDefault()}>
                  <Space >
                    {/* <div ><img className='avatar' src={avatar} /></div>
                    <div className='user_name'>{sessionStorage.getItem('user_name')}
                      <DownOutlined />
                    </div> */}
                  </Space>
                </a>
              </Dropdown>

            </div>
          </Header>

          <Content
            style={{
              margin: '0 16px',
              padding: '0 12px'
            }}
          >

            <div
              className="site-layout-background main-layout"
              style={{
                minHeight: 360,
              }}
            >
              <RoutesMain />

            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout
