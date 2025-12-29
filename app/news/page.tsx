import type { Metadata } from "next"
import { Calendar, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "News & Media - BuilderCo",
  description: "Latest news, press releases, and company updates from BuilderCo.",
}

const newsItems = [
  {
    id: 1,
    title: "BuilderCo Wins Major Infrastructure Contract Worth $500M",
    category: "Press Release",
    date: "December 15, 2024",
    image: "infrastructure+highway+construction+announcement",
    excerpt:
      "We are proud to announce that BuilderCo has been awarded a major contract to develop a 30-mile highway extension project in the metropolitan area.",
  },
  {
    id: 2,
    title: "Sustainability Initiative Reduces Carbon Footprint by 40%",
    category: "Company Update",
    date: "December 10, 2024",
    image: "sustainable+green+construction+environment",
    excerpt:
      "Our commitment to sustainable construction practices has resulted in a 40% reduction in carbon emissions across all active projects this year.",
  },
  {
    id: 3,
    title: "New Regional Office Opens in Seattle",
    category: "Company Update",
    date: "December 5, 2024",
    image: "modern+office+building+opening",
    excerpt:
      "BuilderCo expands operations with the opening of a new regional headquarters in Seattle, Washington, creating 150 new jobs.",
  },
  {
    id: 4,
    title: "BuilderCo Named Industry Leader in Safety Excellence",
    category: "Press Release",
    date: "November 28, 2024",
    image: "construction+safety+award+excellence",
    excerpt:
      "The National Construction Safety Council has recognized BuilderCo with the Gold Medal for Safety Excellence for the fifth consecutive year.",
  },
  {
    id: 5,
    title: "Landmark Residential Tower Completed Ahead of Schedule",
    category: "Latest News",
    date: "November 20, 2024",
    image: "residential+tower+completed+modern",
    excerpt:
      "The 50-story Riverside Towers project has been completed three months ahead of schedule, setting a new benchmark for efficiency.",
  },
  {
    id: 6,
    title: "Partnership Announced with Leading Tech Company",
    category: "Press Release",
    date: "November 15, 2024",
    image: "business+partnership+handshake+corporate",
    excerpt:
      "BuilderCo and TechInnovate have formed a strategic partnership to integrate cutting-edge construction technology across all projects.",
  },
  {
    id: 7,
    title: "Q3 Revenue Exceeds Projections by 25%",
    category: "Company Update",
    date: "November 8, 2024",
    image: "business+growth+financial+success",
    excerpt:
      "BuilderCo reports strong financial performance in Q3 2024, with revenue exceeding projections by 25% and securing 15 new contracts.",
  },
  {
    id: 8,
    title: "Community Investment Program Reaches $10M Milestone",
    category: "Latest News",
    date: "October 30, 2024",
    image: "community+development+charity+giving",
    excerpt:
      "Our Community Investment Program has reached a milestone of $10 million in contributions to local education and infrastructure projects.",
  },
  {
    id: 9,
    title: "Innovation Lab Launches Advanced Construction Technologies",
    category: "Company Update",
    date: "October 22, 2024",
    image: "technology+innovation+laboratory+research",
    excerpt:
      "The new BuilderCo Innovation Lab introduces revolutionary construction technologies including AI-powered project management systems.",
  },
]

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/placeholder.svg?height=500&width=1920&query=news+media+press+conference)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">News & Media</h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Stay updated with the latest news, press releases, and company announcements
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-foreground">Latest News</h2>
            <p className="text-muted-foreground">Recent updates from BuilderCo</p>
          </div>

          {/* Featured Article */}
          <Card className="border-border overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="h-[300px] lg:h-auto bg-cover bg-center"
                style={{
                  backgroundImage: `url(/placeholder.svg?height=400&width=600&query=${newsItems[0].image})`,
                }}
              />
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {newsItems[0].category}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    {newsItems[0].date}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-card-foreground">{newsItems[0].title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{newsItems[0].excerpt}</p>
                <div className="text-accent font-medium hover:underline cursor-pointer">Read full article →</div>
              </CardContent>
            </div>
          </Card>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {newsItems.slice(1).map((item) => (
              <Card key={item.id} className="group border-border hover:border-accent transition-all overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{
                    backgroundImage: `url(/placeholder.svg?height=200&width=400&query=${item.image})`,
                  }}
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="text-xs bg-accent/10 text-accent">
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-3">{item.excerpt}</p>
                  <div className="text-accent text-sm font-medium hover:underline cursor-pointer">Read more →</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Browse by Category</h2>
              <p className="text-muted-foreground">Find the content that matters most to you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border hover:border-accent transition-colors cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Tag className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Press Releases</h3>
                  <p className="text-sm text-muted-foreground mb-4">Official company announcements and news</p>
                  <div className="text-accent text-sm font-medium">View all →</div>
                </CardContent>
              </Card>
              <Card className="border-border hover:border-accent transition-colors cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Tag className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Company Updates</h3>
                  <p className="text-sm text-muted-foreground mb-4">Internal news and organizational changes</p>
                  <div className="text-accent text-sm font-medium">View all →</div>
                </CardContent>
              </Card>
              <Card className="border-border hover:border-accent transition-colors cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Tag className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Latest News</h3>
                  <p className="text-sm text-muted-foreground mb-4">Recent updates and industry insights</p>
                  <div className="text-accent text-sm font-medium">View all →</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            For press inquiries, interviews, or media requests, please contact our communications team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-primary-foreground/90">
              <span className="font-medium">Email:</span> press@builderco.com
            </div>
            <div className="hidden sm:block text-primary-foreground/40">|</div>
            <div className="text-primary-foreground/90">
              <span className="font-medium">Phone:</span> +1 (555) 123-4567
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
