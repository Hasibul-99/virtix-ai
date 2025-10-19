
import {
  ArrowLeftOutlined,
  LogoutOutlined,
  SettingOutlined,
  UploadOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Avatar, Button, Divider, Dropdown, Form, Input, Layout, message, Modal, Select, theme, Typography, Upload } from 'antd';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input;

export default function CreateAgentLayout() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const token = Cookies.get('kotha_token');

  useEffect(() => {
    if (!token) {
      window.location = '/'
    }
  }, [token])

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

  const handleModalClose = () => {
    setOpen(false);
    setCurrentStep(1);
    form.resetFields();
  };

  const handleNext = () => {
    form.validateFields().then(() => {
      setCurrentStep(2);
    }).catch(() => {
      message.error('Please fill in all required fields');
    });
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleCreate = () => {
    form.validateFields().then((values) => {
      console.log('Form values:', values);
      message.success('Agent created successfully!');
      handleModalClose();
    }).catch(() => {
      message.error('Please fill in all required fields');
    });
  };

  const uploadProps = {
    name: 'file',
    multiple: false,
    beforeUpload: (file) => {
      const isValidType = file.type === 'application/pdf' ||
        file.type === 'application/msword' ||
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      if (!isValidType) {
        message.error('You can only upload PDF, DOC, or DOCX files!');
      }
      return false; // Prevent auto upload
    },
    onChange: (info) => {
      console.log('File info:', info);
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
        <Link to="/" className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              src="/assets/logo/Logo.png"
              alt="VIRTIS AI"
              className="h-8 w-auto"
            />
          </div>
        </Link>

        <div className='ml-auto space-x-4'>
          <Button type="primary" onClick={() => { setOpen(true) }}>Create Agent</Button>
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

      <Modal
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {currentStep === 2 && (
              <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={handleBack}
                style={{ padding: '4px' }}
              />
            )}
            <span>Create agent</span>
          </div>
        }
        open={open}
        footer={null}
        onCancel={handleModalClose}
        width={600}
        styles={{
          body: { padding: '24px' }
        }}
      >
        <Form
          form={form}
          layout="vertical"
          style={{ marginTop: '16px' }}
        >
          {currentStep === 1 && (
            <>
              {/* Step 2: Agent Configuration */}
              <Form.Item
                label="Agent name"
                name="agentName"
                rules={[{ required: true, message: 'Please enter agent name' }]}
              >
                <Input
                  placeholder="Write"
                  size="large"
                  style={{ borderRadius: '8px' }}
                />
              </Form.Item>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <Form.Item
                  label="LLM Engine"
                  name="llmEngine"
                  style={{ flex: 1 }}
                  rules={[{ required: true, message: 'Please select LLM engine' }]}
                >
                  <Select
                    placeholder="Select"
                    size="large"
                    style={{ borderRadius: '8px' }}
                    options={[
                      { value: 'gpt-4', label: 'GPT-4' },
                      { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
                      { value: 'claude-3', label: 'Claude 3' },
                      { value: 'gemini-pro', label: 'Gemini Pro' }
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  label="Creativity level"
                  name="creativityLevel"
                  style={{ flex: 1 }}
                  rules={[{ required: true, message: 'Please select creativity level' }]}
                >
                  <Select
                    placeholder="Select"
                    size="large"
                    style={{ borderRadius: '8px' }}
                    options={[
                      { value: 'low', label: 'Low' },
                      { value: 'medium', label: 'Medium' },
                      { value: 'high', label: 'High' },
                      { value: 'very-high', label: 'Very High' }
                    ]}
                  />
                </Form.Item>
              </div>

              <Form.Item
                label="Agent Bio"
                name="agentBio"
                rules={[{ required: true, message: 'Please enter agent bio' }]}
              >
                <TextArea
                  placeholder="Write"
                  rows={4}
                  style={{ borderRadius: '8px' }}
                />
              </Form.Item>

              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '12px',
                marginTop: '32px'
              }}>
                <Button onClick={handleModalClose} size="large">
                  Cancel
                </Button>
                <Button
                  type="primary"
                  onClick={handleNext}
                  size="large"
                  style={{
                    backgroundColor: '#7c3aed',
                    borderColor: '#7c3aed'
                  }}
                >
                  Next
                </Button>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              {/* Step 1: Website URL and File Upload */}
              <Form.Item
                label="Enter your website"
                name="website"
                rules={[
                  { required: true, message: 'Please enter your website URL' },
                  { type: 'url', message: 'Please enter a valid URL' }
                ]}
              >
                <Input
                  placeholder="yourwebsite.com"
                  size="large"
                  style={{ borderRadius: '8px' }}
                />
              </Form.Item>

              <Divider>or</Divider>

              <Form.Item label="Upload file">
                <Upload.Dragger
                  {...uploadProps}
                  style={{
                    borderRadius: '12px',
                    border: '2px dashed #d9d9d9',
                    backgroundColor: '#fafafa'
                  }}
                >
                  <div style={{ padding: '40px 20px' }}>
                    <p style={{ margin: '0 0 8px 0' }}>
                      <UploadOutlined style={{ fontSize: '24px', color: '#8c8c8c' }} />
                    </p>
                    <Title level={4} style={{ margin: '0 0 8px 0', color: '#262626' }}>
                      Upload file
                    </Title>
                    <Text style={{ color: '#8c8c8c' }}>
                      File supported pdf, docs, and more
                    </Text>
                  </div>
                </Upload.Dragger>
              </Form.Item>

              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '12px',
                marginTop: '32px'
              }}>
                <Button onClick={handleModalClose} size="large">
                  Cancel
                </Button>
                <Button
                  type="primary"
                  onClick={handleCreate}
                  size="large"
                  style={{
                    backgroundColor: '#7c3aed',
                    borderColor: '#7c3aed'
                  }}
                >
                  Create
                </Button>
              </div>
            </>
          )}


        </Form>
      </Modal>
    </div>
  )
}
