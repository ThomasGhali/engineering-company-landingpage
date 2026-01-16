interface MobileMenuCollapsibleProps {
  header: string;
  description: string;
  genericLink?: Link;
  collapsible: true;
  title: string;
  links: Link[];
}

interface MenuNormItemProps {
  collapsible: false;
  link: Link;
}

type MobileMenuItem = MobileMenuCollapsibleProps | MenuNormItemProps;
