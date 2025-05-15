// app/auth/register/contributor/page.tsx     (repeat for sponsor | mentor-judge | learner)
'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContributorSignup() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create contributor account</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <Input placeholder='Email' type='email' />
        <Input placeholder='Password' type='password' />
        <Input placeholder='Display name' />
        <Button className='w-full'>Sign up</Button>
      </CardContent>
    </Card>
  )
}
