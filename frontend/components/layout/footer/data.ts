type FooterList = {
  header: string;
  items: {
    title: string;
    href: string;
  }[];
};

export const footerList: FooterList[] = [
  // About list
  {
    header: 'About',
    items: [
      {
        title: 'Company Overview',
        href: '/',
      },
      {
        title: 'Leadership',
        href: '/',
      },
      {
        title: 'Board of Directors',
        href: '/',
      },
      {
        title: 'Contact Us',
        href: '/',
      },
      {
        title: 'News',
        href: '/',
      },
      {
        title: 'Find an Office',
        href: '/',
      },
      {
        title: 'Supplier Informations',
        href: '/',
      },
    ],
  },

  // Expertise list
  {
    header: 'Expertise',
    items: [
      {
        title: 'Projects',
        href: '/',
      },
      {
        title: 'Environment',
        href: '/',
      },
      {
        title: 'Water',
        href: '/',
      },
      {
        title: 'Energy',
        href: '/',
      },
      {
        title: 'Infrastructure',
        href: '/',
      },
    ],
  },

  // Career list
  {
    header: 'Careers',
    items: [
      {
        title: 'Our Greener Future Culture',
        href: '/',
      },
      {
        title: 'Our Values',
        href: '/',
      },
      {
        title: 'Veteran & Military',
        href: '/',
      },
      {
        title: 'Students & Graduates',
        href: '/',
      },
      {
        title: 'Search & Apply',
        href: '/',
      },
    ],
  },
];
