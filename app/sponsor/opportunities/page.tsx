// app/sponsor/opportunities/create/page.tsx
'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Opportunity() {
  return (
    <Card className='m-6 max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle>New opportunity</CardTitle>
      </CardHeader>
    </Card>
  )
}
