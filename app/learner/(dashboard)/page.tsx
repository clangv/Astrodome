// app/learner/(dashboard)/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function LearnerDashboard() {
  return (
    <section className='p-6 grid gap-4 sm:grid-cols-2'>
      <Card>
        <CardHeader>
          <CardTitle>Learning resources</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href='/learner/learn' className='underline text-primary'>
            Browse tutorials
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href='/learner/progress' className='underline text-primary'>
            View progress
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}
