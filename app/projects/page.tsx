import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Projects - BuilderCo",
  description: "Explore BuilderCo's portfolio of completed construction projects across various sectors.",
}

const projects = [
  {
    id: "downtown-business-center",
    title: "Downtown Business Center",
    category: "Commercial",
    location: "New York, USA",
    image: "modern+skyscraper+business+building",
    description: "A 45-story mixed-use development featuring office spaces, retail, and luxury residences.",
  },
  {
    id: "metropolitan-highway",
    title: "Metropolitan Highway Extension",
    category: "Infrastructure",
    location: "Los Angeles, USA",
    image: "highway+bridge+infrastructure+construction",
    description: "22-mile highway expansion project including bridges, overpasses, and smart traffic systems.",
  },
  {
    id: "advanced-manufacturing",
    title: "Advanced Manufacturing Facility",
    category: "Industrial",
    location: "Chicago, USA",
    image: "industrial+factory+modern+facility",
    description: "State-of-the-art 500,000 sq ft facility with automated systems and sustainable design.",
  },
  {
    id: "riverside-residences",
    title: "Riverside Luxury Residences",
    category: "Residential",
    location: "Miami, USA",
    image: "luxury+apartment+residential+building",
    description: "35-story luxury residential tower with 200 units and premium amenities.",
  },
  {
    id: "tech-park-campus",
    title: "Tech Park Campus",
    category: "Commercial",
    location: "San Francisco, USA",
    image: "modern+office+campus+technology",
    description: "1.2 million sq ft technology campus with collaborative workspaces and green areas.",
  },
  {
    id: "regional-airport",
    title: "Regional Airport Expansion",
    category: "Infrastructure",
    location: "Dallas, USA",
    image: "airport+terminal+modern+architecture",
    description: "New terminal building with 30 gates and advanced passenger processing systems.",
  },
  {
    id: "waterfront-mall",
    title: "Waterfront Shopping Mall",
    category: "Commercial",
    location: "Seattle, USA",
    image: "shopping+mall+retail+center",
    description: "350,000 sq ft retail complex with entertainment facilities and waterfront views.",
  },
  {
    id: "solar-power-plant",
    title: "Solar Power Plant",
    category: "Industrial",
    location: "Phoenix, USA",
    image: "solar+power+plant+renewable+energy",
    description: "100 MW solar farm providing clean energy to 30,000 homes.",
  },
  {
    id: "urban-transit-hub",
    title: "Urban Transit Hub",
    category: "Infrastructure",
    location: "Boston, USA",
    image: "transit+station+modern+urban",
    description: "Multi-modal transportation center connecting subway, bus, and commuter rail services.",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/placeholder.svg?height=500&width=1920&query=construction+projects+portfolio)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through landmark projects across multiple sectors
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="group overflow-hidden border-border hover:border-accent transition-all h-full">
                  <div
                    className="h-64 bg-cover bg-center transition-transform group-hover:scale-105"
                    style={{
                      backgroundImage: `url(/placeholder.svg?height=300&width=400&query=${project.image})`,
                    }}
                  />
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent hover:bg-accent/20">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{project.location}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
