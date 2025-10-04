import Cookies from 'js-cookie'

export const checkRes = (param) => {
  if (param === 200 || param === 201 || param === 212) {
    return true
  } else if (param === 401) {
    Cookies.remove('kotha_token')
    localStorage.removeItem('kotha_token')
    window.location = '/signin'
  } else if (param === 403) {
    Cookies.remove('kotha_token')
    localStorage.removeItem('kotha_token')
    window.location = '/signin'
  } else {
    return false
  }
}