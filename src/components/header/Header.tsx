import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';

// import logo from '../../assets/logo_nc6.png';

function Header() {
  // Source code for updating style on active nav likns : https://larainfo.com/blogs/react-router-active-navlink-with-tailwind-css/
  const { pathname } = useLocation();
  // Source code I drew inspiration from to close sheet component on click: https://codesandbox.io/p/sandbox/upbeat-galileo-6rxfm7?file=%2Fsrc%2FApp.tsx%3A68%2C18-68%2C40
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  return (
    <header className="header-container flex h-32 items-center justify-between p-6 bg-cadet-blue-400/30">
      <div className="title-container w-full max-sm:3/4">
        <NavLink to="/">
          <h1 className="text-4xl max-sm:text-2xl font-serif text-pewter-900">
            Potato&rsquo;s Blog
          </h1>
          <p className="text-sm font-serif text-pewter-900 max-md:text-xs">
            Your Daily Dose of Furry Inspiration
          </p>
        </NavLink>
      </div>
      <div className="flex nav-container items-center w-3/4 max-sm:2/4 justify-end">
        <div className="sheet-container flex md:hidden">
          <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
            <SheetTrigger>
              {' '}
              <Button className="flex bg-transparent justify-self-end w-[50px] p-0 ">
                <Menu color="#2c352f" size={36} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Potato&rsquo;s Blog</SheetTitle>
                <SheetDescription className="flex flex-col space-y-3 w-full items-center">
                  <NavLink to="/">
                    <Button
                      variant="ghost"
                      className={
                        pathname === '/' ? 'active-link w-[170px]' : 'w-[170px]'
                      }
                      onClick={() => setSheetIsOpen(false)}
                    >
                      Home
                    </Button>
                  </NavLink>
                  <NavLink to="/about">
                    <Button
                      variant="ghost"
                      className={
                        pathname === '/about'
                          ? 'active-link w-[170px]'
                          : 'w-[170px]'
                      }
                      onClick={() => setSheetIsOpen(false)}
                    >
                      About
                    </Button>
                  </NavLink>
                  <NavLink to="/articles">
                    <Button
                      variant="ghost"
                      className={
                        pathname === '/articles'
                          ? 'active-link w-[170px]'
                          : 'w-[170px]'
                      }
                      onClick={() => setSheetIsOpen(false)}
                    >
                      Articles
                    </Button>
                  </NavLink>
                  <NavLink to="/categories">
                    <Button
                      variant="ghost"
                      className={
                        pathname === '/skills'
                          ? 'active-link w-[170px]'
                          : 'w-[170px]'
                      }
                      onClick={() => setSheetIsOpen(false)}
                    >
                      Categories
                    </Button>
                  </NavLink>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
