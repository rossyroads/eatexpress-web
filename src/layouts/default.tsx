import { Link } from '@heroui/link';

import { Navbar } from '@/components/navbar';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <Outlet />
      </main>
      <footer className="w-full flex items-center justify-evenly py-3">
        <Link
          className="flex items-center gap-1 text-current text-xs"
          href="/terms"
        >
          <span className="text-default-600">Terms of Use</span>
        </Link>
        <Link
          className="flex items-center gap-1 text-current text-xs"
          href="/privacy"
        >
          <span className="text-default-600">Privacy Policy</span>
        </Link>
      </footer>
    </div>
  );
}
