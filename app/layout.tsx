'use client';

import { useRouter } from 'next/navigation'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter()
  return (
    <html lang="ja" className={cn("font-sans", geist.variable)}>
      <body>
        {children}
        <button type="button" onClick={() => router.push('/animal')}>
          動物選択
        </button>
      </body>
    </html>
  );
}
