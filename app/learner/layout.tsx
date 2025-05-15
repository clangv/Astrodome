// app/learner/layout.tsx
'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { Wallet } from '@coinbase/onchainkit/wallet'

export default function LearnerLayout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='flex items-center justify-between px-6 py-4 border-b'>
        <Link href='/learner' className='font-bold'>
          Astrodome
        </Link>
        <Wallet />
      </header>
      <main className='flex-1'>{children}</main>
    </div>
  )
}
