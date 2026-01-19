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
  const [isHeaderHidden, setIsHeaderHidden] = useState<boolean>(false);
  const headerStyle = isHeaderHidden ? '-translate-y-full' : 'translate-y-[0%]';

  const [searchHidden, setSearchHidden] = useState<boolean>(true);
  const [entryAnimationComplete, setEntryAnimationComplete] =
    useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEntryAnimationComplete(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();

  // check if enough scroll happened to hide the header
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    const delta = latest - previous;

    if (latest < 50 && isHeaderHidden) {
      setIsHeaderHidden(false);
      return;
    }

    if (delta > 15 && !isHeaderHidden) {
      setIsHeaderHidden(true);
      return;
    }

    if (delta < -15 && isHeaderHidden) {
      setIsHeaderHidden(false);
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
      <header
        className={`
          fixed inset-0 z-50 w-screen h-[68px] lg:h-22.5 
          flex-center pl-6 pr-12 py-4 
          bg-charcoal-700 border-b border-white 
          ${
            entryAnimationComplete
              ? `transition-transform duration-100 ${headerStyle}`
              : 'animate-[headerSlideDown_2s_ease-in-out_1s_backwards]'
          }
        `}
      >
        <div className="flex justify-between items-center w-full [&>*:not(:nth-child(3))]:cursor-pointer">
          {/* mobile */}
          <MobileMenu />

          <Image
            src="/logo-white.png"
            alt="logo"
            width={105}
            height={28}
            priority
          />

          {/* desktop */}
          <nav className="hidden lg:block">
            <NavigationMenu>
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
              color="white"
              className="w-5 h-5 cursor-pointer"
              onClick={() => setSearchHidden(!searchHidden)}
            />
          </div>

          <div className={`${searchHidden ? 'hidden' : 'block'}`}>
            <Box className="max-w-[30vw] bg-charcoal-900">
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
    </>
  );
};

export default MainHeader;
