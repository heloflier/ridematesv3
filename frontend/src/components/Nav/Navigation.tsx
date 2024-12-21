import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import {
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';
import navigationMenuItems from '../../helpers/assets/navigation-menu';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores/store-context';
import { AuthButton } from './AuthButton';

export const Navigation = observer(() => {
  const [toggle, setToggle] = useState(false);
  const store = useStores();
  const { authStore } = store;

  const renderNavItems = navigationMenuItems
    .filter((menuItem) => menuItem.navItemPath !== store.currentPage)
    .map((menuItem, index) => {
      let { navItemTitle, navItemPath } = menuItem;

      return (
        <NavItem key={index} className='mx-3'>
          <Link to={`/${navItemPath}`} className='nav-link'>
            {navItemTitle}
          </Link>
        </NavItem>
      );
    });

  // Filter dropdown items based on auth state
  const renderDropdownItems = () => (
    <>
      {authStore.isAuthenticated && (
        <DropdownItem className='color-primary'>
          <RouterNavLink to="/profile" className='text-dark'>
            Profiles
          </RouterNavLink>
        </DropdownItem>
      )}
      {authStore.isAuthenticated && (
        <DropdownItem>
          <RouterNavLink to="/ride" className='text-dark'>
            Ride
          </RouterNavLink>
        </DropdownItem>
      )}
      <DropdownItem>
        <NavLink href='https://www.strava.com/' className='text-dark'>
          Strava
        </NavLink>
      </DropdownItem>
    </>
  );

  return (
    <Navbar dark expand='md' className='std-theme heading-primary'>
      <NavbarBrand
        tag={RouterNavLink}
        to='/'
        className='heading-primary--brand fs-1 fst-italic px-5'
      >
        RIDEMATES
      </NavbarBrand>

      <NavbarToggler onClick={() => setToggle(!toggle)} />
      <Collapse navbar isOpen={toggle}>
        <Nav className='me-auto' navbar>
          {renderNavItems}

          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Options
            </DropdownToggle>
            <DropdownMenu end>
              {renderDropdownItems()}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <RouterNavLink to="/login" className='text-white me-3'>
          <AuthButton />
        </RouterNavLink>
      </Collapse>
    </Navbar>
  );
});
