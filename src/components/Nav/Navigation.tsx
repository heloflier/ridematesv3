import React, { useState, useContext } from 'react';
import {
  Nav, Navbar, NavItem, NavbarBrand, NavbarToggler, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, Collapse, NavLink, DropdownItem
} from 'reactstrap';
import { observer } from 'mobx-react-lite';

import { StoreContext } from '../../stores/store-context';

import navigationMenuItems from '../helper_assets/navigation-menu';

function Navigation() {

  const [toggle, setToggle] = useState(false);

  const store = useContext(StoreContext); 

  const renderNavItems = navigationMenuItems
    .filter(menuItem => menuItem.tabName != store.currentPage)
    .map( (menuItem, index) => {
      let pagePath;
      let { tabUrl, tabName, tabPage } = menuItem;
      tabPage === undefined? pagePath = tabName : pagePath = tabPage;

      return (
        <NavItem key={index}>
          <NavLink href={`${tabUrl ? tabUrl : '/' + pagePath}`}>
            {tabName}
          </NavLink>
        </NavItem>
      )
  });

  return (
    <Navbar
      dark
      expand='md'
      className='heading-primary'
    >
      <NavbarBrand href="/" color="primary" className='heading-primary--brand fs-1 fst-italic px-5'>
        RIDEMATES
      </NavbarBrand>

      <NavbarToggler onClick={() => setToggle(!toggle)} />
      <Collapse navbar isOpen={toggle}>
        <Nav
          className="me-auto"
          navbar
        >
          { renderNavItems }
          <UncontrolledDropdown
            inNavbar
            nav
          >
            <DropdownToggle
              caret
              nav
            >
              Options
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem className='color-primary'>
                <NavLink href="/pages/profile" className="text-dark">
                  Profiles
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/pages/ride" className="text-dark">
                  Ride
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="https://www.strava.com/" className="text-dark">
                  Strava
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default observer(Navigation);
