import { Button, Form, Input, Typography } from 'antd';
import { useState } from 'react';

const { Title, Text, Link } = Typography;

function ForgetPassword() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(2);

  const onFinish = (values) => {
    setLoading(true);
    console.log('Success:', values);
    setStep(step + 1);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const onVerifyEmailFinish = (values) => {
    setLoading(true);
    console.log('Success:', values);
    setStep(step + 1);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-green-100 p-4">
      {/* Animated blob backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Login Form Card */}
      {
        step === 1 ? <div className="relative z-10 w-xl bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <Title level={2} className="!mb-2 !text-gray-900">
              Forget password
            </Title>
            <Text className="text-gray-500 text-sm">
              To reset your password, please enter your email address.

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

            {/* Submit Button */}
            <Form.Item className="mb-0">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-0 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sent code
              </Button>
            </Form.Item>
          </Form>
        </div> : step === 2 ? <div className="relative z-10 w-xl bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <Title level={2} className="!mb-2 !text-gray-900">
              Verify Email
            </Title>
            <Text className="text-gray-500 text-sm">
              We sent a OTP code to uxfaruk@gmail.com. Please input bellow to proceed.
            </Text>
          </div>

          {/* Form */}
          <Form
            name="verifyEmail"
            layout="vertical"
            onFinish={onVerifyEmailFinish}
            autoComplete="off"
            requiredMark={false}
          >
            {/* Email Field */}
            <Form.Item
              label={<span className="text-gray-700 font-medium">OTP Code</span>}
              name="email"
              rules={[
                { required: true, message: 'Please input OTP Code!' }
              ]}
              className="mb-5"
            >
              <Input
                placeholder="0000"
                size="large"
                className="rounded-lg bg-gray-50 border-gray-200 hover:border-purple-400 focus:border-purple-500"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item className="mb-0">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-0 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Verify
              </Button>
            </Form.Item>
          </Form>
          <div className="text-center mt-6">
            Don’t get code? <span className='text-[#6200FF] cursor-pointer hover:text-red-600' onClick={() => setStep(1)}>
              Resend
            </span>
          </div>
        </div> : <div className="relative z-10 w-xl bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <Title level={2} className="!mb-2 !text-gray-900">
              Change password
            </Title>
            <Text className="text-gray-500 text-sm">
              Update your password securely
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
            {/* Password Field */}
            <Form.Item
              label={<span className="text-gray-700 font-medium text-sm">Password</span>}
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' }
              ]}
              className="mb-4"
            >
              <Input.Password
                placeholder="Create a password"
                size="large"
                className="rounded-lg bg-gray-50 border-gray-200"
                style={{ padding: '10px 12px' }}
              />
            </Form.Item>

            {/* Confirm Password Field */}
            <Form.Item
              label={<span className="text-gray-700 font-medium text-sm">Confirm Password</span>}
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
              className="mb-5"
            >
              <Input.Password
                placeholder="Confirm your password"
                size="large"
                className="rounded-lg bg-gray-50 border-gray-200"
                style={{ padding: '10px 12px' }}
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item className="mb-0">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-0 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Change
              </Button>
            </Form.Item>
          </Form>
        </div>
      }

    </div>
  );
}

export default ForgetPassword;