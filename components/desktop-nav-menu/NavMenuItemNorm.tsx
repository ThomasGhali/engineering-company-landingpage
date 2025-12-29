import Link from "next/link";

export default function NavMenuItemNorm({ title, href }: Link) {
  return (
    <Link href={href}>{title}</Link>
  )
}
