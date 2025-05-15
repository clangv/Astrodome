import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function ContributorDash() {
  const tile = (href: string, title: string) => (
    <Card><CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent><Link href={href} className='underline text-primary'>Open</Link></CardContent>
    </Card>
  )

  return (
    <section className='p-6 grid gap-4 md:grid-cols-3'>
      {tile('/contributor/submissions', 'Submissions')}
      {tile('/contributor/applications', 'Applications')}
      {tile('/contributor/earnings', 'Earnings')}
    </section>
  )
}