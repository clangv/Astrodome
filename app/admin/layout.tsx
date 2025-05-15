// app/admin/layout.tsx
'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='flex items-center justify-between px-6 py-4 border-b bg-background/80 backdrop-blur'>
        <Link href='/admin' className='font-bold'>
          Astrodome Admin
        </Link>
      </header>
      <main className='flex-1'>{children}</main>
    </div>
  )
}
