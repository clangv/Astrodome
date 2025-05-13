import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Trophy, ArrowRight } from "lucide-react"

export default function EventsPage() {
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
            <Link href="/events" className="font-medium transition-colors text-[#3B82F6]">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1E3A8A]">Events & Hackathons</h1>
                <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
                  Connect with the community, showcase your skills, and win prizes at our events
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#hackathons">
                  <Button className="bg-[#3B82F6] hover:bg-[#2563EB]">Browse Hackathons</Button>
                </Link>
                <Link href="#meetups">
                  <Button variant="outline">Find Local Meetups</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="featured" className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1E3A8A]">Featured Event</h2>
              </div>
            </div>

            <Card className="border-[#BFDBFE] overflow-hidden shadow-lg max-w-4xl mx-auto">
              <div className="relative">
                <div className="h-60 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] flex items-center justify-center">
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-[#3B82F6] px-3 py-1 text-sm font-medium">FEATURED</Badge>
                  </div>
                  <div className="text-white text-center p-6 z-10">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-3xl font-bold">Astrodome Hackathon 2025</h3>
                    <p className="text-lg mt-2 text-white/90">Build the Future of Web3</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-[#1E3A8A]">Event Details</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Calendar className="h-5 w-5 text-[#3B82F6] mt-0.5" />
                        <div>
                          <p className="font-medium">June 15-30, 2025</p>
                          <p className="text-sm text-gray-500">Two-week hackathon</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-5 w-5 text-[#3B82F6] mt-0.5" />
                        <div>
                          <p className="font-medium">Virtual & In-person</p>
                          <p className="text-sm text-gray-500">San Francisco, New York, London, Singapore</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Users className="h-5 w-5 text-[#3B82F6] mt-0.5" />
                        <div>
                          <p className="font-medium">5,000+ Participants</p>
                          <p className="text-sm text-gray-500">Teams of 1-5 people</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-[#1E3A8A]">Tracks</h4>
                    <div className="flex flex-wrap gap-2">
                      {["DeFi", "NFTs", "Gaming", "Social", "Infrastructure", "AI + Web3", "Public Goods"].map(
                        (track) => (
                          <Badge key={track} variant="secondary" className="bg-[#EFF6FF] text-[#3B82F6]">
                            {track}
                          </Badge>
                        ),
                      )}
                    </div>

                    <h4 className="font-medium text-[#1E3A8A] mt-4">Sponsors</h4>
                    <div className="flex flex-wrap gap-4">
                      {["Solana", "Ethereum Foundation", "Polygon", "Chainlink", "Uniswap"].map((sponsor) => (
                        <div key={sponsor} className="text-sm font-medium text-gray-600">
                          {sponsor}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-[#1E3A8A]">Prizes</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-5 w-5 text-[#3B82F6]" />
                        <div className="flex justify-between w-full">
                          <span>Grand Prize</span>
                          <span className="font-bold">$50,000</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-5 w-5 flex items-center justify-center text-[#3B82F6]">2</div>
                        <div className="flex justify-between w-full">
                          <span>Track Winners (7)</span>
                          <span className="font-bold">$10,000 each</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-5 w-5 flex items-center justify-center text-[#3B82F6]">3</div>
                        <div className="flex justify-between w-full">
                          <span>Community Choice</span>
                          <span className="font-bold">$15,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-[#F8FAFC] border-t border-[#BFDBFE] p-6">
                <div className="w-full flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-[#3B82F6]">1,245 teams</span> already registered
                  </div>
                  <Button className="sm:w-auto w-full bg-[#3B82F6] hover:bg-[#2563EB]">Register Now</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="hackathons" className="w-full py-12 md:py-24 bg-[#EFF6FF]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1E3A8A]">
                  Upcoming Hackathons
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Showcase your skills and win prizes at these upcoming events
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-[#DBEAFE]">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white">
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="virtual"
                  className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white"
                >
                  Virtual
                </TabsTrigger>
                <TabsTrigger
                  value="in-person"
                  className="data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white"
                >
                  In-Person
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "DeFi Innovation Challenge",
                      description: "Build the next generation of decentralized finance applications",
                      date: "July 10-24, 2025",
                      location: "Virtual",
                      prize: "$75,000",
                      participants: "1,000+",
                      image: "/placeholder.svg?height=200&width=400",
                    },
                    {
                      title: "NFT Creator Hackathon",
                      description: "Create innovative NFT projects and marketplaces",
                      date: "August 5-15, 2025",
                      location: "New York, NY",
                      prize: "$50,000",
                      participants: "500+",
                      image: "/placeholder.svg?height=200&width=400",
                    },
                    {
                      title: "Web3 Gaming Summit",
                      description: "Develop blockchain games and gaming infrastructure",
                      date: "September 1-14, 2025",
                      location: "Virtual",
                      prize: "$100,000",
                      participants: "1,500+",
                      image: "/placeholder.svg?height=200&width=400",
                    },
                    {
                      title: "Solana Summer Hackathon",
                      description: "Build high-performance applications on Solana",
                      date: "July 1-31, 2025",
                      location: "San Francisco, CA",
                      prize: "$250,000",
                      participants: "3,000+",
                      image: "/placeholder.svg?height=200&width=400",
                    },
                    {
                      title: "DAO Governance Challenge",
                      description: "Create tools for decentralized governance and coordination",
                      date: "August 20-30, 2025",
                      location: "Virtual",
                      prize: "$60,000",
                      participants: "800+",
                      image: "/placeholder.svg?height=200&width=400",
                    },
                    {
                      title: "Zero Knowledge Hackathon",
                      description: "Build privacy-preserving applications using ZK proofs",
                      date: "October 5-20, 2025",
                      location: "London, UK",
                      prize: "$120,000",
                      participants: "600+",
                      image: "/placeholder.svg?height=200&width=400",
                    },
                  ].map((event, i) => (
                    <Card key={i} className="border-[#BFDBFE] overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video w-full bg-[#BFDBFE]">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl text-[#1E3A8A]">{event.title}</CardTitle>
                          <Badge className="bg-[#3B82F6]">{event.prize}</Badge>
                        </div>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span>{event.participants} participants expected</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB]">Register</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="virtual" className="mt-6">
                {/* Virtual hackathons would go here */}
              </TabsContent>

              <TabsContent value="in-person" className="mt-6">
                {/* In-person hackathons would go here */}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="meetups" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1E3A8A]">
                  Local Meetups
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Connect with the community in your area
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "San Francisco Web3 Meetup",
                  date: "June 5, 2025",
                  time: "6:00 PM - 9:00 PM",
                  location: "San Francisco, CA",
                  attendees: 120,
                  description: "Monthly meetup for Web3 developers and enthusiasts in the Bay Area",
                },
                {
                  title: "New York Blockchain Developers",
                  date: "June 12, 2025",
                  time: "7:00 PM - 10:00 PM",
                  location: "New York, NY",
                  attendees: 85,
                  description: "Technical discussions and networking for blockchain developers",
                },
                {
                  title: "London DeFi Meetup",
                  date: "June 18, 2025",
                  time: "6:30 PM - 9:30 PM",
                  location: "London, UK",
                  attendees: 95,
                  description: "Focus on decentralized finance innovations and use cases",
                },
                {
                  title: "Singapore Web3 Community",
                  date: "June 20, 2025",
                  time: "7:00 PM - 10:00 PM",
                  location: "Singapore",
                  attendees: 110,
                  description: "Connecting Web3 builders across Southeast Asia",
                },
                {
                  title: "Berlin Ethereum Developers",
                  date: "June 25, 2025",
                  time: "6:00 PM - 9:00 PM",
                  location: "Berlin, Germany",
                  attendees: 75,
                  description: "Technical deep dives into Ethereum development",
                },
                {
                  title: "Tokyo Crypto Meetup",
                  date: "June 28, 2025",
                  time: "7:00 PM - 10:00 PM",
                  location: "Tokyo, Japan",
                  attendees: 65,
                  description: "Discussions on cryptocurrency and blockchain technology in Japan",
                },
              ].map((meetup, i) => (
                <Card key={i} className="border-[#BFDBFE] hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#1E3A8A]">{meetup.title}</CardTitle>
                    <CardDescription>{meetup.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{meetup.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{meetup.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{meetup.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{meetup.attendees} attending</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB]">RSVP</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button variant="outline" className="border-[#3B82F6] text-[#3B82F6]">
                View All Meetups <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
