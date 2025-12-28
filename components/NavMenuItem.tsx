import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function NavMenuItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className='bg-bg-400! text-md'>{label}</NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenuItem>
  );
}
