import Cookies from 'js-cookie'
import { Fragment, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/privateLayout/Footer'
import Header from '../components/common/privateLayout/Header'

export default function PublicLayout() {
  const token = Cookies.get('kotha_token')

  useEffect(() => {
    if (token) {
      window.location = '/chat'
    }
  }, [token])

  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  )
}