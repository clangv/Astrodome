import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Zap, Award, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container z-10 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">Astrodome</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/opportunities" className="text-muted-foreground hover:text-foreground transition-colors">
              Opportunities
            </Link>
            <Link href="/learn" className="text-muted-foreground hover:text-foreground transition-colors">
              Learn
            </Link>
            <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
              Events
            </Link>
            <Link href="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/register/contributor">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <StarField />

      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="gradient-text">Explore the Universe</span> of Opportunities
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Connect with sponsors, showcase your skills, and earn rewards in the decentralized talent ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/auth/register/contributor">
                  <Button size="lg" className="gap-2">
                    Join as Contributor
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/auth/register/sponsor">
                  <Button size="lg" variant="outline" className="gap-2">
                    Become a Sponsor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Bounties & Projects"
                description="Compete for rewards or apply to freelance projects that match your skills and interests."
              />
              <FeatureCard
                icon={<Award className="h-10 w-10 text-primary" />}
                title="Grants & Funding"
                description="Apply for grants to fund your innovative ideas and bring them to life."
              />
              <FeatureCard
                icon={<BookOpen className="h-10 w-10 text-primary" />}
                title="Learn & Grow"
                description="Access curated resources and earn certifications while building your portfolio."
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">For Contributors</h2>
                <p className="text-muted-foreground">
                  Showcase your skills, find opportunities that match your expertise, and build a portfolio of work that
                  speaks for itself.
                </p>
                <ul className="space-y-2">
                  {[
                    "Create a comprehensive profile to showcase your skills",
                    "Browse opportunities filtered by category and payment",
                    "Submit work for bounties and compete for rewards",
                    "Apply to freelance projects with tailored proposals",
                    "Receive cryptocurrency payments for completed work",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="rounded-full p-1 bg-primary/20 text-primary mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/auth/register/contributor">
                  <Button className="mt-2">Join as Contributor</Button>
                </Link>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10"></div>
                <div className="border rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Contributor Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">For Sponsors</h2>
                <p className="text-muted-foreground">
                  Post bounties, projects, or grants and connect with talented contributors who can bring your vision to
                  life.
                </p>
                <ul className="space-y-2">
                  {[
                    "Publish bounties, projects, or grants aligned with your goals",
                    "Review submissions and applications from talented contributors",
                    "Communicate directly with contributors about requirements",
                    "Track progress and measure impact with detailed analytics",
                    "Manage cryptocurrency payments for completed work",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="rounded-full p-1 bg-primary/20 text-primary mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/auth/register/sponsor">
                  <Button className="mt-2">Become a Sponsor</Button>
                </Link>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl -z-10"></div>
                <div className="border rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sponsor Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Join the Astrodome Community</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground mb-8">
              Whether you're a contributor, sponsor, mentor, or learner, there's a place for you in our ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/auth/register/contributor">
                <Button size="lg">Join as Contributor</Button>
              </Link>
              <Link href="/auth/register/sponsor">
                <Button size="lg" variant="outline">
                  Become a Sponsor
                </Button>
              </Link>
              <Link href="/auth/register/mentor-judge">
                <Button size="lg" variant="outline">
                  Join as Mentor/Judge
                </Button>
              </Link>
              <Link href="/auth/register/learner">
                <Button size="lg" variant="outline">
                  Start Learning
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/opportunities" className="text-muted-foreground hover:text-foreground transition-colors">
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/learn" className="text-muted-foreground hover:text-foreground transition-colors">
                    Learn
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
                    Marketplace
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="font-semibold">Astrodome</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Astrodome. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StarField() {
  return (
    <div className="star-field">
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

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="card-glow flex flex-col items-center text-center p-6 rounded-xl border bg-card">
      <div className="mb-4 p-3 rounded-full bg-primary/10">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
