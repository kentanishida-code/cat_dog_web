'use client';

import { useRouter } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter()
  return (
    <html lang="ja">
      <body>
        {children}
        <ol>
        <li><button type="button" onClick={() => router.push('animal/cat')}>
          猫🐈
        </button></li>
        <li><button type="button" onClick={() => router.push('animal/dog')}>
          犬🐕
        </button></li>
        </ol>
      </body>
    </html>
  );
}

