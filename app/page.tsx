import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, Users, BookOpen, Award, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-bold text-2xl text-[#3B82F6]">Astrodome</div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/marketplace" className="font-medium transition-colors hover:text-[#3B82F6]">
              Marketplace
            </Link>
            <Link href="/community" className="font-medium transition-colors hover:text-[#3B82F6]">
              Community
            </Link>
            <Link href="/learn" className="font-medium transition-colors hover:text-[#3B82F6]">
              Learn
            </Link>
            <Link href="/events" className="font-medium transition-colors hover:text-[#3B82F6]">
              Events
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                My Profile
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-[#3B82F6] hover:bg-[#2563EB]">Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#EFF6FF] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
              <div className="lg:col-span-2 flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#1E3A8A]">
                    Build Your Web3 Career
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Connect with top projects, showcase your skills, and earn in crypto while building the future of the
                    web.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/marketplace">
                    <Button className="bg-[#3B82F6] hover:bg-[#2563EB]">Find Opportunities</Button>
                  </Link>
                  <Link href="/profile/create">
                    <Button variant="outline">Create Profile</Button>
                  </Link>
                </div>

                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden bg-[#BFDBFE] flex items-center justify-center mt-6 lg:hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#93C5FD] to-[#3B82F6] opacity-20"></div>
                  <div className="relative z-10 text-center p-6">
                    <div className="text-5xl mb-4">👩‍💻</div>
                    <p className="text-[#1E3A8A] font-medium">Join 10,000+ builders in the Solana ecosystem</p>
                  </div>
                </div>
              </div>

              {/* Highlighted Event Side Div */}
              <div className="lg:col-span-1">
                <Card className="border-[#BFDBFE] overflow-hidden shadow-lg bg-white">
                  <div className="relative">
                    <div className="h-40 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] flex items-center justify-center">
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white text-[#3B82F6] px-3 py-1 text-sm font-medium">FEATURED EVENT</Badge>
                      </div>
                      <div className="text-white text-center p-6 z-10">
                        <div className="text-4xl mb-2">🚀</div>
                        <h3 className="text-xl font-bold">Astrodome Hackathon</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-[#3B82F6]" />
                          <span className="font-medium">June 15-30, 2025</span>
                        </div>
                        <Badge variant="outline" className="border-[#3B82F6] text-[#3B82F6]">
                          Virtual
                        </Badge>
                      </div>

                      <p className="text-gray-600">
                        Join the biggest Web3 hackathon of the year with $100K in prizes and opportunities to build the
                        future of decentralized applications.
                      </p>

                      <div className="pt-2 space-y-2">
                        <h4 className="font-medium text-[#1E3A8A]">Tracks:</h4>
                        <div className="flex flex-wrap gap-2">
                          {["DeFi", "NFTs", "Gaming", "Social", "Infrastructure"].map((track) => (
                            <Badge key={track} variant="secondary" className="bg-[#EFF6FF] text-[#3B82F6]">
                              {track}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <h4 className="font-medium text-[#1E3A8A] mb-2">Prizes:</h4>
                        <div className="flex justify-between text-sm">
                          <span>🥇 First Place</span>
                          <span className="font-bold">$50,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>🥈 Second Place</span>
                          <span className="font-bold">$30,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>🥉 Third Place</span>
                          <span className="font-bold">$20,000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-[#F8FAFC] border-t border-[#BFDBFE] p-6">
                    <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB]">Register Now</Button>
                  </CardFooter>
                </Card>

                <div className="mt-6">
                  <Link href="/events">
                    <Button variant="outline" className="w-full border-[#3B82F6] text-[#3B82F6]">
                      View All Events <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1E3A8A]">
                  How Astrodome Works
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Connect, build, and grow in the Web3 ecosystem
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="border-[#BFDBFE] hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <CardTitle className="text-xl text-[#1E3A8A]">Find Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Browse bounties, gigs, and full-time roles filtered to match your skills and experience level.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/marketplace">
                    <Button variant="ghost" className="text-[#3B82F6] p-0 hover:bg-transparent hover:text-[#2563EB]">
                      Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-[#BFDBFE] hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <CardTitle className="text-xl text-[#1E3A8A]">Build Your Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Connect with mentors, form teams, and collaborate with other builders in the ecosystem.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/community">
                    <Button variant="ghost" className="text-[#3B82F6] p-0 hover:bg-transparent hover:text-[#2563EB]">
                      Join Community <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-[#BFDBFE] hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <CardTitle className="text-xl text-[#1E3A8A]">Learn & Grow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Access curated resources, earn while you learn, and get mentorship from industry experts.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/learn">
                    <Button variant="ghost" className="text-[#3B82F6] p-0 hover:bg-transparent hover:text-[#2563EB]">
                      Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#EFF6FF]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1E3A8A]">
                  Featured Opportunities
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Latest bounties and gigs from top Web3 projects
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Solana DeFi Dashboard UI",
                  description: "Design and implement a user-friendly dashboard for a DeFi protocol",
                  reward: "2,500 USDC",
                  difficulty: "Intermediate",
                  skills: ["UI/UX", "React", "Web3"],
                  deadline: "7 days",
                },
                {
                  title: "NFT Marketplace Integration",
                  description: "Build an integration with our NFT marketplace API",
                  reward: "3,000 USDC",
                  difficulty: "Advanced",
                  skills: ["Rust", "TypeScript", "Solana"],
                  deadline: "14 days",
                },
                {
                  title: "Web3 Tutorial Writer",
                  description: "Create beginner-friendly tutorials for Solana development",
                  reward: "800 USDC",
                  difficulty: "Beginner",
                  skills: ["Technical Writing", "Solana"],
                  deadline: "5 days",
                },
              ].map((gig, index) => (
                <Card key={index} className="bg-white border-[#BFDBFE] hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-[#1E3A8A]">{gig.title}</CardTitle>
                      <Badge className="bg-[#3B82F6]">{gig.reward}</Badge>
                    </div>
                    <CardDescription>{gig.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {gig.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-[#3B82F6] border-[#BFDBFE]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Difficulty: {gig.difficulty}</span>
                      <span>Deadline: {gig.deadline}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB]">Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/marketplace">
                <Button variant="outline" className="border-[#3B82F6] text-[#3B82F6]">
                  View All Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1E3A8A]">
                  Success Stories
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Meet the builders who found success through Astrodome
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="border-[#BFDBFE] hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#BFDBFE] flex items-center justify-center">
                      <span className="text-2xl">👨‍💻</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-[#1E3A8A]">Alex M.</CardTitle>
                      <CardDescription>Full-Stack Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "I started with small bounties to learn Solana development. Within 6 months, I landed a full-time
                    role at a top DeFi protocol and have contributed to projects with over $100M TVL."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#3B82F6]" />
                    <span className="text-sm text-gray-500">Completed 24 bounties</span>
                  </div>
                </CardFooter>
              </Card>
              <Card className="border-[#BFDBFE] hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#BFDBFE] flex items-center justify-center">
                      <span className="text-2xl">👩‍🎨</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-[#1E3A8A]">Priya S.</CardTitle>
                      <CardDescription>UI/UX Designer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Astrodome helped me transition from Web2 to Web3 design. The mentorship was invaluable, and I've
                    now designed interfaces used by thousands of crypto users daily."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#3B82F6]" />
                    <span className="text-sm text-gray-500">Completed 18 bounties</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-[#EFF6FF] py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl text-[#3B82F6]">Astrodome</div>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="text-sm text-gray-500">© 2025 Astrodome. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
