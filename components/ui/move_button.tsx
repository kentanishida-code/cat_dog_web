'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function MoveButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/animal'||
  pathname === '/animal/cat' ||
  pathname === '/animal/dog') return null;

  return (
    <button onClick={() => router.push('/animal')}>
      動物選択へ
    </button>
  );
}