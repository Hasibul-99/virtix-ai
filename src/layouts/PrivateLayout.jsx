import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Cookies from 'js-cookie';
import { ClipboardMinus, Files, LayoutDashboard, MessageCircleReply, Settings, SquareChartGantt, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import UserMenu from '../components/common/privateLayout/UserMenu';
import { getAgentById } from '../scripts/api-service';
const { Header, Content, Sider } = Layout;

export default function PrivateLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const token = Cookies.get('kotha_token')

  // Fetch agent data by ID using api-service
  const fetchAgent = async () => {
    if (!id) return;

    try {
      setLoading(true);
      const agentData = await getAgentById(id);
      setAgent(agentData);
    } catch (error) {
      console.error('Error fetching agent:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      window.location = '/'
    } else {
      fetchAgent();
    }
  }, [token, id])


  return (
    <Layout>
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
        <div className="demo-logo font-semibold text-2xl">
          {loading ? 'Loading...' : (agent?.agent_name || 'Agent name')}
        </div>

        <div className='ml-auto'>
          <UserMenu />
        </div>
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
              { key: '1', icon: <LayoutDashboard />, label: <Link to={`/${id}/dashboard`}>Dashboard</Link> },
              { key: '2', icon: <MessageCircleReply />, label: <Link to={`/${id}/dashboard/chat-history`}>Chat History</Link> },
              { key: '3', icon: <SquareChartGantt />, label: <Link to={`/${id}/dashboard/manage-prompts`}>Manage Prompts</Link> },
              { key: '4', icon: <Files />, label: <Link to={`/${id}/dashboard/manage-files`}>Manage Files</Link> },
              { key: '5', icon: <Users />, label: <Link to={`/${id}/dashboard/customers`}>Customers</Link> },
              { key: '6', icon: <Settings />, label: <Link to={`/${id}/dashboard/agent-settings`}>Agent Settings</Link> },
              { key: '7', icon: <ClipboardMinus />, label: <Link to={`/${id}/dashboard`}>Reports</Link> },
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