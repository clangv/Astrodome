// app/mentor/(dashboard)/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function MentorDashboard() {
  return (
    <section className='p-6 space-y-4'>
      <Card>
        <CardHeader>
          <CardTitle>Pending reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href='/mentor/submissions' className='text-primary underline'>
            Review submissions
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}
