import { NavigationMenuList } from '@/components/ui/navigation-menu';

import NavMenuItemCollapsible from './collapsible-menu-item/NavMenuItemCollapsible';
import CollapsibleWindowContent from './collapsible-menu-item/CollapsibleWindowContent';

import NavMenuItemNorm from '@/components/desktop-nav-menu/NavMenuItemNorm';

export default function NavMenuList() {
  // change it to use the cache data instead of the constant - to be changed
  const menuData: MobileMenuItem[] = [
    {
      header: 'Services',
      description: 'Something else .. i meant to write down some description in here bro but i was just lazy .. kinda .. anyways though, here is the description .. hopfully it takes the space well',
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
      description: 'Something else .. i meant to write down some description in here bro but i was just lazy .. kinda .. anyways though, here is the description .. hopfully it takes the space well',
      collapsible: true,
      title: 'locations',
      genericLink: {
        title: 'this is a link',
        href: '#'
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
        },        {
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
            <CollapsibleWindowContent
              {...item}
            />
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
