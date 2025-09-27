import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { isAuthenticated } = await auth()

  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>
  }

  const user = await currentUser()

  return (
    <div>
      <h1 className='text-2xl font-bold mb-5'>Dashboard</h1>
      <div className='mb-5'>
        <p>Welcome, {user?.firstName}!</p>
        <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
        <p>사용자 등록 : {user?.createdAt}</p>
      </div>
    </div>
  )
}