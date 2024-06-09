import { NavLink, useLocation } from 'react-router-dom';

import { Button } from '../ui/button';

function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="max-lg:hidden flex flex-col bg-cadet-blue-400/30  w-[15%] h-full p-6 justify-evenly items-center">
      <NavLink to="/">
        <Button className={pathname === '/' ? 'active-link' : ''}>Home</Button>
      </NavLink>
      <NavLink to="/about">
        <Button className={pathname === '/about' ? 'active-link' : ''}>
          About
        </Button>
      </NavLink>
      <NavLink to="/articles">
        <Button className={pathname === '/articles' ? 'active-link' : ''}>
          Articles
        </Button>
      </NavLink>
      <NavLink to="/categories">
        <Button className={pathname === '/categories' ? 'active-link' : ''}>
          Categories
        </Button>
      </NavLink>
    </nav>
  );
}

export default Navigation;
