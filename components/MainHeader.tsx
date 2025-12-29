'use client' //delloo
// to be changed - remove the use client, usestate, and the import of it

import MobileMenu from '@/components/mobile-nav-menu/MobileMenu';

import NavMenuList from '@/components/desktop-nav-menu/NavMenuList';

import {
  NavigationMenu,
} from '@/components/ui/navigation-menu';

import Image from 'next/image';

import { useState } from 'react'; //delloo

import { Search } from 'lucide-react';

const MainHeader = () => {
  const [value, setValue] = useState('op') //delloo

  return (
    <header className=" main-header">
      <div className="flex justify-between items-center w-full [&>*:not(:nth-child(3))]:cursor-pointer">
        {/* mobile */}
        <MobileMenu />

        <Image src="/logo1.png" alt="logo" width={118} height={37} />

        {/* desktop */}
        <nav className="hidden lg:block">
          {/* dello value, onvaluechange */}
          <NavigationMenu value={value} onValueChange={setValue}>

            <NavMenuList />

            <button className="uppercase">Contact Us</button>
          </NavigationMenu>
        </nav>

        <Search size={25} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default MainHeader;
