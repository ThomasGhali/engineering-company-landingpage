import Link from "next/link";

export default function MobileMenuNormItem({ link }: MobileMenuNormItemProps) {
  return (
    <div className="mobile-menu-item p-4.5 bottom-border">
      <Link key={link.href} href={link.href} className="w-full inline-block">
        <span className="hover:underline hover:decoration-neutral-400 hover:underline-offset-2">
          {link.title}
        </span>
      </Link>
    </div>
  );
}
