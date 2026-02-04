import { auth } from '@/auth';
import { redirect } from 'next/navigation';

import LogoutButton from '@/features/dashboard/components/logout-button';

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/sign-in');
  }

  return (
    <>
      <p>Welcome, {session.user.name}</p>
    </>
  );
}
