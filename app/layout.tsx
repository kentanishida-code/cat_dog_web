import BreadcrumbContainer from '@/components/ui/breadcrumb/BreadcrumbContainer';
import MoveButton from '@/components/ui/movebutton/MoveButton';
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
        <BreadcrumbContainer />
        </header>
        {children}
        <MoveButton />
      </body>
    </html>
  );
}