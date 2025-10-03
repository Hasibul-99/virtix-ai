import { Button, Card, Table } from 'antd';
import { Download, SlidersHorizontal } from 'lucide-react';


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
export default function ChatHistory() {

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div>
      <Card  >
        <div className='flex justify-between items-center mb-6'>
          <h1 className="text-2xl font-bold">
            Chat History
          </h1>
          <div className='flex gap-4' >
            <Button icon={<SlidersHorizontal />}>Filter</Button>
            <Button icon={<Download />}>Export</Button>
          </div>
        </div>

      </Card>
      <Table
        rowSelection={{ type: 'checkbox', ...rowSelection }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}
