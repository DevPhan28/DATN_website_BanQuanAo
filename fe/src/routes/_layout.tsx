import Footer from '@/components/footer';
import Header from '@/components/header';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: () => (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  ),
});
