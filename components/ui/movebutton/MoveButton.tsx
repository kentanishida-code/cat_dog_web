'use client';

import { usePathname } from 'next/navigation';
import { MoveButtonBase } from './useMoveButton';

export default function MoveButton() {
  const pathname = usePathname();

  const isDetailPage =
    pathname === '/animal/cat' || pathname === '/animal/dog';

  const isAnimalPage = pathname === '/animal';

  if (isDetailPage) return null;

  if (isAnimalPage) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-3xl">
        <MoveButtonBase href="/animal/cat">猫🐈</MoveButtonBase>
        <MoveButtonBase href="/animal/dog">犬🐕</MoveButtonBase>
      </div>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen text-4xl">
      <MoveButtonBase href="/animal">
        動物選択へ
      </MoveButtonBase>
    </main>
  );
}