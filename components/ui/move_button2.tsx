'use client';

import { useRouter } from 'next/navigation';

export default function MoveButton() {
  const router = useRouter();

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