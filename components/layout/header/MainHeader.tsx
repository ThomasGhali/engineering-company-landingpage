'use client';
// to be changed - remove the use client, usestate, and the import of it

import Image from 'next/image';

import { useState, useRef, useEffect } from 'react';

import MobileMenu from './MobileMenu';

import DesktopNavMenuList from './DesktopNavMenuList';

import { useScroll, useMotionValueEvent } from 'motion/react';

import { NavigationMenu } from '@/components/ui/navigation-menu';

import { Search } from 'lucide-react';

import { IconButton, TextField, Box } from '@radix-ui/themes';
import { MagnifyingGlassIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';

const MainHeader = () => {
  const [value, setValue] = useState('op'); //delloo

  const [hidden, setHidden] = useState(false);
  const style = hidden ? '-translate-y-full' : 'translate-y-[0%]';

  const [searchHidden, setSearchHidden] = useState(true);

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

  const searchRef = useRef<HTMLInputElement>(null);

  // focus search bar onAppear
  useEffect(() => {
    if (searchHidden) return;
    searchRef.current?.focus();
  }, [searchHidden]);

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
              <DesktopNavMenuList />

              <button className="contact-button text-[0.75rem] ml-10 ">
                Contact Us
              </button>
            </NavigationMenu>
          </nav>

          <div
            className={`flex items-center gap-4 ${!searchHidden ? 'hidden' : 'block'}`}
          >
            <Search
              className="w-5 h-5 cursor-pointer"
              onClick={() => setSearchHidden(!searchHidden)}
            />
          </div>

          <div className={`${searchHidden ? 'hidden' : 'block'}`}>
            <Box className="max-w-[30vw]">
              <TextField.Root placeholder="Search" size="2" ref={searchRef}>
                <TextField.Slot>
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Slot>
                  <IconButton size="1" variant="ghost">
                    <DotsHorizontalIcon height="14" width="14" />
                  </IconButton>
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </div>
        </div>
      </header>

      <div className="h-[68px] lg:h-22.5 w-full" />
    </>
  );
};

export default MainHeader;
