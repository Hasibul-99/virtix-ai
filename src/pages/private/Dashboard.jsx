import { Line } from '@ant-design/plots';
import { Card, Col, Radio, Row, Table, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { getDashboardData } from '../../scripts/api-service';

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
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(7);

  useEffect(() => {
    fetchDashboardData();
  }, [days]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const data = await getDashboardData(days, 5);
      setDashboardData(data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTimeRangeChange = (e) => {
    const value = e.target.value;
    let daysValue = 7;
    if (value === 'Weekly') daysValue = 7;
    else if (value === 'Monthly') daysValue = 30;
    else if (value === 'Daily') daysValue = 1;
    
    setDays(daysValue);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
      </div>
    );
  }
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
                <h2 className='text-2xl font-bold'>{dashboardData?.active_conversations || 0}</h2>
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
                <h2 className='text-2xl font-bold'>{dashboardData?.sign_ups || 0}</h2>
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
                <h2 className='text-2xl font-bold'>{dashboardData?.resolved || 0}</h2>
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
                <h2 className='text-2xl font-bold'>{dashboardData?.avg_session_time || '0:00m'}</h2>
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
                  onChange={handleTimeRangeChange}
                  value={days === 1 ? 'Daily' : days === 7 ? 'Weekly' : 'Monthly'}
                  optionType="button"
                  buttonStyle="solid"
                />
              </div>
            </div>
            <DemoLine data={dashboardData?.chat_volume_data || []} />
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
        <Table 
          dataSource={dashboardData?.top_faqs || dataSource} 
          columns={columns} 
          pagination={false} 
        />
      </Card>
    </div>
  )
}

const DemoLine = ({ data }) => {
  const defaultData = [
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
  
  const chartData = data && data.length > 0 ? data : defaultData;
  
  const config = {
    data: chartData,
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
