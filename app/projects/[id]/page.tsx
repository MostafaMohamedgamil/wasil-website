import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ProjectDetails = {
  id: string
  title: string
  category: string
  location: string
  image: string
  description: string
  client: string
  duration: string
  size: string
  completed: string
  details: string[]
}

const projectsData: Record<string, ProjectDetails> = {
  "downtown-business-center": {
    id: "downtown-business-center",
    title: "Downtown Business Center",
    category: "Commercial",
    location: "New York, USA",
    image: "modern+skyscraper+business+building",
    description: "A 45-story mixed-use development featuring office spaces, retail, and luxury residences.",
    client: "Metro Development Corp",
    duration: "36 months",
    size: "2.5 million sq ft",
    completed: "December 2023",
    details: [
      "45 floors of premium office and residential space",
      "Ground floor retail and dining establishments",
      "State-of-the-art building management systems",
      "LEED Gold certified for sustainability",
      "Underground parking for 800 vehicles",
    ],
  },
  "metropolitan-highway": {
    id: "metropolitan-highway",
    title: "Metropolitan Highway Extension",
    category: "Infrastructure",
    location: "Los Angeles, USA",
    image: "highway+bridge+infrastructure+construction",
    description: "22-mile highway expansion project including bridges, overpasses, and smart traffic systems.",
    client: "Department of Transportation",
    duration: "48 months",
    size: "22 miles",
    completed: "August 2023",
    details: [
      "22 miles of new highway construction",
      "15 bridges and overpasses",
      "Smart traffic management systems",
      "Improved drainage and flood control",
      "Enhanced safety features and lighting",
    ],
  },
  "advanced-manufacturing": {
    id: "advanced-manufacturing",
    title: "Advanced Manufacturing Facility",
    category: "Industrial",
    location: "Chicago, USA",
    image: "industrial+factory+modern+facility",
    description: "State-of-the-art 500,000 sq ft facility with automated systems and sustainable design.",
    client: "TechManufacture Inc",
    duration: "24 months",
    size: "500,000 sq ft",
    completed: "March 2024",
    details: [
      "500,000 sq ft of manufacturing space",
      "Automated production line integration",
      "Clean room facilities for precision work",
      "Solar panels providing 40% of energy needs",
      "Advanced HVAC and climate control systems",
    ],
  },
  "riverside-residences": {
    id: "riverside-residences",
    title: "Riverside Luxury Residences",
    category: "Residential",
    location: "Miami, USA",
    image: "luxury+apartment+residential+building",
    description: "35-story luxury residential tower with 200 units and premium amenities.",
    client: "Riverside Properties LLC",
    duration: "30 months",
    size: "450,000 sq ft",
    completed: "June 2023",
    details: [
      "200 luxury residential units across 35 floors",
      "Rooftop infinity pool and sky lounge",
      "Fitness center and spa facilities",
      "Concierge services and valet parking",
      "Private marina access for residents",
    ],
  },
  "tech-park-campus": {
    id: "tech-park-campus",
    title: "Tech Park Campus",
    category: "Commercial",
    location: "San Francisco, USA",
    image: "modern+office+campus+technology",
    description: "1.2 million sq ft technology campus with collaborative workspaces and green areas.",
    client: "Silicon Valley Tech Corp",
    duration: "42 months",
    size: "1.2 million sq ft",
    completed: "October 2023",
    details: [
      "Multiple buildings totaling 1.2 million sq ft",
      "Open-concept collaborative workspaces",
      "10 acres of landscaped outdoor areas",
      "On-site cafeterias and amenities",
      "Electric vehicle charging infrastructure",
    ],
  },
  "regional-airport": {
    id: "regional-airport",
    title: "Regional Airport Expansion",
    category: "Infrastructure",
    location: "Dallas, USA",
    image: "airport+terminal+modern+architecture",
    description: "New terminal building with 30 gates and advanced passenger processing systems.",
    client: "Dallas Airport Authority",
    duration: "54 months",
    size: "800,000 sq ft",
    completed: "January 2024",
    details: [
      "New terminal with 30 departure gates",
      "Advanced baggage handling systems",
      "Biometric passenger screening",
      "Premium lounges and retail spaces",
      "Capacity for 15 million passengers annually",
    ],
  },
  "waterfront-mall": {
    id: "waterfront-mall",
    title: "Waterfront Shopping Mall",
    category: "Commercial",
    location: "Seattle, USA",
    image: "shopping+mall+retail+center",
    description: "350,000 sq ft retail complex with entertainment facilities and waterfront views.",
    client: "Pacific Retail Group",
    duration: "28 months",
    size: "350,000 sq ft",
    completed: "September 2023",
    details: [
      "150+ retail stores and restaurants",
      "Multi-screen cinema complex",
      "Waterfront promenade and viewing areas",
      "Underground parking for 1,200 vehicles",
      "Year-round climate-controlled environment",
    ],
  },
  "solar-power-plant": {
    id: "solar-power-plant",
    title: "Solar Power Plant",
    category: "Industrial",
    location: "Phoenix, USA",
    image: "solar+power+plant+renewable+energy",
    description: "100 MW solar farm providing clean energy to 30,000 homes.",
    client: "Arizona Green Energy",
    duration: "18 months",
    size: "500 acres",
    completed: "May 2023",
    details: [
      "100 MW solar generation capacity",
      "300,000+ solar panels installed",
      "Battery storage system for peak demand",
      "Powers 30,000 homes annually",
      "Reduces CO2 emissions by 75,000 tons per year",
    ],
  },
  "urban-transit-hub": {
    id: "urban-transit-hub",
    title: "Urban Transit Hub",
    category: "Infrastructure",
    location: "Boston, USA",
    image: "transit+station+modern+urban",
    description: "Multi-modal transportation center connecting subway, bus, and commuter rail services.",
    client: "Boston Transit Authority",
    duration: "36 months",
    size: "250,000 sq ft",
    completed: "November 2023",
    details: [
      "Integration of 3 transit modes",
      "Daily capacity of 100,000 passengers",
      "Retail and service concourse",
      "Accessible design throughout",
      "Real-time digital passenger information",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const project = projectsData[resolvedParams.id]
  return {
    title: `${project?.title || "Project"} - 7Solutions`,
    description: project?.description || "7Solutions construction project",
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const project = projectsData[resolvedParams.id]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section
        className="relative h-[400px] lg:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(/placeholder.svg?height=600&width=1920&query=${project.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/30" />
        <div className="relative h-full container mx-auto px-4 lg:px-8 flex flex-col justify-end pb-12">
          <Button
            asChild
            variant="ghost"
            className="self-start mb-4 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/projects">
              <ArrowLeft className="mr-2" size={18} />
              Back to Projects
            </Link>
          </Button>
          <Badge variant="secondary" className="self-start mb-3 bg-accent text-accent-foreground">
            {project.category}
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl">{project.description}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.description} This landmark project showcases our commitment to excellence in{" "}
                {project.category.toLowerCase()} construction, delivering exceptional quality and value to our clients.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted rounded-lg p-6 lg:p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Project Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This project has made a significant impact on the community, providing essential infrastructure and
                  facilities that improve quality of life. Our team worked closely with stakeholders to ensure the
                  project met all requirements while exceeding expectations for quality and sustainability.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Project Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-medium text-card-foreground">{project.location}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="text-accent shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="text-sm text-muted-foreground">Client</div>
                      <div className="font-medium text-card-foreground">{project.client}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="text-accent shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                      <div className="font-medium text-card-foreground">{project.completed}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="text-accent shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-medium text-card-foreground">{project.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="text-accent shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="text-sm text-muted-foreground">Project Size</div>
                      <div className="font-medium text-card-foreground">{project.size}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Interested in a Similar Project?</h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Contact us to discuss how we can help bring your vision to life.
                </p>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
