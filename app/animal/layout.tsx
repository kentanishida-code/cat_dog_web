import MoveButton from '@/components/ui/move_button2';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <MoveButton />
    </div>
  );
}

