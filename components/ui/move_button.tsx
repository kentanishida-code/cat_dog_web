'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function MoveButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/animal/cat' || pathname === '/animal/dog') {
    return null;
  }

  if (pathname === '/animal') {
    return (
      <ol>
        <li>
          <button onClick={() => router.push('/animal/cat')}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
            猫🐈
          </button>
        </li>
        <li>
          <button onClick={() => router.push('/animal/dog')}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
            犬🐕
          </button>
        </li>
      </ol>
    );
  }

  return (
    <button onClick={() => router.push('/animal')}
    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
      動物選択へ
    </button>
  );
}