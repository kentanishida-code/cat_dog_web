'use client';

import { useRouter } from 'next/navigation';
import useBreadcrumb from '@/components/ui/breadcrumb';

export default function NavBreadcrumb() {
  const router = useRouter();
  const items = useBreadcrumb();

  return (
    <nav aria-label="パンくずリスト">
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.isLast ? (
              <span>{item.label}</span>
            ) : (
              <>
                <button
                  onClick={() => router.push(item.href)}
                  className="hover:underline"
                >
                  {item.label}
                </button>
                <span className="mx-2 text-gray-400">{'>'}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}