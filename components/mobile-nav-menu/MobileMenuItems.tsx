import MobileMenuNormItem from './MobileMenuNormItem';

import MobileMenuCollapsible from './MobileMenuCollapsible';

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
