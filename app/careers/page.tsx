import type { Metadata } from "next"
import { Users, Award, TrendingUp, Heart, MapPin, Clock, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Careers - BuilderCo",
  description: "Join our team of construction professionals and build your career with BuilderCo.",
}

const openPositions = [
  {
    title: "Senior Project Manager",
    location: "New York, USA",
    type: "Full-time",
    department: "Project Management",
  },
  {
    title: "Civil Engineer",
    location: "Los Angeles, USA",
    type: "Full-time",
    department: "Engineering",
  },
  {
    title: "Construction Superintendent",
    location: "Chicago, USA",
    type: "Full-time",
    department: "Operations",
  },
  {
    title: "Electrical Engineer",
    location: "Miami, USA",
    type: "Full-time",
    department: "Engineering",
  },
  {
    title: "Safety Manager",
    location: "Dallas, USA",
    type: "Full-time",
    department: "Safety & Compliance",
  },
  {
    title: "Estimator",
    location: "San Francisco, USA",
    type: "Full-time",
    department: "Estimating",
  },
]

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/placeholder.svg?height=500&width=1920&query=construction+team+workplace)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Build your career with an industry leader committed to excellence, innovation, and professional growth
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Why BuilderCo?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join a company that invests in your future and values your contribution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="border-border text-center">
              <CardContent className="p-6 lg:p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Career Growth</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Clear paths for advancement and professional development opportunities
                </p>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardContent className="p-6 lg:p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Competitive Benefits</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comprehensive health coverage, retirement plans, and performance bonuses
                </p>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardContent className="p-6 lg:p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Great Culture</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Collaborative environment with supportive teams and strong leadership
                </p>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardContent className="p-6 lg:p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Work-Life Balance</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Flexible schedules, generous time off, and employee wellness programs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-border hover:border-accent transition-colors">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-card-foreground">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-accent" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={16} className="text-accent" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={16} className="text-accent" />
                          {position.department}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="shrink-0 bg-transparent">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Apply Now</h2>
              <p className="text-lg text-muted-foreground">
                Submit your application and join our team of professionals
              </p>
            </div>
            <Card className="border-border">
              <CardContent className="p-6 lg:p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Input id="position" placeholder="e.g., Senior Project Manager" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume / CV *</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                      <p className="text-muted-foreground">Click to upload or drag and drop your resume</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us why you'd be a great fit for BuilderCo..."
                      rows={6}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
                    Submit Application
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
