import Link from "next/link"
import { ArrowRight, Building2, Users, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/placeholder.svg?height=700&width=1920&query=construction+site+modern+building)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance">
            Building Tomorrow's Infrastructure Today
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-balance">
            Leading the construction industry with excellence, innovation, and unwavering commitment to quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/about">
                About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/projects">Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Company Brief */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              BuilderCo is a leading construction and contracting company with decades of experience in delivering
              world-class infrastructure projects. We specialize in general contracting, infrastructure development,
              residential and commercial buildings, and industrial projects. Our commitment to excellence and innovation
              has made us a trusted partner for clients worldwide.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">35+</div>
              <div className="text-lg text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-muted-foreground">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-lg text-muted-foreground">Skilled Employees</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">General Contracting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full-service construction management from concept to completion with unmatched quality.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Infrastructure & Roads</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building the backbone of communities with highways, bridges, and transportation systems.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Residential & Commercial</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating spaces where people live, work, and thrive with innovative design solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Industrial Projects</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized facilities for manufacturing, processing, and distribution operations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Project Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expert oversight ensuring projects are delivered on time, within budget, and to specification.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8 flex items-center justify-center">
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcasing our commitment to excellence through landmark projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            <div className="group overflow-hidden rounded-lg bg-card">
              <div
                className="h-64 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{
                  backgroundImage: "url(/placeholder.svg?height=300&width=400&query=modern+skyscraper+construction)",
                }}
              />
              <div className="p-6">
                <div className="text-sm text-accent font-medium mb-2">Commercial</div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Downtown Business Center</h3>
                <p className="text-muted-foreground text-sm mb-3">New York, USA</p>
                <p className="text-muted-foreground leading-relaxed">
                  A 45-story mixed-use development featuring office spaces, retail, and luxury residences.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg bg-card">
              <div
                className="h-64 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{
                  backgroundImage: "url(/placeholder.svg?height=300&width=400&query=highway+bridge+infrastructure)",
                }}
              />
              <div className="p-6">
                <div className="text-sm text-accent font-medium mb-2">Infrastructure</div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Metropolitan Highway Extension</h3>
                <p className="text-muted-foreground text-sm mb-3">Los Angeles, USA</p>
                <p className="text-muted-foreground leading-relaxed">
                  22-mile highway expansion project including bridges, overpasses, and smart traffic systems.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg bg-card">
              <div
                className="h-64 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{
                  backgroundImage: "url(/placeholder.svg?height=300&width=400&query=industrial+factory+complex)",
                }}
              />
              <div className="p-6">
                <div className="text-sm text-accent font-medium mb-2">Industrial</div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Advanced Manufacturing Facility</h3>
                <p className="text-muted-foreground text-sm mb-3">Chicago, USA</p>
                <p className="text-muted-foreground leading-relaxed">
                  State-of-the-art 500,000 sq ft facility with automated systems and sustainable design.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients & Partners */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Trusted By Industry Leaders</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proud to partner with the world's most respected organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="h-16 flex items-center justify-center">
              <div className="text-2xl font-bold text-muted-foreground">LOGO</div>
            </div>
            <div className="h-16 flex items-center justify-center">
              <div className="text-2xl font-bold text-muted-foreground">LOGO</div>
            </div>
            <div className="h-16 flex items-center justify-center">
              <div className="text-2xl font-bold text-muted-foreground">LOGO</div>
            </div>
            <div className="h-16 flex items-center justify-center">
              <div className="text-2xl font-bold text-muted-foreground">LOGO</div>
            </div>
            <div className="h-16 flex items-center justify-center">
              <div className="text-2xl font-bold text-muted-foreground">LOGO</div>
            </div>
            <div className="h-16 flex items-center justify-center">
              <div className="text-2xl font-bold text-muted-foreground">LOGO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Ready to Start Your Project?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-balance">
            Let's work together to bring your vision to life. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
