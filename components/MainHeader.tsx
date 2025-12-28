import MobileMenu from '@/components/mobile-menu/MobileMenu';

import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import NavMenuItem from '@/components/NavMenuItem';

import Image from 'next/image';

import { Search} from 'lucide-react';

const MainHeader = () => {
  return (
    <header className=" main-header">
      <div className="flex justify-between items-center w-full [&>*:not(:nth-child(3))]:cursor-pointer">
        <MobileMenu />


        <Image src="/logo1.png" alt="logo" width={118} height={37} />

        {/* desktop */}
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavMenuItem label="Home">
                <div className="flex">
                  <div className="w-50 h-50 bg-red-500">asd</div>
                  <div className="w-50 h-50 bg-green-500">asd</div>
                  <div className="w-50 h-50 bg-blue-500">asd</div>
                </div>
              </NavMenuItem>

              <NavMenuItem label="Home">
                <div className="flex">
                  <div className="w-50 h-50 bg-green-500">asd</div>
                  <div className="w-50 h-50 bg-blue-500">asd</div>
                  <div className="w-50 h-50 bg-red-500">asd</div>
                </div>
              </NavMenuItem>

              <NavMenuItem label="Home">
                <div className="flex">
                  <div className="w-50 h-50 bg-green-500">asd</div>
                  <div className="w-50 h-50 bg-blue-500">asd</div>
                  <div className="w-50 h-50 bg-red-500">asd</div>
                </div>
              </NavMenuItem>

              <NavMenuItem label="Home">
                <div className="flex">
                  <div className="w-50 h-50 bg-green-500">asd</div>
                  <div className="w-50 h-50 bg-blue-500">asd</div>
                  <div className="w-50 h-50 bg-red-500">asd</div>
                </div>
              </NavMenuItem>
            </NavigationMenuList>

            <button className="uppercase">Contact Us</button>
          </NavigationMenu>
        </nav>

        <Search size={25} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default MainHeader;
