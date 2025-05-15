'use client'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function EditProfile() {
  return (
    <Card className='max-w-xl mx-auto'>
      <CardHeader><CardTitle>Edit profile</CardTitle></CardHeader>
      <CardContent className='space-y-4'>
        <Input placeholder='Display name' />
        <Textarea rows={4} placeholder='Bio' />
      </CardContent>
      <CardFooter><Button className='ml-auto'>Save</Button></CardFooter>
    </Card>
  )
}