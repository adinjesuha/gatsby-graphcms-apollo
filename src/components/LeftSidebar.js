import React from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { 
  FiHome, 
  FiCalendar, 
  FiBriefcase,
  FiFileText,
  FiEye
} from 'react-icons/fi'
import AppMenu from './AppMenu';

// dashboards
const dashboardRoutes = {
  id: 1,
  path: '/',
  name: 'Dashboard',
  icon: FiHome,
  header: 'Navegación',
};

const calendarAppRoutes = {
  id: 2,
  path: '/apps/calendar',
  name: 'Calendario',
  header: 'Apps',
  icon: FiCalendar,
};

const projectAppRoutes = {
  id: 3,
  path: '/apps/projects',
  name: 'Monitoreos',
  icon: FiBriefcase,
  badge: {
    variant: 'success',
    text: '3',
  },
};

const invoiceAppRoutes = {
  id: 4,
  path: '/apps/invoice',
  name: 'Facturación',
  icon: FiFileText,
};

const analisisAppRoutes = {
  id: 5,
  path: '/apps/analysis',
  name: 'Análisis',
  icon: FiEye,
};

const menu = {
  menuItems:[
    dashboardRoutes, 
    calendarAppRoutes,
    projectAppRoutes,
    analisisAppRoutes,
    invoiceAppRoutes,
  ]
}


/**
 * Sidenav
 */
const SideNav = () => {
  return <div className="sidebar-content">
    <div id="sidebar-menu">
      <AppMenu 
        menu={menu}
      />
    </div>
  </div>
}

const LeftSidebar = () => (
  <div className='left-side-menu'>
    <PerfectScrollbar>
      <SideNav />
    </PerfectScrollbar>
  </div>
);

export default LeftSidebar;