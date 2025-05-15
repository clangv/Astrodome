// hooks/use-auth.ts
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export type Role =
  | 'contributor'
  | 'sponsor'
  | 'mentor'
  | 'learner'
  | 'admin'
  | null

const CREDENTIALS: Record<
  string,
  { pwd: string; role: Exclude<Role, null> }
> = {
  'contributor@test.io': { pwd: 'pass123', role: 'contributor' },
  'sponsor@test.io':     { pwd: 'pass123', role: 'sponsor' },
  'mentor@test.io':      { pwd: 'pass123', role: 'mentor' },
  'learner@test.io':     { pwd: 'pass123', role: 'learner' },
  'admin@test.io':       { pwd: 'pass123', role: 'admin' },
}

export function useAuth() {
  const [role, setRole] = useState<Role>(null)

  useEffect(() => {
    setRole(localStorage.getItem('astro-role') as Role)
  }, [])

  /** Returns role string on success, null on failure */
  function login(email: string, password: string): Role {
    const creds = CREDENTIALS[email.trim().toLowerCase()]
    if (!creds || creds.pwd !== password) return null
    localStorage.setItem('astro-role', creds.role)
    setRole(creds.role)
    return creds.role
  }

  function logout() {
    localStorage.removeItem('astro-role')
    setRole(null)
  }

  return { role, login, logout }
}
