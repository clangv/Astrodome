import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function BrowseOpportunities() {
  return (
    <div className='p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {[1, 2, 3].map(id => (
        <Card key={id}>
          <CardHeader><CardTitle>Opportunity #{id}</CardTitle></CardHeader>
          <CardContent>
            <Link href={`/opportunities/${id}`} className='text-primary underline'>View</Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}