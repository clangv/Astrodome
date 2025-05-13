import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, Briefcase, Code, Pencil, Zap } from "lucide-react"

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-bold text-2xl text-[#3B82F6]">Astrodome</div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/marketplace" className="font-medium transition-colors text-[#3B82F6]">
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1E3A8A]">Opportunity Marketplace</h1>
              <p className="text-gray-600">Find bounties, gigs, and full-time roles in the Web3 ecosystem</p>
            </div>
            <Button className="bg-[#3B82F6] hover:bg-[#2563EB]">Post a Gig</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-[#BFDBFE]">
                <CardHeader>
                  <CardTitle className="text-[#1E3A8A]">Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Search</label>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input type="search" placeholder="Keywords..." className="pl-8 bg-white border-[#BFDBFE]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <Select defaultValue="all">
                      <SelectTrigger className="bg-white border-[#BFDBFE]">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="content">Content</SelectItem>
                        <SelectItem value="community">Community</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Experience Level</label>
                    <div className="space-y-2">
                      {["Beginner", "Intermediate", "Advanced"].map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox id={`level-${level.toLowerCase()}`} />
                          <label
                            htmlFor={`level-${level.toLowerCase()}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Skills</label>
                    <div className="space-y-2">
                      {["Solana", "Rust", "JavaScript", "React", "UI/UX", "Smart Contracts", "NFTs", "DeFi"].map(
                        (skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox id={`skill-${skill.toLowerCase().replace(/\//g, "-")}`} />
                            <label
                              htmlFor={`skill-${skill.toLowerCase().replace(/\//g, "-")}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {skill}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Payment Range</label>
                    <Select defaultValue="all">
                      <SelectTrigger className="bg-white border-[#BFDBFE]">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Amount</SelectItem>
                        <SelectItem value="0-500">$0 - $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5000+">$5,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" className="w-full border-[#3B82F6] text-[#3B82F6]">
                      <Filter className="mr-2 h-4 w-4" /> Apply Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-[#EFF6FF]">
                  <TabsTrigger value="all" className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white">
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="bounties"
                    className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white"
                  >
                    Bounties
                  </TabsTrigger>
                  <TabsTrigger value="gigs" className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white">
                    Gigs
                  </TabsTrigger>
                  <TabsTrigger value="jobs" className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white">
                    Jobs
                  </TabsTrigger>
                </TabsList>

                <div className="flex justify-between items-center mt-6 mb-4">
                  <div className="text-sm text-gray-500">Showing 24 opportunities</div>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px] bg-white border-[#BFDBFE]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="highest">Highest Paid</SelectItem>
                      <SelectItem value="lowest">Lowest Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <TabsContent value="all" className="space-y-6 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Solana DeFi Dashboard UI",
                        type: "Bounty",
                        icon: <Code className="h-5 w-5 text-[#3B82F6]" />,
                        description: "Design and implement a user-friendly dashboard for a DeFi protocol",
                        reward: "2,500 USDC",
                        difficulty: "Intermediate",
                        skills: ["UI/UX", "React", "Web3"],
                        deadline: "7 days",
                        sponsor: "DeFi Protocol",
                      },
                      {
                        title: "NFT Marketplace Integration",
                        type: "Gig",
                        icon: <Briefcase className="h-5 w-5 text-[#3B82F6]" />,
                        description: "Build an integration with our NFT marketplace API",
                        reward: "3,000 USDC",
                        difficulty: "Advanced",
                        skills: ["Rust", "TypeScript", "Solana"],
                        deadline: "14 days",
                        sponsor: "NFT Project",
                      },
                      {
                        title: "Web3 Tutorial Writer",
                        type: "Bounty",
                        icon: <Pencil className="h-5 w-5 text-[#3B82F6]" />,
                        description: "Create beginner-friendly tutorials for Solana development",
                        reward: "800 USDC",
                        difficulty: "Beginner",
                        skills: ["Technical Writing", "Solana"],
                        deadline: "5 days",
                        sponsor: "Solana Foundation",
                      },
                      {
                        title: "Smart Contract Developer",
                        type: "Job",
                        icon: <Zap className="h-5 w-5 text-[#3B82F6]" />,
                        description: "Full-time role developing and auditing smart contracts for our DeFi protocol",
                        reward: "Competitive",
                        difficulty: "Advanced",
                        skills: ["Rust", "Solana", "Security"],
                        deadline: "Open until filled",
                        sponsor: "DeFi Protocol",
                      },
                      {
                        title: "Community Manager",
                        type: "Job",
                        icon: <Zap className="h-5 w-5 text-[#3B82F6]" />,
                        description:
                          "Manage our Discord and Twitter communities, organize events, and grow our user base",
                        reward: "Competitive",
                        difficulty: "Intermediate",
                        skills: ["Community", "Social Media", "Events"],
                        deadline: "Open until filled",
                        sponsor: "GameFi Project",
                      },
                      {
                        title: "Mobile App UI Design",
                        type: "Gig",
                        icon: <Briefcase className="h-5 w-5 text-[#3B82F6]" />,
                        description: "Design a mobile app UI for our crypto wallet with a focus on usability",
                        reward: "1,500 USDC",
                        difficulty: "Intermediate",
                        skills: ["UI/UX", "Mobile", "Figma"],
                        deadline: "10 days",
                        sponsor: "Wallet Project",
                      },
                    ].map((gig, index) => (
                      <Card key={index} className="border-[#BFDBFE] hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-start gap-2">
                              <div className="mt-0.5">{gig.icon}</div>
                              <div>
                                <CardTitle className="text-xl text-[#1E3A8A]">{gig.title}</CardTitle>
                                <CardDescription className="flex items-center gap-1">
                                  <span>{gig.sponsor}</span>
                                  <span>•</span>
                                  <Badge variant="secondary" className="bg-[#EFF6FF] text-[#3B82F6]">
                                    {gig.type}
                                  </Badge>
                                </CardDescription>
                              </div>
                            </div>
                            <Badge className="bg-[#3B82F6]">{gig.reward}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-gray-600 mb-4">{gig.description}</p>
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
                  <div className="flex justify-center mt-8">
                    <Button variant="outline" className="border-[#3B82F6] text-[#3B82F6]">
                      Load More
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="bounties" className="space-y-6 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Bounties content would go here - similar structure to "all" tab */}
                    <Card className="border-[#BFDBFE] hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-2">
                            <div className="mt-0.5">
                              <Code className="h-5 w-5 text-[#3B82F6]" />
                            </div>
                            <div>
                              <CardTitle className="text-xl text-[#1E3A8A]">Solana DeFi Dashboard UI</CardTitle>
                              <CardDescription className="flex items-center gap-1">
                                <span>DeFi Protocol</span>
                                <span>•</span>
                                <Badge variant="secondary" className="bg-[#EFF6FF] text-[#3B82F6]">
                                  Bounty
                                </Badge>
                              </CardDescription>
                            </div>
                          </div>
                          <Badge className="bg-[#3B82F6]">2,500 USDC</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-gray-600 mb-4">
                          Design and implement a user-friendly dashboard for a DeFi protocol
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {["UI/UX", "React", "Web3"].map((skill, i) => (
                            <Badge key={i} variant="outline" className="text-[#3B82F6] border-[#BFDBFE]">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Difficulty: Intermediate</span>
                          <span>Deadline: 7 days</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB]">Apply Now</Button>
                      </CardFooter>
                    </Card>
                    {/* More bounty cards would go here */}
                  </div>
                </TabsContent>

                <TabsContent value="gigs" className="mt-2">
                  {/* Gigs content would go here */}
                </TabsContent>

                <TabsContent value="jobs" className="mt-2">
                  {/* Jobs content would go here */}
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
