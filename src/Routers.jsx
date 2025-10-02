import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateLayout from './layouts/PrivateLayout.jsx';
import PublicLayout from './layouts/publicLayout.jsx';
import ForgetPassword from './pages/auth/ForgetPassword.jsx';
import ResetPassword from './pages/auth/ResetPassword.jsx';
import Signin from './pages/auth/Signin.jsx';
import Signup from './pages/auth/Signup.jsx';
import Chat from './pages/private/Chat.jsx';
import Features from './pages/public/Features.jsx';
import Home from './pages/public/Home.jsx';
import Pricing from './pages/public/pricing.jsx';

export default function Routers() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
        </Route>
        <Route path='/' element={<PublicLayout />}>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path='chat' element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}