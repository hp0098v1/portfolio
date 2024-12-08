'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  title: string;
  href: string;
};

export function NavLink({ title, href }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'hover:text-primary transition-colors',
        isActive ? 'text-primary' : 'text-foreground'
      )}
    >
      {title}
    </Link>
  );
}
