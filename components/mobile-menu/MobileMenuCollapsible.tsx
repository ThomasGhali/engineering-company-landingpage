import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import Link from 'next/link';

import { MoveRight } from 'lucide-react';

import { JSX } from 'react';

export default function MobileMenuCollapsible({
  title,
  links,
  genericLink,
}: MobileMenuCollapsibleProps): JSX.Element {
  return (
    <Accordion type="single" collapsible className="bottom-border px-5">
      <AccordionItem value="item-1">
        <AccordionTrigger className="mobile-menu-item cursor-pointer">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          {genericLink && (
            <Link
              href={genericLink?.href}
              className="text-base font-bold flex gap-2 group mt-3 mb-5"
            >
              <span>{genericLink?.title}</span>
              <MoveRight
                width={15}
                className="transition duration-200 group-hover:translate-x-1"
              />
            </Link>
          )}

          {links.map((link) => (
            <div key={link.href} className="my-7 text-base font-semibold">
              <Link href={link.href} className="">
                {link.title}
              </Link>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
