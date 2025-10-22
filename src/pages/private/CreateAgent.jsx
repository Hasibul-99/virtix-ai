
import {
  AppstoreOutlined,
  CloseOutlined,
  MoreOutlined,
  UnorderedListOutlined,
  UserOutlined
} from '@ant-design/icons';
import {
  Alert,
  Avatar,
  Button,
  Card,
  Col,
  Dropdown,
  Row,
  Space,
  Typography
} from 'antd';
import { useEffect, useState } from 'react';
import { useContentApi } from '../../contexts/ContentApiContext';

const { Title, Text } = Typography;

export default function CreateAgent() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const {
    agents,
    loading,
    error,
    fetchAgents,
    refreshAgents
  } = useContentApi();

  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };

  // Fetch agents when component mounts
  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Welcome Banner */}
      {showWelcome && (
        <Alert
          message={
            <div className="text-center">
              <Title level={2} className="!m-0 !mb-3 !text-gray-800">
                Welcome to VIRTIX AI!
              </Title>
              <Text className="text-gray-500 text-base">
                Your AI agent journey starts here — create, train, and launch
                intelligent agents for your website in minutes.
              </Text>
            </div>
          }
          type="info"
          closable
          closeIcon={<CloseOutlined />}
          onClose={() => setShowWelcome(false)}
          className="bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-300 rounded-2xl mb-8 p-6"
        />
      )}

      {/* All Agents Section */}
      <div className="my-10 ">
        <div className="flex items-center justify-between mb-6">
          <Title level={2} className="!m-0 !text-gray-800">
            All Agents
          </Title>
          <Space>
            <Button
              type={viewMode === 'list' ? 'primary' : 'default'}
              icon={<UnorderedListOutlined />}
              onClick={() => setViewMode('list')}
            />
            <Button
              type={viewMode === 'grid' ? 'primary' : 'default'}
              icon={<AppstoreOutlined />}
              onClick={() => setViewMode('grid')}
            />
          </Space>
        </div>

        {/* Agents Grid */}
        {
          agents?.results?.length ? <Row gutter={[24, 24]}>
            {agents.results.map((agent) => (
              <Col
                key={agent.id}
                xs={24}
                sm={12}
                lg={8}
                xl={6}
              >
                <Card
                  hoverable
                  className="rounded-2xl border border-gray-200 h-full"
                  styles={{
                    body: {
                      padding: '24px',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }
                  }}
                >
                  {/* Agent Avatar */}
                  <div className="mb-4">
                    <Avatar
                      size={64}
                      icon={<UserOutlined />}
                      className="bg-gray-100 text-gray-400"
                    />
                  </div>

                  {/* Agent Info */}
                  <div className="flex-1 mb-6">
                    <Title level={4} className="!m-0 !mb-2 !text-gray-800">
                      {agent.agent_name}
                    </Title>
                    <Text className="text-gray-500 text-sm leading-relaxed">
                      {agent.agent_description}
                    </Text>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex items-center justify-between gap-4' >
                    <Button
                      type="primary"
                      className='w-full bg-purple-600 border-purple-600 rounded-lg font-medium hover:bg-purple-700'
                    >
                      Try Now
                    </Button>
                    <Dropdown
                      menu={{
                        items: [
                          { key: '1', label: 'Edit Agent' },
                          { key: '2', label: 'Delete Agent' }
                        ],
                        onClick: handleMenuClick,
                      }}
                      trigger={['click']}
                    >
                      <Button
                        color="default"
                        variant="filled"
                        type="text"
                        icon={<MoreOutlined />}
                        className="text-gray-400"
                      />
                    </Dropdown>
                  </div>
                </Card>
              </Col>
            ))}
          </Row> : null
        }
      </div>
    </div>
  );
}
