import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function NavMenuItemCollapsible({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuItem >
      <NavigationMenuTrigger className='bg-bg-400! text-md py-11'>{label}</NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenuItem>
  );
}
