import { Navbar } from '@/components/navbar';
import { Link } from '@heroui/react';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  const year = new Date().getFullYear();
  return (
    <div className="relative flex flex-col h-screen  px-6">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <Outlet />
      </main>
      <footer className="flex flex-col text-default-600 text-xs items-center gap-1">
        <div className="w-full flex items-center justify-evenly py-3">
          <Link
            className="flex items-center gap-1 text-xs text-default-600"
            href="/terms"
          >
            <span>Terms of Use</span>
          </Link>
          <Link
            className="flex items-center gap-1 text-xs text-default-600"
            href="/privacy"
          >
            <span>Privacy Policy</span>
          </Link>
        </div>
        <div>
          Images provided by freefoodphotos.com and licensed under a Creative
          Commons Attribution 3.0 Unported License.
        </div>
        <div>© {year} p6dash SARL, All rights reserved.</div>
      </footer>
    </div>
  );
}
