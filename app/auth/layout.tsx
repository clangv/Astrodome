import type React from "react"
import Link from "next/link"
import { Rocket } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex flex-col bg-muted/30 p-10 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background z-0"></div>
        <StarField />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-20">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Astrodome</span>
          </Link>

          <div className="space-y-6 mt-auto">
            <h1 className="text-4xl font-bold">Join the Astrodome Ecosystem</h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Connect with sponsors, showcase your skills, and earn rewards in the decentralized talent ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-card/20 backdrop-blur-sm">
                <h3 className="font-medium mb-2">For Contributors</h3>
                <p className="text-sm text-muted-foreground">
                  Showcase your skills and find opportunities that match your expertise.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card/20 backdrop-blur-sm">
                <h3 className="font-medium mb-2">For Sponsors</h3>
                <p className="text-sm text-muted-foreground">Post bounties and connect with talented contributors.</p>
              </div>
              <div className="p-4 rounded-lg bg-card/20 backdrop-blur-sm">
                <h3 className="font-medium mb-2">For Mentors & Judges</h3>
                <p className="text-sm text-muted-foreground">Guide contributors and evaluate submissions.</p>
              </div>
              <div className="p-4 rounded-lg bg-card/20 backdrop-blur-sm">
                <h3 className="font-medium mb-2">For Learners</h3>
                <p className="text-sm text-muted-foreground">
                  Access resources and earn certifications while building your portfolio.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-20">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Astrodome. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}

function StarField() {
  return (
    <div className="absolute inset-0 z-0">
      {Array.from({ length: 100 }).map((_, i) => {
        const size = Math.random() * 2 + 1
        const style = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          "--duration": `${Math.random() * 5 + 2}s`,
        } as React.CSSProperties

        return <div key={i} className="star" style={style} />
      })}
    </div>
  )
}
