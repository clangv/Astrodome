// app/sponsor/(dashboard)/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function SponsorDashboard() {
  return (
    <section className='p-6 grid gap-4 sm:grid-cols-3'>
      <Card>
        <CardHeader>
          <CardTitle>Post new opportunity</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href='/sponsor/opportunities/create' className='text-primary underline'>
            Create
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Manage payments</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href='/sponsor/payments' className='text-primary underline'>
            View
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href='/sponsor/analytics' className='text-primary underline'>
            See stats
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}
