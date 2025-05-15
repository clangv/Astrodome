'use client'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function MessagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen'>
      <aside className='w-64 border-r p-4 space-y-2 overflow-y-auto'>
        {[1, 2, 3].map(id => (
          <Link key={id} href={`/messages/${id}`} className='block p-2 rounded-md hover:bg-muted'>
            Conversation {id}
          </Link>
        ))}
      </aside>
      <main className='flex-1'>{children}</main>
    </div>
  )
}