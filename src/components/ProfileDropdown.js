import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

const ProfileDropdown = ({menuItems, ...otherProps}) => {
  const [ dropdownOpen, setDropdownOpen ] = useState(false)
    /*:: toggleDropdown: () => void */
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const tag = otherProps.tag || "div";

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="notification-list align-self-center" tag={tag}>
      <DropdownToggle
        data-toggle="dropdown"
        tag="a"
        className="nav-link dropdown-toggle nav-user mr-0 mr-0"
        onClick={toggleDropdown} aria-expanded={dropdownOpen}
      >
        <div className="media user-profile ">
          <span className="rounded-circle align-self-center">AJ</span>
          <div className="media-body text-left">
            <h6 className="pro-user-name ml-2 my-0">
              <span>{otherProps.username}</span>
              <span className="pro-user-desc text-muted d-block mt-1">{otherProps.description} </span>
            </h6>
          </div>
        </div>
      </DropdownToggle>
      <DropdownMenu right className="topbar-dropdown-menu profile-dropdown-items">
        <div 
          onClick={toggleDropdown}
          onKeyDown={toggleDropdown}
          role="button"
          tabIndex={0}
        >
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={i + "-profile-menu"}>
                {item.hasDivider ? <DropdownItem divider /> : null}
                <Link to={item.redirectTo} className="dropdown-item notify-item">
                  <Icon className="icon-dual icon-xs mr-2"></Icon>
                  <span>{item.label}</span>
                </Link>
              </React.Fragment>
            )
          })}
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ProfileDropdown;