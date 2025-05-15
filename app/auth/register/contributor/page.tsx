'use client'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ContributorSignup() {
  return (
    <Card>
      <CardHeader><CardTitle>Contributor sign-up</CardTitle></CardHeader>
      <CardContent className='space-y-4'>
        <Input placeholder='Email' />
        <Input placeholder='Password' type='password' />
        <Input placeholder='Display name' />
      </CardContent>
      <CardFooter><Button className='w-full'>Create account</Button></CardFooter>
    </Card>
  )
}