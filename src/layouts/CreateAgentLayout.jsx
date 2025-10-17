
import {
  LeftOutlined,
  LogoutOutlined,
  RightOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, message, theme } from 'antd';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header } = Layout;

export default function CreateAgentLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = async () => {
    try {
      message.loading('Logging out...', 0.5);
      // Add your logout logic here
      // await logoutUser();
      navigate('/signin');
    } catch (error) {
      console.error('Logout error:', error);
      message.error('Logout failed. Please try again.');
    }
  };

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  return (
    <div>
      <Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }} className='!pl-4' >
        <Button
          type="text"
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          size='large'
          style={{
            fontSize: '16px',
          }}
          className='!bg-gray-200 rounded-lg mr-4'
        />
        <div className="demo-logo font-semibold text-2xl" >Agent name</div>

        <div className='ml-auto'>
          <Dropdown
            menu={{
              items: userMenuItems,
              onClick: ({ key }) => {
                const item = userMenuItems.find(item => item.key === key);
                if (item && item.onClick) {
                  item.onClick();
                }
              }
            }}
            placement="bottomRight"
            arrow
          >
            <Avatar
              size="large"
              shape="square"
              icon={<UserOutlined />}
              className="cursor-pointer hover:bg-gray-100 transition-colors"
            />
          </Dropdown>
        </div>
      </Header>
      <Outlet />
    </div>
  )
}
