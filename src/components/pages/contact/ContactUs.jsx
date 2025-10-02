import { Button, Col, Form, Input, Row } from 'antd';

const { TextArea } = Input;

export default function ContactUs() {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
  };

  return (
    <section className="hero-section min-h-screen bg-gradient-to-br from-[#f3e7ff] via-[#e7f0ff] to-[#e7ffe7] pt-40 pb-20">
      <div className="container ">
        <div className="md:w-3xl space-y-4 text-center mx-auto">
          <h1 className="text-6xl leading-[120%] text-[#0C0900] font-semibold">
            Contact us
          </h1>
          <p className="font-normal text-2xl leading-relaxed text-gray-600">
            Please tell us a little bit about your company and use case, and we’ll be in touch soon.
          </p>

          <div className="p-10 bg-white rounded-[20px]">
            <Form
              size="large"
              layout='vertical'
              form={form}
              name="control-hooks"
              onFinish={onFinish}
            >
              <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                  <Form.Item name="Website" label="Website" rules={[{ required: true }]}>
                    <Input placeholder='Website' />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item name="Work email" label="Work email" rules={[{ required: true }]}>
                    <Input placeholder='Work email' />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={24}>
                  <Form.Item name="Team size" label="Team size" rules={[{ required: true }]}>
                    <Input placeholder='Team size' />
                  </Form.Item>
                </Col>

                <Col className="gutter-row" span={24}>
                  <Form.Item name="How can we help?" label="How can we help?" rules={[{ required: true }]}>
                    <TextArea rows={4} placeholder="How can we help?" maxLength={6} />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item >
                <Button type="primary" htmlType="submit" className='w-full' >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
