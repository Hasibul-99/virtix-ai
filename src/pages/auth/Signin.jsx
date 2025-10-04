import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useState } from 'react';
import { LOGIN_USER } from '../../scripts/api';
import { postData } from '../../scripts/api-service';

const { Title, Text, Link } = Typography;

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const res = await postData(LOGIN_USER, values, true);
    console.log('Login response:', res);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-green-100 p-4">
      {/* Animated blob backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Login Form Card */}
      <div className="relative z-10 w-xl bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Title level={2} className="!mb-2 !text-gray-900">
            Welcome Back! Please log in
          </Title>
          <Text className="text-gray-500 text-sm">
            Please tell us a little bit about your company and use case,
            <br />
            and we'll be in touch soon.
          </Text>
        </div>

        {/* Form */}
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          requiredMark={false}
        >
          {/* Email Field */}
          <Form.Item
            label={<span className="text-gray-700 font-medium">Email Address</span>}
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
            className="mb-5"
          >
            <Input
              placeholder="Write"
              size="large"
              className="rounded-lg bg-gray-50 border-gray-200 hover:border-purple-400 focus:border-purple-500"
            />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label={<span className="text-gray-700 font-medium">Password</span>}
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            className="mb-5"
          >
            <Input.Password
              placeholder="Write"
              size="large"
              className="rounded-lg bg-gray-50 border-gray-200 hover:border-purple-400 focus:border-purple-500"
            />
          </Form.Item>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-gray-600">
                <span className="text-sm">Remember me</span>
              </Checkbox>
            </Form.Item>
            <Link href="#" className="text-sm text-red-500 hover:text-red-600">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-0 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>

        {/* Footer */}
        <div className="text-center mt-6">
          <Text className="text-gray-500 text-sm">
            Don't have an account?{' '}
            <Link href="#" className="text-purple-600 hover:text-purple-700 font-semibold">
              Sign up
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
}