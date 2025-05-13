import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Video, FileText, Code, ArrowRight, Clock } from "lucide-react"

export default function LearnPage() {
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
            <Link href="/learn" className="font-medium transition-colors text-[#3B82F6]">
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
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#EFF6FF] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1E3A8A]">
                    Learn Web3 Development
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Access curated resources, earn while you learn, and get mentorship from industry experts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#courses">
                    <Button className="bg-[#3B82F6] hover:bg-[#2563EB]">Browse Courses</Button>
                  </Link>
                  <Link href="#mentorship">
                    <Button variant="outline">Find a Mentor</Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Card className="w-full max-w-md border-[#BFDBFE]">
                  <CardHeader>
                    <CardTitle className="text-[#1E3A8A]">Your Learning Progress</CardTitle>
                    <CardDescription>Continue where you left off</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Solana Fundamentals</span>
                        <span className="text-sm text-gray-500">65%</span>
                      </div>
                      <Progress value={65} className="h-2 bg-[#BFDBFE]" indicatorClassName="bg-[#3B82F6]" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Rust for Blockchain</span>
                        <span className="text-sm text-gray-500">30%</span>
                      </div>
                      <Progress value={30} className="h-2 bg-[#BFDBFE]" indicatorClassName="bg-[#3B82F6]" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Web3 Frontend Development</span>
                        <span className="text-sm text-gray-500">80%</span>
                      </div>
                      <Progress value={80} className="h-2 bg-[#BFDBFE]" indicatorClassName="bg-[#3B82F6]" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB]">Continue Learning</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1E3A8A]">
                  Learning Paths
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Structured courses to help you master Web3 development
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-[#EFF6FF]">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white">
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="beginner"
                  className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white"
                >
                  Beginner
                </TabsTrigger>
                <TabsTrigger
                  value="intermediate"
                  className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white"
                >
                  Intermediate
                </TabsTrigger>
                <TabsTrigger
                  value="advanced"
                  className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white"
                >
                  Advanced
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Solana Fundamentals",
                      description: "Learn the basics of Solana blockchain and its architecture",
                      level: "Beginner",
                      duration: "4 weeks",
                      modules: 12,
                      image: "/placeholder.svg?height=200&width=400",
                      icon: <BookOpen className="h-5 w-5 text-[#3B82F6]" />,
                    },
                    {
                      title: "Rust for Blockchain",
                      description: "Master Rust programming for blockchain development",
                      level: "Intermediate",
                      duration: "6 weeks",
                      modules: 18,
                      image: "/placeholder.svg?height=200&width=400",
                      icon: <Code className="h-5 w-5 text-[#3B82F6]" />,
                    },
                    {
                      title: "Web3 Frontend Development",
                      description: "Build user interfaces for decentralized applications",
                      level: "Beginner",
                      duration: "5 weeks",
                      modules: 15,
                      image: "/placeholder.svg?height=200&width=400",
                      icon: <FileText className="h-5 w-5 text-[#3B82F6]" />,
                    },
                    {
                      title: "Smart Contract Security",
                      description: "Learn to audit and secure smart contracts",
                      level: "Advanced",
                      duration: "8 weeks",
                      modules: 20,
                      image: "/placeholder.svg?height=200&width=400",
                      icon: <Code className="h-5 w-5 text-[#3B82F6]" />,
                    },
                    {
                      title: "DeFi Protocol Development",
                      description: "Build decentralized finance applications on Solana",
                      level: "Advanced",
                      duration: "10 weeks",
                      modules: 24,
                      image: "/placeholder.svg?height=200&width=400",
                      icon: <Code className="h-5 w-5 text-[#3B82F6]" />,
                    },
                    {
                      title: "NFT Development",
                      description: "Create and deploy NFT collections on Solana",
                      level: "Intermediate",
                      duration: "6 weeks",
                      modules: 16,
                      image: "/placeholder.svg?height=200&width=400",
                      icon: <FileText className="h-5 w-5 text-[#3B82F6]" />,
                    },
                  ].map((course, i) => (
                    <Card key={i} className="border-[#BFDBFE] overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video w-full bg-[#BFDBFE]">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-2">
                            <div className="mt-0.5">{course.icon}</div>
                            <div>
                              <CardTitle className="text-xl text-[#1E3A8A]">{course.title}</CardTitle>
                              <CardDescription className="flex items-center gap-1">
                                <Badge variant="secondary" className="bg-[#EFF6FF] text-[#3B82F6]">
                                  {course.level}
                                </Badge>
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{course.modules} modules</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB]">Start Learning</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="beginner" className="mt-6">
                {/* Beginner courses would go here */}
              </TabsContent>

              <TabsContent value="intermediate" className="mt-6">
                {/* Intermediate courses would go here */}
              </TabsContent>

              <TabsContent value="advanced" className="mt-6">
                {/* Advanced courses would go here */}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="mentorship" className="w-full py-12 md:py-24 bg-[#EFF6FF]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1E3A8A]">
                  Find a Mentor
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Connect with experienced developers who can guide your Web3 journey
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Alex Chen",
                  role: "Senior Solana Developer",
                  expertise: ["Smart Contracts", "Rust", "DeFi"],
                  bio: "5+ years of blockchain development experience. Previously at Solana Labs.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Sarah Johnson",
                  role: "Frontend Web3 Expert",
                  expertise: ["React", "TypeScript", "Web3.js"],
                  bio: "Specialized in building intuitive UIs for decentralized applications.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Michael Rodriguez",
                  role: "Blockchain Architect",
                  expertise: ["System Design", "Security", "Performance"],
                  bio: "Designed and implemented multiple high-volume DeFi protocols.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Emily Zhang",
                  role: "NFT Developer",
                  expertise: ["NFTs", "Marketplaces", "Metadata"],
                  bio: "Created several successful NFT collections and marketplace platforms.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "David Kim",
                  role: "Security Researcher",
                  expertise: ["Auditing", "Exploits", "Best Practices"],
                  bio: "Identified and fixed critical vulnerabilities in major protocols.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Lisa Patel",
                  role: "Technical Writer",
                  expertise: ["Documentation", "Tutorials", "Education"],
                  bio: "Specializes in making complex blockchain concepts accessible to beginners.",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((mentor, i) => (
                <Card key={i} className="border-[#BFDBFE] hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={mentor.image || "/placeholder.svg"} alt={mentor.name} />
                        <AvatarFallback className="bg-[#BFDBFE] text-[#1E3A8A] text-xl">
                          {mentor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl text-[#1E3A8A]">{mentor.name}</CardTitle>
                        <CardDescription>{mentor.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-600 mb-4">{mentor.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.expertise.map((skill, j) => (
                        <Badge key={j} variant="outline" className="text-[#3B82F6] border-[#BFDBFE]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB]">Request Mentorship</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1E3A8A]">
                  Learning Resources
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Curated materials to accelerate your Web3 development journey
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Documentation",
                  description: "Official guides and API references",
                  icon: <FileText className="h-10 w-10 text-[#3B82F6]" />,
                  link: "#",
                },
                {
                  title: "Video Tutorials",
                  description: "Step-by-step visual learning",
                  icon: <Video className="h-10 w-10 text-[#3B82F6]" />,
                  link: "#",
                },
                {
                  title: "Code Examples",
                  description: "Real-world implementation samples",
                  icon: <Code className="h-10 w-10 text-[#3B82F6]" />,
                  link: "#",
                },
                {
                  title: "Community Forums",
                  description: "Ask questions and share knowledge",
                  icon: <BookOpen className="h-10 w-10 text-[#3B82F6]" />,
                  link: "#",
                },
              ].map((resource, i) => (
                <Card key={i} className="border-[#BFDBFE] hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="p-2 rounded-full bg-[#EFF6FF] mb-4">{resource.icon}</div>
                    <CardTitle className="text-xl text-[#1E3A8A]">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{resource.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Link href={resource.link}>
                      <Button variant="ghost" className="text-[#3B82F6] hover:bg-[#EFF6FF]">
                        Browse Resources <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1E3A8A]">
                  Success Stories
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Meet the builders who found success through Astrodome
                </p>
              </div>
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
