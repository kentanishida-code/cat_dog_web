
'use client';

import { usePathname } from 'next/navigation';
import { BreadcrumbItem } from './types';

const NAME_MAP: Record<string, string> = {
  animal: '動物一覧',
  dog: '犬',
  cat: '猫',
};

export default function useBreadcrumb(): BreadcrumbItem[] {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return [
    {
      label: 'ホーム',
      href: '/',
      isLast: paths.length === 0,
    },
    ...paths.map((path, index) => ({
      label: NAME_MAP[path] ?? path,
      href: '/' + paths.slice(0, index + 1).join('/'),
      isLast: index === paths.length - 1,
    })),
  ];
}