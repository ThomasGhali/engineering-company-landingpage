type Link = {
  title: string;
  href: string;
};

interface MobileMenuCollapsibleProps {
  genericLink?: Link;
  collapsible: true;
  title: string;
  links: Link[];
}

interface MobileMenuNormItemProps {
  collapsible: false;
  link: Link;
}

type MobileMenuItem = MobileMenuCollapsibleProps | MobileMenuNormItemProps;