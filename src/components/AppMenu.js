import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

const MenuItem = ({ item, linkClassName }) => (
  <li className='side-nav-item'>
    <MenuItemLink item={item} className={linkClassName} />
  </li>
);

const MenuItemLink = ({ item, className }) => {
  const Icon = item.icon || null;
  return (
    <Link 
      to={item.path} 
      className={classNames('side-nav-link-ref', className)}
      activeClassName='mm-active'
    >
      {item.icon && <Icon />}
      {item.badge && <span className={`font-size-12 badge badge-${item.badge.variant} float-right`}>{item.badge.text}</span>}
      <span> {item.name} </span>
    </Link>
  );
};

/**
 * Renders the application menu
 */

const AppMenu = ({mode, menu}) => {
  const isHorizontal = mode === 'horizontal';

  return (
    <React.Fragment>
    {menu && menu.menuItems && (
      <ul className="metismenu" id="menu-bar">
        {menu.menuItems.map((item, i) => {
          return (
            <React.Fragment key={item.id}>
                {item.header && !isHorizontal && (
                  <li className="menu-title" key={i + '-el'}>
                    {item.header}
                  </li>
                )}
                <MenuItem
                  item={item}
                  linkClassName="side-nav-link"
                />
            </React.Fragment>
          );
        })}
      </ul>
    )}
    </React.Fragment>
  );
}

AppMenu.defaultProps = {
  mode: 'vertical'
}


export default AppMenu
