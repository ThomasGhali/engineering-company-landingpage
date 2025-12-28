'use client';

// to be changed: no need to make it a client component
// but instead just grab the cache and use it (instead of useState)

import { JSX, useState } from 'react';


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Menu } from 'lucide-react';

import MobileMenuItems from './MobileMenuItems';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const menuExpandBtnStyle = open ? 'rotate-45' : 'rotate-0';

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="relative w-6 h-6 lg:hidden cursor-pointer">
          <Menu className={`menu-expand-btn ${menuExpandBtnStyle}`} />
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-neutral-400 text-xl font-medium">
            MENU
          </SheetTitle>
          <SheetDescription className="text-neutral-100">
            Navigation menu
          </SheetDescription>
        </SheetHeader>

        <MobileMenuItems />

        <SheetFooter>
          <button className="contact-button text-lg mb-2">Contact Us</button>
          <SheetClose className="close-button">Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
