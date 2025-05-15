// app/sponsor/opportunities/create/page.tsx
'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function CreateOpportunity() {
  return (
    <Card className='m-6 max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle>New opportunity</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <Input placeholder='Title' />
        <Textarea rows={6} placeholder='Describe the bounty / project / grant' />
        <Input placeholder='Reward (USDC)' type='number' />
        <Input placeholder='Deadline (ISO date)' />
      </CardContent>
      <CardFooter>
        <Button className='ml-auto'>Publish</Button>
      </CardFooter>
    </Card>
  )
}
