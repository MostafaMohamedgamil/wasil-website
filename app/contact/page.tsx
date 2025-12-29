import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Contact Us - 7Solutions",
  description: "Get in touch with 7Solutions for your construction and contracting needs.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/placeholder.svg?height=500&width=1920&query=construction+office+contact)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Let's discuss how we can bring your construction project to life
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Have a question or ready to start your project? We're here to help. Reach out to us through any of the
                  channels below.
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-card-foreground">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-card-foreground">Email</h3>
                      <p className="text-sm text-muted-foreground">info@builderco.com</p>
                      <p className="text-sm text-muted-foreground">projects@builderco.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-card-foreground">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send Us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">Email Address *</Label>
                        <Input id="contactEmail" type="email" placeholder="john.doe@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">Phone Number</Label>
                        <Input id="contactPhone" type="tel" placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Organization</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="What is your inquiry about?" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={6} required />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
                      Send Message
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      We'll get back to you within 24-48 business hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Our Locations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visit us at one of our offices across the country
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                city: "New York",
                address: "123 Construction Ave, Suite 100",
                postal: "New York, NY 10001",
                phone: "+1 (555) 123-4567",
              },
              {
                city: "Los Angeles",
                address: "456 Builder Blvd, Floor 5",
                postal: "Los Angeles, CA 90001",
                phone: "+1 (555) 234-5678",
              },
              {
                city: "Chicago",
                address: "789 Infrastructure Way",
                postal: "Chicago, IL 60601",
                phone: "+1 (555) 345-6789",
              },
            ].map((location, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-card-foreground">{location.city}</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{location.address}</p>
                    <p>{location.postal}</p>
                    <p className="font-medium text-card-foreground pt-2">{location.phone}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-lg overflow-hidden border border-border">
            <div
              className="h-[400px] lg:h-[500px] bg-muted flex items-center justify-center"
              style={{
                backgroundImage: "url(/placeholder.svg?height=500&width=1200&query=map+location+pins)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center p-8 bg-card/90 backdrop-blur-sm rounded-lg">
                <MapPin className="mx-auto mb-3 text-accent" size={48} />
                <p className="text-lg font-semibold text-card-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Find our offices across the country</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
