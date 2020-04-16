import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Dropdown, DropdownMenu, DropdownToggle, UncontrolledTooltip } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { FiBell } from 'react-icons/fi'

const notificationContainerStyle = {
    'maxHeight': '230px'
};

const NotificationDropdown = ({notifications, ...otherProps}) => {
  const [ dropdownOpen, setDropdownOpen ] = useState(false)

  /*:: toggleDropdown: () => void */
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const tag = otherProps.tag || "div";

  return (
    <React.Fragment>
      <Dropdown 
        isOpen={dropdownOpen} 
        toggle={toggleDropdown} 
        className="notification-list" 
        tag={tag} 
        id="notiDropdown"
      >
        <DropdownToggle
          data-toggle="dropdown"
          tag="a"
          className="nav-link dropdown-toggle" 
          onClick={toggleDropdown} 
          aria-expanded={dropdownOpen}
        >
          <FiBell />
          <span className="noti-icon-badge" />
        </DropdownToggle>
        <DropdownMenu right className="dropdown-lg">
          <div 
            onClick={toggleDropdown}
            onKeyDown={toggleDropdown}
            role="button"
            tabIndex={0}
          >
            <div className="dropdown-item noti-title border-bottom">
              <h5 className="m-0 font-size-16">
                <span className="float-right">
                  <Link to="/notifications" className="text-dark">
                    <small>Borrar todo</small>
                  </Link>
                </span>Notificaciones
              </h5>
            </div>
            <PerfectScrollbar style={notificationContainerStyle}>
              {notifications.map((item, i) => {
                return (
                  <Link 
                    to="/" 
                    className="dropdown-item notify-item" 
                    key={i + "-noti"}
                  >
                    <div className={`notify-icon bg-${item.bgColor}`}>
                      <i className={item.icon}></i>
                    </div>
                    <p className="notify-details">{item.text}
                      <small className="text-muted">{item.subText}</small>
                    </p>
                  </Link>
                )
              })}
            </PerfectScrollbar>
            <Link 
              to="/" 
              className="dropdown-item text-center text-primary notify-item notify-all border-top"
            >
              Ver todo
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>

      <UncontrolledTooltip 
        placement="left" 
        target="notiDropdown"
      >
        {notifications.length} nuevas notificaciones
      </UncontrolledTooltip>

    </React.Fragment>
  );
}

export default NotificationDropdown;