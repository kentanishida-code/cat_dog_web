'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function MoveButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/animal/cat' ||
      pathname === '/animal/dog') return null;

  return (
    <ol>
        <li><button type="button" onClick={() => router.push('animal/cat')}>
          猫🐈
        </button></li>
        <li><button type="button" onClick={() => router.push('animal/dog')}>
          犬🐕
        </button></li>
    </ol>
  );
}