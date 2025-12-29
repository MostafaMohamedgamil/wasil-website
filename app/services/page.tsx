import type { Metadata } from "next"
import Link from "next/link"
import { Building2, TrendingUp, Users, Award, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services - BuilderCo",
  description:
    "Comprehensive construction services including general contracting, infrastructure, residential, commercial, industrial projects, and project management.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/placeholder.svg?height=500&width=1920&query=construction+services+equipment)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {/* General Contracting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                className="h-[400px] rounded-lg bg-cover bg-center order-2 lg:order-1"
                style={{
                  backgroundImage: "url(/placeholder.svg?height=400&width=600&query=general+construction+contractor)",
                }}
              />
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="text-accent" size={32} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">General Contracting</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our general contracting services provide comprehensive construction management from concept through
                  completion. We handle all aspects of the construction process, including planning, scheduling,
                  budgeting, and quality control.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Pre-construction planning and feasibility studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Design-build and construction management services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Quality assurance and safety management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Procurement and subcontractor coordination</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Infrastructure & Roads */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-accent" size={32} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Infrastructure & Roads</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We specialize in large-scale infrastructure projects that form the backbone of modern communities.
                  From highways and bridges to transportation systems, we build the connections that keep cities moving.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Highway and expressway construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Bridge and overpass engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Urban transportation systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Utility infrastructure development</span>
                  </li>
                </ul>
              </div>
              <div
                className="h-[400px] rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: "url(/placeholder.svg?height=400&width=600&query=highway+infrastructure+roads)",
                }}
              />
            </div>

            {/* Residential & Commercial Buildings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                className="h-[400px] rounded-lg bg-cover bg-center order-2 lg:order-1"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=400&width=600&query=modern+residential+commercial+building)",
                }}
              />
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-accent" size={32} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  Residential & Commercial Buildings
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Creating spaces where people live, work, and thrive. Our expertise spans luxury residential
                  developments, commercial office buildings, retail centers, and mixed-use properties.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>High-rise residential towers and communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Commercial office and business centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Retail and shopping complexes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Mixed-use developments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Industrial Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Award className="text-accent" size={32} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Industrial Projects</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Specialized construction for manufacturing, processing, and distribution facilities. We understand the
                  unique requirements of industrial construction and deliver projects that meet stringent operational
                  needs.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Manufacturing plants and factories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Warehouses and distribution centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Processing and production facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Specialized industrial infrastructure</span>
                  </li>
                </ul>
              </div>
              <div
                className="h-[400px] rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: "url(/placeholder.svg?height=400&width=600&query=industrial+factory+facility)",
                }}
              />
            </div>

            {/* Project Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                className="h-[400px] rounded-lg bg-cover bg-center order-2 lg:order-1"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=400&width=600&query=project+management+construction+planning)",
                }}
              />
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-accent" size={32} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Project Management</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Expert oversight ensuring projects are delivered on time, within budget, and to specification. Our
                  project management services provide the coordination and control needed for successful outcomes.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Comprehensive project planning and scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Budget management and cost control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Risk assessment and mitigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Stakeholder communication and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Need a Consultation?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-balance">
            Let's discuss how we can bring your construction project to life
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
