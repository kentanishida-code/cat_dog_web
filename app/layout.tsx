import NavBreadcrumb from '@/components/ui/breadcrumb';
import MoveButton from '@/components/ui/move_button';
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header>
        <NavBreadcrumb />
        </header>
        {children}
        <MoveButton />
      </body>
    </html>
  );
}

