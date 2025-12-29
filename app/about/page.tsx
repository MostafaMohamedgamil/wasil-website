import type { Metadata } from "next"
import { Target, Eye, Heart, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us - BuilderCo",
  description: "Learn about BuilderCo's history, vision, mission, and leadership team.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/placeholder.svg?height=500&width=1920&query=construction+team+meeting)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About BuilderCo</h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Building excellence since 1990, transforming communities through innovative construction solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1990, BuilderCo has grown from a small regional contractor to one of the most respected
                  construction companies in the industry. Our journey has been marked by a relentless commitment to
                  quality, innovation, and client satisfaction.
                </p>
                <p>
                  Over the past three decades, we've successfully completed over 500 projects ranging from
                  infrastructure development and commercial buildings to residential communities and industrial
                  facilities. Each project reflects our dedication to excellence and our ability to deliver complex
                  construction solutions on time and within budget.
                </p>
                <p>
                  Today, BuilderCo employs over 2,500 skilled professionals and operates across multiple regions,
                  bringing world-class construction expertise to every project we undertake.
                </p>
              </div>
            </div>
            <div
              className="h-[400px] lg:h-[500px] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url(/placeholder.svg?height=500&width=600&query=modern+construction+site+overview)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="border-border">
              <CardContent className="p-8 lg:p-10">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-card-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most trusted construction partner, recognized for transforming ambitious visions
                  into landmark realities through innovation, sustainability, and uncompromising quality.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-8 lg:p-10">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-card-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction solutions that exceed client expectations, foster sustainable
                  communities, and create lasting value for all stakeholders through excellence, integrity, and
                  continuous innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Excellence</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Striving for the highest standards in every aspect of our work
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Integrity</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building trust through honest, transparent, and ethical practices
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Innovation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Embracing new technologies and methods to deliver better results
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Safety</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ensuring the wellbeing of our team and stakeholders is our top priority
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership / Board Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals driving our vision forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Anderson", title: "Chief Executive Officer", image: "executive+professional+portrait" },
              { name: "Sarah Mitchell", title: "Chief Operating Officer", image: "female+executive+professional" },
              { name: "Michael Chen", title: "Chief Financial Officer", image: "asian+executive+professional" },
              {
                name: "Jennifer Lopez",
                title: "VP of Construction",
                image: "construction+manager+professional",
              },
            ].map((leader, index) => (
              <Card key={index} className="border-border overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(/placeholder.svg?height=300&width=300&query=${leader.image})`,
                  }}
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1 text-card-foreground">{leader.name}</h3>
                  <p className="text-muted-foreground text-sm">{leader.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
