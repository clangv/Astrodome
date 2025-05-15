'use client'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface Params { id: string }

export default function ApplyForm({ params }: { params: Params }) {
  return (
    <Card className='m-6'>
      <CardHeader><CardTitle>Apply to {params.id}</CardTitle></CardHeader>
      <CardContent className='space-y-4'>
        <Input placeholder='Subject' />
        <Textarea rows={5} placeholder='Proposal…' />
      </CardContent>
      <CardFooter><Button className='ml-auto'>Send</Button></CardFooter>
    </Card>
  )
}