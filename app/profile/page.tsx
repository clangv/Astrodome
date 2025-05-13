import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, ExternalLink, Github, Linkedin, Twitter, Award, Star } from "lucide-react"

export default function ProfilePage() {
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
        <div className="container px-4 py-6 md:py-10">
          <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden bg-gradient-to-r from-[#93C5FD] to-[#3B82F6] mb-16">
            <div className="absolute bottom-0 left-6 transform translate-y-1/2">
              <div className="relative">
                <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                  <AvatarFallback className="bg-[#BFDBFE] text-[#1E3A8A] text-2xl">JD</AvatarFallback>
                </Avatar>
                <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full bg-white">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button size="icon" variant="outline" className="absolute top-4 right-4 rounded-full bg-white">
              <Edit className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 md:mt-0 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1E3A8A]">Jane Developer</h1>
              <p className="text-gray-600">Full-Stack Developer | Web3 Enthusiast</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-[#3B82F6]">Verified Builder</Badge>
                <Badge variant="outline" className="text-[#3B82F6] border-[#BFDBFE]">
                  Top 10% Contributor
                </Badge>
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" /> Edit Profile
              </Button>
              <Button className="bg-[#3B82F6] hover:bg-[#2563EB]">Share Profile</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-[#BFDBFE]">
                <CardHeader>
                  <CardTitle className="text-[#1E3A8A]">About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Astrodome helped me transition from Web2 to Web3 design. The mentorship was invaluable, and I've now
                    designed interfaces used by thousands of crypto users daily.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4 text-gray-500" />
                      <a href="#" className="text-[#3B82F6] hover:underline">
                        github.com/janedeveloper
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Twitter className="h-4 w-4 text-gray-500" />
                      <a href="#" className="text-[#3B82F6] hover:underline">
                        @janedeveloper
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-gray-500" />
                      <a href="#" className="text-[#3B82F6] hover:underline">
                        linkedin.com/in/janedeveloper
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#BFDBFE]">
                <CardHeader>
                  <CardTitle className="text-[#1E3A8A]">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Solana",
                      "Rust",
                      "Web3.js",
                      "Node.js",
                      "Tailwind CSS",
                      "GraphQL",
                    ].map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-[#3B82F6] border-[#BFDBFE]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#BFDBFE]">
                <CardHeader>
                  <CardTitle className="text-[#1E3A8A]">Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Hackathon Winner",
                      description: "1st place in Solana Summer Hackathon 2024",
                      icon: <Award className="h-5 w-5 text-[#3B82F6]" />,
                    },
                    {
                      title: "Top Contributor",
                      description: "Completed 20+ bounties with 4.9/5 rating",
                      icon: <Star className="h-5 w-5 text-[#3B82F6]" />,
                    },
                    {
                      title: "Mentor Badge",
                      description: "Helped 15+ new developers in the ecosystem",
                      icon: <Award className="h-5 w-5 text-[#3B82F6]" />,
                    },
                  ].map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5">{achievement.icon}</div>
                      <div>
                        <h4 className="font-medium text-[#1E3A8A]">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="portfolio" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[#EFF6FF]">
                  <TabsTrigger
                    value="portfolio"
                    className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white"
                  >
                    Portfolio
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white"
                  >
                    Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white"
                  >
                    Reviews
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="portfolio" className="mt-6 space-y-6">
                  {[
                    {
                      title: "DeFi Dashboard",
                      description:
                        "A comprehensive dashboard for tracking DeFi investments across multiple chains with a focus on Solana.",
                      image: "/placeholder.svg?height=200&width=400",
                      tags: ["React", "TypeScript", "Solana"],
                    },
                    {
                      title: "NFT Marketplace",
                      description:
                        "A marketplace for trading NFTs with support for multiple collections and royalty payments.",
                      image: "/placeholder.svg?height=200&width=400",
                      tags: ["Next.js", "Solana", "Web3.js"],
                    },
                    {
                      title: "DAO Governance Tool",
                      description:
                        "A tool for creating and managing DAOs with voting mechanisms and treasury management.",
                      image: "/placeholder.svg?height=200&width=400",
                      tags: ["React", "Rust", "Solana"],
                    },
                  ].map((project, i) => (
                    <Card key={i} className="border-[#BFDBFE] overflow-hidden">
                      <div className="aspect-video w-full bg-[#BFDBFE]">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-[#1E3A8A]">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, j) => (
                            <Badge key={j} variant="outline" className="text-[#3B82F6] border-[#BFDBFE]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="gap-2">
                          <ExternalLink className="h-4 w-4" /> View Project
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="experience" className="mt-6 space-y-6">
                  {[
                    {
                      role: "Smart Contract Developer",
                      company: "DeFi Protocol",
                      period: "Jan 2023 - Present",
                      description:
                        "Developing and auditing smart contracts for a DeFi protocol with over $50M TVL. Implementing new features and optimizing gas usage.",
                    },
                    {
                      role: "Frontend Developer",
                      company: "NFT Marketplace",
                      period: "Jun 2022 - Dec 2022",
                      description:
                        "Built the frontend for an NFT marketplace using React and Web3.js. Implemented wallet connections, NFT displays, and trading functionality.",
                    },
                    {
                      role: "Freelance Developer",
                      company: "Various Projects",
                      period: "Jan 2021 - May 2022",
                      description:
                        "Worked on various Web3 projects including wallets, DApps, and educational content. Completed over 30 bounties on Superteam.",
                    },
                  ].map((exp, i) => (
                    <Card key={i} className="border-[#BFDBFE]">
                      <CardHeader>
                        <div className="flex justify-between">
                          <div>
                            <CardTitle className="text-[#1E3A8A]">{exp.role}</CardTitle>
                            <CardDescription>{exp.company}</CardDescription>
                          </div>
                          <span className="text-sm text-gray-500">{exp.period}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="reviews" className="mt-6 space-y-6">
                  {[
                    {
                      name: "Alex Chen",
                      role: "Project Lead at Solana Labs",
                      rating: 5,
                      comment:
                        "Jane is an exceptional developer who delivered high-quality code ahead of schedule. Her understanding of Solana's architecture made her contributions invaluable.",
                    },
                    {
                      name: "Maria Rodriguez",
                      role: "CTO at DeFi Protocol",
                      rating: 5,
                      comment:
                        "Working with Jane was a pleasure. She quickly understood our requirements and implemented complex features with minimal guidance. Would definitely work with her again.",
                    },
                    {
                      name: "David Kim",
                      role: "Founder at NFT Marketplace",
                      rating: 4,
                      comment:
                        "Jane helped us build our frontend from scratch. Her attention to detail and knowledge of Web3 UX patterns was impressive. Highly recommended for any Solana project.",
                    },
                  ].map((review, i) => (
                    <Card key={i} className="border-[#BFDBFE]">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarFallback className="bg-[#BFDBFE] text-[#1E3A8A]">
                                {review.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-[#1E3A8A]">{review.name}</CardTitle>
                              <CardDescription>{review.role}</CardDescription>
                            </div>
                          </div>
                          <div className="flex">
                            {Array(review.rating)
                              .fill(0)
                              .map((_, j) => (
                                <Star key={j} className="h-5 w-5 text-[#3B82F6] fill-[#3B82F6]" />
                              ))}
                            {Array(5 - review.rating)
                              .fill(0)
                              .map((_, j) => (
                                <Star key={j} className="h-5 w-5 text-gray-300" />
                              ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
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
