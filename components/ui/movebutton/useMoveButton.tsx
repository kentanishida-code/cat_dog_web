'use client';

import { useRouter } from 'next/navigation';

type Props = {
  href: string;
  children: React.ReactNode;
};

export function MoveButtonBase({ href, children }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
    >
      {children}
    </button>
  );
}