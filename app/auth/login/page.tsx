// app/auth/login/page.tsx
'use client'

import { useState } from 'react'
import { useAuth, Role } from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'
import {
  Card, CardHeader, CardTitle, CardContent, CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const { login } = useAuth()
  const router     = useRouter()

  const [email, setEmail] = useState('')
  const [pwd,   setPwd]   = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')                              // clear old message
    const role: Role = login(email, pwd)
    if (!role) return setError('Invalid credentials')
    router.replace('/' + role)                // e.g. /contributor
  }

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-md'>
      <Card>
        <CardHeader><CardTitle>Log in</CardTitle></CardHeader>

        <CardContent className='space-y-4'>
          <Input
            placeholder='Email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder='Password'
            type='password'
            value={pwd}
            onChange={e => setPwd(e.target.value)}
          />
          {error && <p className='text-sm text-destructive'>{error}</p>}
        </CardContent>

        <CardFooter>
          <Button className='w-full'>Enter</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
