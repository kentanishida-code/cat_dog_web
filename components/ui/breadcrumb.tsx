'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const router = useRouter();
  const pathname = usePathname();

  const paths = pathname.split('/').filter(Boolean);

  const nameMap: Record<string, string> = {
    animal: '動物一覧',
    dog: '犬',
    cat: '猫',
  };

  return (
    <nav className="mb-4" aria-label="パンくずリスト">
      <ol className="flex text-sm text-gray-600">
        <li>
          <button onClick={() => router.push('/')}
            className="hover:underline">ホーム</button>
          {paths.length > 0 && <span className="mx-2">＞</span>}
        </li>
        {paths.map((path, index) => {
          const href = '/' + paths.slice(0, index + 1).join('/');
          const isLast = index === paths.length - 1;

          const label = nameMap[path] || path; // ← 日本語変換

          return (
            <li key={index}>
              {isLast ? (
                <span className="text-gray-900">{label}</span>
              ) : (
                <>
                  <button
                    onClick={() => router.push(href)}
                    className="hover:underline"
                  >
                    {label}
                  </button>
                  <span className="mx-2">＞</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}