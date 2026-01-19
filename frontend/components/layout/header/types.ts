import { Link } from '@/types';

export interface MobileMenuCollapsibleProps {
  header: string;
  description: string;
  genericLink?: Link;
  collapsible: true;
  title: string;
  links: Link[];
}

export interface MenuNormItemProps {
  collapsible: false;
  link: Link;
}

export type MobileMenuItem = MobileMenuCollapsibleProps | MenuNormItemProps;
