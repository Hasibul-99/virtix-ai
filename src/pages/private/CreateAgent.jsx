
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

  console.log("agents", agents);

  // Fetch agents when component mounts
  useEffect(() => {
    fetchAgents();
  }, []);

  const agentsL = [
    {
      id: 1,
      name: "Agent name",
      description: "You can ask me something like: \"what's going on today in stock market\".",
      avatar: null
    },
    {
      id: 2,
      name: "Agent name",
      description: "You can ask me something like: \"what's going on today in stock market\".",
      avatar: null
    },
    {
      id: 3,
      name: "Agent name",
      description: "You can ask me something like: \"what's going on today in stock market\".",
      avatar: null
    },
    {
      id: 4,
      name: "Agent name",
      description: "You can ask me something like: \"what's going on today in stock market\".",
      avatar: null
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '16px 24px' }}>
      {/* Welcome Banner */}
      {showWelcome && (
        <Alert
          message={
            <div style={{ textAlign: 'center' }}>
              <Title level={2} style={{ margin: '0 0 12px 0', color: '#1f2937' }}>
                Welcome to VIRTIX AI!
              </Title>
              <Text style={{ color: '#6b7280', fontSize: '16px' }}>
                Your AI agent journey starts here — create, train, and launch
                intelligent agents for your website in minutes.
              </Text>
            </div>
          }
          type="info"
          closable
          closeIcon={<CloseOutlined />}
          onClose={() => setShowWelcome(false)}
          style={{
            background: 'linear-gradient(to right, #f3e8ff, #dbeafe)',
            border: '1px solid #c084fc',
            borderRadius: '16px',
            marginBottom: '32px',
            padding: '24px'
          }}
        />
      )}

      {/* All Agents Section */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px'
        }}>
          <Title level={2} style={{ margin: 0, color: '#1f2937' }}>
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
        <Row gutter={[24, 24]}>
          {agentsL.map((agent) => (
            <Col
              key={agent.id}
              xs={24}
              sm={12}
              lg={8}
              xl={6}
            >
              <Card
                hoverable
                style={{
                  borderRadius: '16px',
                  border: '1px solid #f0f0f0',
                  height: '100%'
                }}
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
                <div style={{ marginBottom: '16px' }}>
                  <Avatar
                    size={64}
                    icon={<UserOutlined />}
                    style={{ backgroundColor: '#f5f5f5', color: '#8c8c8c' }}
                  />
                </div>

                {/* Agent Info */}
                <div style={{ flex: 1, marginBottom: '24px' }}>
                  <Title level={4} style={{ margin: '0 0 8px 0', color: '#1f2937' }}>
                    {agent.name}
                  </Title>
                  <Text style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5' }}>
                    {agent.description}
                  </Text>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: '#7c3aed',
                      borderColor: '#7c3aed',
                      borderRadius: '8px',
                      fontWeight: 500
                    }}
                  >
                    Try Now
                  </Button>
                  <Dropdown
                    menu={{
                      items: [
                        { key: '1', label: 'Edit Agent' },
                        { key: '2', label: 'Delete Agent' },
                        { key: '3', label: 'Duplicate Agent' }
                      ]
                    }}
                    trigger={['click']}
                  >
                    <Button
                      type="text"
                      icon={<MoreOutlined />}
                      style={{ color: '#8c8c8c' }}
                    />
                  </Dropdown>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
