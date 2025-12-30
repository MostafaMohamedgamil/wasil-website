import type { Metadata } from "next"
import { Target, Eye, Heart, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us - 7Solutions",
  description: "Learn about 7Solutions' history, vision, mission, and leadership team.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/images/about-cover.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#9760df] mb-6">About us</h1>
          <p className="text-lg lg:text-xl  text-gray-400 max-w-3xl mx-auto">
           Delivering Quality Ingredients to Restaurants Across Egypt
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[#9760df]">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
             
Founded with a vision to provide top-quality imported pasta, macaroni, and cooking oils to Egypt's culinary sector, 7solutions has become a trusted partner for restaurants seeking reliable and premium ingredients.
                </p>
                <p>
           We specialize in sourcing the finest products from around the world and ensuring they reach our clients efficiently and safely. From small bistros to renowned restaurants, our commitment is to support the culinary community with consistent quality and exceptional service.
                </p>
                <p>
               At 7solutions, we believe that great food starts with great ingredients. Our team works tirelessly to maintain strong relationships with international suppliers and local restaurants, bridging the gap between global quality and local demand.
                </p>
              </div>
            </div>
            <div
              className="h-[400px] lg:h-[500px] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/postal.jpeg)",
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
                <div className="w-16 h-16 bg-[#e3ceff] rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-[#a15bff]" size={32} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#9760df]">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                 
To be Egypt’s most trusted supplier of high-quality pasta, macaroni, and cooking oils, empowering restaurants with ingredients that inspire culinary excellence.

                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-8 lg:p-10">
                <div className="w-16 h-16 bg-[#e3ceff] rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-[#a15bff]" size={32} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#9760df]">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                 
To provide premium imported products with reliability and efficiency, supporting restaurants across Egypt to deliver exceptional dining experiences. We are committed to quality, transparency, and building strong, lasting partnerships with both international suppliers and local clients.
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-[#9760df]">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-[#a15bff]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#9760df]">Excellence</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Striving for the highest standards in every aspect of our work
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-[#a15bff]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#9760df]">Integrity</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building trust through honest, transparent, and ethical practices
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="text-[#a15bff]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#9760df]">Innovation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Embracing new technologies and methods to deliver better results
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-[#a15bff]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#9760df]">Safety</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ensuring the wellbeing of our team and stakeholders is our top priority
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership / Board Section */}
      {/* <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-[#9760df]">Our Leadership</h2>
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
      </section> */}
    </div>
  )
}
