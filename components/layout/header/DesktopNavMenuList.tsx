import { inriaSerif } from '@/app/fonts';

import { cn } from '@/lib/utils';

import { ExternalLink } from 'lucide-react';

import Link from 'next/link';

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

type DescriptionSectionProps = {
  header: string;
  description: string;
  genericLink?: Link;
};

const DescriptionSection = ({
  header,
  description,
  genericLink,
}: DescriptionSectionProps) => {
  return (
    <div className="w-[40%] bg-text-muted py-17 pl-8 text-white flex items-center justify-center">
      <div className="w-[95%]">
        <h1
          className={cn(
            'text-5xl mb-10 font-light tracking-tight',
            inriaSerif.className,
          )}
        >
          {header}
        </h1>

        <div className="px-6 shadow-[inset_2.5px_0_0_0_white]">
          <p className="text-md text-white/75">{description}</p>
          {genericLink && (
            <Link
              href={genericLink.href}
              className="mt-7 flex gap-2 text-lg font-semibold uppercase group tracking-wider"
            >
              <span>{genericLink.title}</span>
              <ExternalLink
                width={18}
                strokeWidth={2}
                color="var(--color-primary-100)"
                className="transition duration-200 group-hover:translate-x-1 ml-1 mt-0.5 "
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const LinksSection = ({ links }: { links: Link[] }) => {
  return (
    <div className="flex-1 grid grid-cols-[repeat(3,1fr)] gap-x-7 gap-y-8 place-content-center place-items-center text-sm font-semibold">
      {links.map((link, index) => (
        <Link key={index} href={link.href}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

function DesktopCollapsible({
  description,
  header,
  links,
  genericLink,
}: MobileMenuCollapsibleProps) {
  return (
    <div className="flex min-h-[300px] w-screen">
      <DescriptionSection
        description={description}
        header={header}
        genericLink={genericLink!}
      />
      <LinksSection links={links} />
    </div>
  );
}

function NavMenuItemCollapsible({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-bg-100! text-md py-11">
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function NavMenuItemNorm({ title, href }: Link) {
  return (
    <Link href={href} className="font-medium">
      {title}
    </Link>
  );
}

export default function DesktopNavMenuList() {
  // change it to use the cache data instead of the constant - to be changed
  const menuData: MobileMenuItem[] = [
    {
      header: 'Services',
      description:
        'Something else .. i meant to write down some description in here bro but i was just lazy .. kinda .. anyways though, here is the description .. hopfully it takes the space well',
      genericLink: {
        href: '#',
        title: 'Something',
      },
      collapsible: true,
      title: 'services',
      links: [
        {
          title: 'Service 1',
          href: '#',
        },
        {
          title: 'Service 2',
          href: '#',
        },
        {
          title: 'Service 3',
          href: '#',
        },
      ],
    },
    {
      header: 'Locations',
      description:
        'Something else .. i meant to write down some description in here bro but i was just lazy .. kinda .. anyways though, here is the description .. hopfully it takes the space well',
      collapsible: true,
      title: 'locations',
      genericLink: {
        title: 'this is a link',
        href: '#',
      },
      links: [
        {
          title: 'Service 1',
          href: '#',
        },
        {
          title: 'Service 2',
          href: '#',
        },
        {
          title: 'Service 3',
          href: '#',
        },
        {
          title: 'Service 3',
          href: '#',
        },
        {
          title: 'Service 3',
          href: '#',
        },
        {
          title: 'Service 3',
          href: '#',
        },
        {
          title: 'Service 3',
          href: '#',
        },
        {
          title: 'Service 3',
          href: '#',
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
    <NavigationMenuList>
      {menuData.map((item, index) =>
        item.collapsible ? (
          <NavMenuItemCollapsible key={item.title} label={item.title}>
            <DesktopCollapsible {...item} />
          </NavMenuItemCollapsible>
        ) : (
          <NavMenuItemNorm
            key={item.link.title}
            title={item.link.title}
            href={item.link.href}
          />
        ),
      )}
    </NavigationMenuList>
  );
}
