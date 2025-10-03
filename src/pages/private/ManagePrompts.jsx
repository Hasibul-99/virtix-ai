import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
];

export default function ManagePrompts() {
  return (
    <div>
      <Card>
        <div className='flex justify-between items-center'>
          <h1 className="text-2xl font-bold">
            Manage Prompts
          </h1>
          <div className='flex gap-4' >
            <Button type="primary" icon={<PlusOutlined />}>Add prompt</Button>
          </div>
        </div>
      </Card>
      <Card>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Card>
    </div>
  )
}
