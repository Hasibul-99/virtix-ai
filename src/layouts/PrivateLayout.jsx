import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export default function PrivateLayout() {
  const token = Cookies.get('kotha_token')

  useEffect(() => {
    if (token) {
      window.location = '/chat'
    }
  }, [token])

  return (
    <div className='bg-[#F3F3F3] dark:bg-gray-700 min-h-screen flex'>
      <div className='inline-flex items-center m-auto align-middle'>
        <Outlet />
      </div>
    </div>
  )
}