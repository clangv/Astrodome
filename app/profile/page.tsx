import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function MyProfile() {
  return (
    <section className='max-w-xl mx-auto p-6 space-y-6'>
      <div className='flex items-center gap-4'>
        <Avatar><AvatarFallback>ME</AvatarFallback></Avatar>
        <div>
          <h2 className='text-xl font-semibold'>Jane Doe</h2>
          <p className='text-muted-foreground'>@jane</p>
        </div>
      </div>
      <p>“Blockchain dev & smart-contract auditor.”</p>
      <Button asChild><Link href='/profile/edit'>Edit profile</Link></Button>
    </section>
  )
}