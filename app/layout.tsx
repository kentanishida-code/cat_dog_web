import NavBreadcrumb from '@/components/ui/nav-breadcrumb';
import MoveButton from '@/components/ui/move_button';
import type { ReactNode } from 'react';
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="bg-white border-b p-4">
        <NavBreadcrumb />
        </header>
        {children}
        <MoveButton />
      </body>
    </html>
  );
}