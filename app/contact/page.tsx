"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState, FormEvent } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const whatsappMessage = `
*رسالة جديدة من موقع 7Solutions*

*الاسم:* ${formData.firstName} ${formData.lastName}
*البريد الإلكتروني:* ${formData.email}
*رقم الهاتف:* ${formData.phone || "غير متوفر"}
*الشركة:* ${formData.company || "غير متوفر"}
*الموضوع:* ${formData.subject}

*الرسالة:*
${formData.message}
    `.trim()

    // WhatsApp number with country code
    const whatsappNumber = "201030356678"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: "url(/images/contact.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-[#9760df]">Contact Us</h1>
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
                    <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="text-[#a15bff]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-card-foreground">Phone</h3>
                      <p className="text-sm text-muted-foreground">+20 10 30356678</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="text-[#a15bff]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-card-foreground">Email</h3>
                      <p className="text-sm text-muted-foreground">info@builderco.com</p>
                    </div>
                  </div> */}
                  {/* <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="text-[#a15bff]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-card-foreground">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send Us a Message</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          required 
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          required 
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john.doe@example.com" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+20 10 12345678"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Organization</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        placeholder="What is your inquiry about?" 
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project or inquiry..." 
                        rows={6} 
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
                      Send Message via WhatsApp
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
      {/* <section className="py-16 lg:py-24 bg-muted">
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
      </section> */}

      {/* Map Placeholder */}
      {/* <section className="py-16 lg:py-24 bg-background">
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
      </section> */}
    </div>
  )
}
