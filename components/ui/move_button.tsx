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
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-3xl">
          <button onClick={() => router.push('/animal/cat')}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
            猫🐈
          </button>
          
          <button onClick={() => router.push('/animal/dog')}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
            犬🐕
          </button>
        </div>  
      </ol>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen text-4xl">
      <button onClick={() => router.push('/animal')}
       className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
         動物選択へ
      </button>
    </main>
  );
}