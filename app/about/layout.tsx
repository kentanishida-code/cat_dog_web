export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <main>{children}</main>
        <nav>
          <ol>
          <li><a href="https://random-cat-jexp.vercel.app/">猫を見る</a></li>
          <li><a href="https://random-dog-opal.vercel.app/">犬を見る</a></li>
          </ol>
        </nav>

      </body>
    </html>
  );
}