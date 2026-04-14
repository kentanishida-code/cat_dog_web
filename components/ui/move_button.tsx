'use client';

import { useRouter } from 'next/navigation';

export default function MoveButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/animal')}>
      動物選択へ
    </button>
  );
}