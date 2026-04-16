
'use client';

import Link from 'next/link';
import { BreadcrumbItem } from './types';

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="パンくず">
      <ol className="flex items-center text-sm">
        {items.map((item) => (
          <li key={item.href} className="flex items-center">
            {item.isLast ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <>
                <Link href={item.href}>{item.label}</Link>
                <span className="mx-2">/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}