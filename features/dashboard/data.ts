import { SideBarMenus } from '@/features/dashboard/types';
import { BookOpen, Bug, Home, LayoutDashboard, Mails } from 'lucide-react';

export const sideBarContent: SideBarMenus = [
  {
    header: 'UI Elements',
    items: [
      {
        title: 'Components',
        collapsible: true,
        icon: LayoutDashboard,
        subItems: [
          {
            label: 'Dashboard',
            href: '/admin/dashboard/overview',
          },
          {
            label: 'Buttons',
            href: '/admin/dashboard/overview',
          },
        ],
      },
      {
        collapsible: true,
        title: 'Pages',
        icon: BookOpen,
        subItems: [
          {
            label: 'Locations',
            href: '/admin/dashboard/locations',
          },
          {
            label: 'Projects',
            href: '/admin/dashboard/projects',
          },
        ],
      },
    ],
  },

  {
    header: 'Support',
    items: [
      {
        label: 'Messages',
        href: '/admin/dashboard/messages',
        collapsible: false,
        icon: Mails,
      },
      {
        label: 'Issues',
        href: '/admin/dashboard/issues',
        collapsible: false,
        icon: Bug,
      },
    ],
  },
];
