import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Params { id: string }

export default function OpportunityDetail({ params }: { params: Params }) {
  return (
    <section className='p-6 space-y-4'>
      <h1 className='text-3xl font-bold'>Opportunity {params.id}</h1>
      <p className='text-muted-foreground'>Detailed description…</p>
      <div className='flex gap-2'>
        <Button asChild><Link href={`/opportunities/${params.id}/apply`}>Apply</Link></Button>
        <Button variant='secondary' asChild>
          <Link href={`/opportunities/${params.id}/submit`}>Submit work</Link>
        </Button>
      </div>
    </section>
  )
}