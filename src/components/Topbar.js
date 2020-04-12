import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'reactstrap'

import { 
  FiMenu, 
  FiX, 
  FiSearch, 
  FiSettings, 
  FiUser,
  FiHelpCircle,
  FiLogOut,
  FiLifeBuoy
} from 'react-icons/fi'
import NotificationDropdown from './NotificationDropdown'
import ProfileDropdown from './ProfileDropdown'

const Notifications = [
  {
    id: 1,
    text: 'Nuevo monitoreo agregado',
    subText: 'Industrial de Alimentos',
    icon: 'uil uil-user-plus',
    bgColor: 'primary'
  },
  {
    id: 2,
    text: 'Nuevo Cliente',
    subText: 'Wow ! this admin looks good and awesome design',
    icon: 'uil uil-comment-message',
    bgColor: 'success'
  },
  {
    id: 3,
    text: 'Cristina Pride',
    subText: 'Hi, How are you? What about our next meeting',
    icon: 'uil uil-comment-message',
    bgColor: 'danger'
  }, 
  {
    id: 4,
    text: 'Cristina Pride',
    subText: 'Hi, How are you? What about our next meeting',
    icon: 'uil uil-comment-message',
    bgColor: 'danger'
  }, 
];

const ProfileMenus = [
  {
    label: 'Perfil',
    icon: FiUser,
    redirectTo: "/",
  },
  {
    label: 'Settings',
    icon: FiSettings,
    redirectTo: "/"
  },
  {
    label: 'Soporte',
    icon: FiHelpCircle,
    redirectTo: "/"
  },
  {
    label: 'Salir',
    icon: FiLogOut,
    redirectTo: "/account/logout",
    hasDivider: true
  }
]

const Topbar = ({title}) => {
  return (
    <div className="navbar navbar-expand flex-column flex-md-row navbar-custom">
      <Container fluid>

        { /* logo */}
        <Link to="/" className="navbar-brand mr-0 mr-md-2 logo">
          <span className="logo-lg">
            {/*<img src={logo} alt="" height="24" />*/}
            <FiLifeBuoy  className="mb-1"/>
            <span className="d-inline h5 ml-2 text-logo">{title}</span>
          </span>
          <span className="logo-sm">
            {/*<img src={logo} alt="" height="24" />*/}
          </span>
        </Link>

        { /* menu*/}
        <ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
          <li className="">
            <button className="button-menu-mobile open-left disable-btn" onClick={() => console.log('hi')}>
              <FiMenu className="menu-icon" />
              <FiX className="close-icon" />
            </button>
          </li>
        </ul>

        <ul className="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">

          <li className="d-none d-sm-block">
            <div className="app-search">
              <form>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <FiSearch />
                </div>
              </form>
            </div>
          </li>

          <NotificationDropdown notifications={Notifications} />

          <ProfileDropdown
            menuItems={ProfileMenus} 
            username={'Adin Jesuha'} 
            description="Adminstrador"
          />

        </ul>


      </Container>
    </div>
  )
}

export default Topbar;