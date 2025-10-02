import {
  LaptopOutlined, LeftOutlined,
  NotificationOutlined,
  RightOutlined, UserOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Cookies from 'js-cookie';
import { ClipboardMinus, Files, LayoutDashboard, MessageCircleReply, Settings, SquareChartGantt, Users } from 'lucide-react';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: Array.from({ length: 4 }).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
export default function PrivateLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const token = Cookies.get('kotha_token')

  // useEffect(() => {
  //   if (token) {
  //     window.location = '/chat'
  //   }
  // }, [token])

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }} className='!pl-4' >
        <Button
          type="text"
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
          className='!bg-gray-200 rounded-lg mr-4'
        />
        <div className="demo-logo font-semibold text-2xl" >Agent name</div>

      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }} trigger={null} collapsible collapsed={collapsed}>
          <Menu
            className='!mt-6'
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderInlineEnd: 0 }}
            items={[
              { key: '1', icon: <LayoutDashboard />, label: <Link to={'/dashboard'}>Dashboard</Link> },
              { key: '2', icon: <MessageCircleReply />, label: <Link to={'/dashboard'}>Chat History</Link> },
              { key: '3', icon: <SquareChartGantt />, label: <Link to={'/dashboard'}>Manage Prompts</Link> },
              { key: '4', icon: <Files />, label: <Link to={'/dashboard'}>Manage Data Files</Link> },
              { key: '5', icon: <Users />, label: <Link to={'/dashboard'}>Customers</Link> },
              { key: '6', icon: <Settings />, label: <Link to={'/dashboard'}>Agent Settings</Link> },
              { key: '7', icon: <ClipboardMinus />, label: <Link to={'/dashboard'}>Reports</Link> },
            ]}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: '88vh',
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>

  )
}