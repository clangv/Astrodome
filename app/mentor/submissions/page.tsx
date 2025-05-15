// app/mentor/(dashboard)/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function MentorSubmissions() {
  return (
    <section className='p-6 space-y-4'>
      <Card>
        <CardHeader>
          <CardTitle>Submissions</CardTitle>
        </CardHeader>
    
      </Card>
    </section>
  )
}
