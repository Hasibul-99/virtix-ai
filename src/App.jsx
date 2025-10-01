import { ConfigProvider } from 'antd';
import './App.css';
import Routers from './Routers';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6200FF', // Using our Tailwind primary-500 color
          colorInfo: '#0ea5e9',
          colorSuccess: '#10b981',
          colorWarning: '#f59e0b',
          colorError: '#ef4444',
          borderRadius: 8,
          fontFamily: 'Inter, system-ui, sans-serif',
        },
        components: {
          Button: {
            borderRadius: 8,
            controlHeight: 40,
          },
          Input: {
            borderRadius: 8,
            controlHeight: 40,
          },
          Select: {
            borderRadius: 8,
            controlHeight: 40,
          },
        }
      }}
    >
      <div className='App'>
        <Routers />
      </div>
    </ConfigProvider>
  );
}

export default App;
