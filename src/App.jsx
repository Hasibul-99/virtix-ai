import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Routers from './Routers';

function App() {
  return (
    <HelmetProvider>
      <div className='App'>
        <Routers />
      </div>
    </HelmetProvider>

  );
}

export default App;
