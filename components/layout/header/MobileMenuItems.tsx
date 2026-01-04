import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import Link from 'next/link';

import { MoveRight } from 'lucide-react';

import { JSX } from 'react';

function MobileMenuNormItem({ link }: MenuNormItemProps) {
  return (
    <div className="mobile-menu-item p-4.5 bottom-border">
      <Link key={link.href} href={link.href} className="w-full inline-block">
        <span className="hover:underline hover:decoration-text-main hover:underline-offset-2">
          {link.title}
        </span>
      </Link>
    </div>
  );
}

function MobileMenuCollapsible({
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
              <Link href={link.href}>{link.title}</Link>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default function MobileMenuItems() {
  // use cached data instead for admin data control        to be changed
  const menuData: MobileMenuItem[] = [
    {
      header: 'Services',
      description: 'Something',
      genericLink: {
        href: '#',
        title: 'Something',
      },
      collapsible: true,
      title: 'Services',
      links: [
        {
          title: 'Service 1',
          href: '1',
        },
        {
          title: 'Service 2',
          href: '2',
        },
        {
          title: 'Service 3',
          href: '3',
        },
      ],
    },
    {
      header: 'Locations',
      description: 'Something else',
      collapsible: true,
      title: 'Locations',
      links: [
        {
          title: 'Service 1',
          href: '4',
        },
        {
          title: 'Service 2',
          href: '5',
        },
        {
          title: 'Service 3',
          href: '6',
        },
      ],
    },
    {
      collapsible: false,
      link: {
        href: '#',
        title: 'Something',
      },
    },
  ];

  return (
    <div>
      {menuData.map((item) =>
        item.collapsible ? (
          <MobileMenuCollapsible key={item.title} {...item} />
        ) : (
          <MobileMenuNormItem key={item.link.title} {...item} />
        ),
      )}
    </div>
  );
}
