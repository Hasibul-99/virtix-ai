import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function AuthHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-[#ECECEC] fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="/assets/logo/Logo.svg"
                  alt="VIRTIS AI"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
          </div>


          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <Button type="primary">Create account</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}

      </div>
    </header>
  )
}
