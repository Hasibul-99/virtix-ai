import { Line } from '@ant-design/plots';
import { Card, Col, Radio, Row, Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
  },
  {
    key: '2',
    name: 'John',
    age: 42,
  },
];

const columns = [
  {
    title: 'Question',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Times',
    dataIndex: 'age',
    key: 'age',
    width: 150,
  },
  {
    title: 'Confidence',
    dataIndex: 'age',
    key: 'age',
    width: 150,
  },
];

export default function Dashboard() {
  return (
    <div className='space-y-6'>
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <Card  >
            <div className='flex  items-center flex-row gap-4'>
              <div>
                <img src="/assets/images/Frame191.png" alt="icon" />
              </div>
              <div>
                <h2 className='text-2xl font-bold'>10</h2>
                <p className='text-gray-500'>Active Conversations</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card  >
            <div className='flex  items-center flex-row gap-4'>
              <div>
                <img src="/assets/images/Frame191.png" alt="icon" />
              </div>
              <div>
                <h2 className='text-2xl font-bold'>322</h2>
                <p className='text-gray-500'>Sign up</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card  >
            <div className='flex  items-center flex-row gap-4'>
              <div>
                <img src="/assets/images/Frame191.png" alt="icon" />
              </div>
              <div>
                <h2 className='text-2xl font-bold'>322</h2>
                <p className='text-gray-500'>Resolved</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card  >
            <div className='flex  items-center flex-row gap-4'>
              <div>
                <img src="/assets/images/Frame191.png" alt="icon" />
              </div>
              <div>
                <h2 className='text-2xl font-bold'>1:40m</h2>
                <p className='text-gray-500'>Avg. session time</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={14}>
          <Card>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold mb-4'>Chat Volume Graph</h2>
              <div>
                <Radio.Group
                  options={[
                    { label: 'Daily', value: 'Daily', className: 'label-1' },
                    { label: 'Weekly', value: 'Weekly', className: 'label-2' },
                    { label: 'Monthly', value: 'Monthly', className: 'label-3' },
                  ]}
                  onChange={() => { }}
                  value={'Daily'}
                  optionType="button"
                  buttonStyle="solid"
                />
              </div>
            </div>
            <DemoLine />
          </Card>
        </Col>

        <Col className="gutter-row" span={10}>
          <Card>
            <h2 className='text-xl font-bold mb-4'>Sentiments</h2>

          </Card>
        </Col>
      </Row>
      <Card>
        <h2 className='text-xl font-bold mb-4'>Top FAQs Asked </h2>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </Card>
    </div>
  )
}

const DemoLine = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      shapeField: 'square',
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return <Line {...config} />;
};
