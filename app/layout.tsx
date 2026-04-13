'use client';

import { useRouter } from 'next/navigation'

export default function RootLayout({ children }) {
  const router = useRouter()
  return (
    <html lang="ja">
      <body>
        
        {children}
        <button type="button" onClick={() => router.push('/animal')}>
          動物選択
        </button>
      </body>
    </html>
  );
}
