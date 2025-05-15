// app/admin/(dashboard)/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <section className='p-6 grid gap-4 md:grid-cols-3'>
      <Card>
        <CardHeader>
          <CardTitle>Pending approvals</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href='/admin/opportunities/approval' className='underline text-primary'>
            Review opportunities
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href='/admin/users' className='underline text-primary'>
            Manage accounts
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Referrals</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href='/admin/referral' className='underline text-primary'>
            Referral program
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}
