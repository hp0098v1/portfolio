'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type Props = {
  title: string;
  href: string;
};

export function NavLink({ title, href }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      className={cn(
        'transition-colors hover:text-primary',
        isActive ? 'text-primary' : 'text-foreground',
      )}
      href={href}
    >
      {title}
    </Link>
  );
}
