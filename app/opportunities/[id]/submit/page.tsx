'use client'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Params { id: string }

export default function SubmitWork({ params }: { params: Params }) {
  return (
    <Card className='m-6'>
      <CardHeader><CardTitle>Submit to {params.id}</CardTitle></CardHeader>
      <CardContent className='space-y-4'>
        <Input placeholder='GitHub repo / IPFS CID' />
      </CardContent>
      <CardFooter><Button className='ml-auto'>Upload</Button></CardFooter>
    </Card>
  )
}