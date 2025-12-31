'use client';
// to be changed - remove the use client, usestate, and the import of it

import MobileMenu from '@/components/mobile-nav-menu/MobileMenu';

import NavMenuList from '@/components/desktop-nav-menu/NavMenuList';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';

import { NavigationMenu } from '@/components/ui/navigation-menu';

import Image from 'next/image';

import { useState } from 'react';

import { Search } from 'lucide-react';

const MainHeader = () => {
  const [value, setValue] = useState('op'); //delloo

  const [hidden, setHidden] = useState(false);

  const style = hidden ? '-translate-y-full' : 'translate-y-[0%]';

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    const delta = latest - previous;

    if (latest < 50 && hidden) {
      setHidden(false);
      return;
    }

    if (delta > 15 && !hidden) {
      setHidden(true);
      return;
    }

    if (delta < -15 && hidden) {
      setHidden(false);
      return;
    }
  });

  return (
    <>
      <header className={`main-header ${style}`}>
        <div className="flex justify-between items-center w-full [&>*:not(:nth-child(3))]:cursor-pointer">
          {/* mobile */}
          <MobileMenu />

          <Image src="/logo2.png" alt="logo" width={118} height={37} priority />

          {/* desktop */}
          <nav className="hidden lg:block">
            {/* dello value, onvaluechange */}
            <NavigationMenu value={value} onValueChange={setValue}>
              <NavMenuList />

              <button className="contact-button text-[0.75rem] ml-10">
                Contact Us
              </button>
            </NavigationMenu>
          </nav>

          <Search size={25} className="cursor-pointer" />
        </div>
      </header>

      <div
        className="h-[68px] lg:h-22.5 w-full"
      />
    </>
  );
};

export default MainHeader;
