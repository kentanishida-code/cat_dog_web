// components/NavBreadcrumb.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBreadcrumb() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const paths = pathname.split('/').filter(Boolean);

  return (
    <nav className="flex items-center text-sm p-4 border-b">
      <Link href="/">ホーム</Link>

      {paths.map((path, index) => {
        const href = '/' + paths.slice(0, index + 1).join('/');
        const isLast = index === paths.length - 1;

        return (
          <span key={index} className="flex items-center">
            <span className="mx-2">&gt;</span>

            {isLast ? (
              <span>{path}</span>
            ) : (
              <Link href={href}>{path}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}