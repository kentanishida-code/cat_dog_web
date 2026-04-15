'use client';

import { usePathname } from 'next/navigation';

export type BreadcrumbItem = {
  label: string;
  href: string;
  isLast: boolean;
};

export default function useBreadcrumb(): BreadcrumbItem[] {
  const pathname = usePathname();

  const paths = pathname.split('/').filter(Boolean);

  const nameMap: Record<string, string> = {
    animal: '動物一覧',
    dog: '犬',
    cat: '猫',
  };

  const items: BreadcrumbItem[] = [];

  items.push({
    label: 'ホーム',
    href: '/',
    isLast: paths.length === 0,
  });

  paths.forEach((path, index) => {
    const href = '/' + paths.slice(0, index + 1).join('/');
    const isLast = index === paths.length - 1;

    items.push({
      label: nameMap[path] || path,
      href,
      isLast,
    });
  });

  return items;
}