import Link from "next/link"
import { ArrowRight, Building2, Users, Award, TrendingUp, Coffee, ShieldCheck, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[100vh] flex items-center justify-center bg-primary text-primary-foreground">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance">
           Your Trusted Partner for Premium Pasta & Cooking Oil Supply
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-balance">
          We specialize in importing and distributing high-quality pasta and cooking oils from trusted international sources, serving restaurants, cafés, and food chains across Egypt with reliable and consistent supply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-xl bg-gradient-to-br from-[#3A0099] to-[#9B4DFF] text-white hover:from-[#5a00cc] hover:to-[#b26fff]">
              <Link href="/about" className="flex items-center">
                About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[#9760df]">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At 7Solutions, we provide reliable food supply solutions for restaurants across Egypt. We specialize in importing and distributing premium pasta and cooking oils from certified international sources, ensuring consistent quality, efficient logistics, and long-term partnerships with our clients.
            </p>
            <Button asChild className="rounded-xl" variant="outline" size="lg">
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
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">5+</div>
              <div className="text-lg text-muted-foreground">Years of experience in food supply and distribution</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-muted-foreground">restaurants and cafés served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-muted-foreground">tons of products distributed annually</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg text-muted-foreground">Customer satisfaction rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-[#9760df]">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Premium pasta and cooking oils carefully selected to meet the needs of professional kitchens, restaurants, and food service businesses.
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Coffee  className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Pasta Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A wide range of high-quality pasta varieties suitable for professional kitchens, offering consistent texture, taste, and performance for daily restaurant use.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Cooking Oils</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium cooking oils selected for quality and performance in professional kitchens.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Imported Brands</h3>
                <p className="text-muted-foreground leading-relaxed">
We source our products from trusted international manufacturers, ensuring certified quality standards and reliable supply for our clients.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Bulk Supply Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Flexible bulk supply options tailored for restaurants, cafés, and food chains to ensure continuous availability without interruptions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Quality Assurance</h3>
                <p className="text-muted-foreground leading-relaxed">
All products are carefully selected and inspected to meet food safety regulations and the expectations of professional kitchens.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-accent transition-colors justify-center flex flex-col">
              <CardContent className="p-6 lg:p-8 flex items-center justify-center">
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    View All Products
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {/* Pasta Products */}
  <Card
    className="border-border hover:border-[#b581f8] transition-colors bg-cover bg-center"
    style={{ backgroundImage: "url('/images/card1.jpeg')" }}
  >
    <CardContent className="p-6 lg:p-8 bg-white/70 rounded-lg">
      <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center mb-4">
        <Coffee className="text-[#a15bff]" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[#9760df]">Pasta Products</h3>
      <p className="text-muted-foreground leading-relaxed">
        A wide range of high-quality pasta varieties suitable for professional kitchens, offering consistent texture, taste, and performance for daily restaurant use.
      </p>
    </CardContent>
  </Card>


  {/* Cooking Oils */}
  <Card className="border-border hover:border-[#b581f8] transition-colors bg-cover bg-center"
   style={{ backgroundImage: "url('/images/card2.jpeg')" }}
   >
    <CardContent className="p-6 lg:p-8 bg-white/70 rounded-lg">
      <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center mb-4">
        <Droplet className="text-[#a15bff]" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[#9760df]">Traflata al brozo</h3>
      <p className="text-muted-foreground leading-relaxed">
        Traflata al Brozo is a traditional dish known for its rich flavors and aromatic spices, offering a unique taste experience rooted in authentic culinary heritage
      </p>
    </CardContent>
  </Card>

  {/* Imported Brands */}
  <Card className="border-border hover:border-[#b581f8] transition-colors bg-cover bg-center"
   style={{ backgroundImage: "url('/images/card3.jpeg')" }}>
    <CardContent className="p-6 lg:p-8 bg-white/70 rounded-lg">
      <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center mb-4">
        <Users className="text-[#a15bff]" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[#9760df]">Grano Italiano</h3>
      <p className="text-muted-foreground leading-relaxed">
Grano Italiano is a premium Italian wheat, prized for its quality and rich, nutty flavor, perfect for authentic pasta and baked goods.      </p>
    </CardContent>
  </Card>

  {/* Bulk Supply Solutions */}
  <Card className="border-border hover:border-[#b581f8] transition-colors bg-cover bg-center"
   style={{ backgroundImage: "url('/images/card4.jpeg')" }}>
    <CardContent className="p-6 lg:p-8 bg-white/70 rounded-lg">
      <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center mb-4">
        <Award className="text-[#a15bff]" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[#9760df]">Westgold</h3>
      <p className="text-muted-foreground leading-relaxed">
Westgold is a high-quality product known for its purity and excellence, delivering consistent performance and premium results      </p>
    </CardContent>
  </Card>

  {/* Quality Assurance */}
  {/* <Card className="border-border hover:border-[#b581f8] transition-colors">
    <CardContent className="p-6 lg:p-8">
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
        <ShieldCheck className="text-accent" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-card-foreground">Quality Assurance</h3>
      <p className="text-muted-foreground leading-relaxed">
        All products are carefully selected and inspected to meet food safety regulations and the expectations of professional kitchens.
      </p>
    </CardContent>
  </Card> */}

  {/* View All Products Button */}
  <Card className="border-border hover:border-[#b581f8] transition-colors justify-center flex flex-col">
    <CardContent className="p-6 lg:p-8 flex items-center justify-center">
      <Button asChild variant="outline" size="lg">
        <Link href="/services">
          View All Products
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </Button>
    </CardContent>
  </Card>
</div>
        </div>
      </section>

      {/* Featured Projects */}
      {/* <section className="py-16 lg:py-24 bg-muted">
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
      </section> */}

      {/* Clients & Partners */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-[#9760df]">Trusted By Industry Leaders</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proud to partner with the world's most respected organizations
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="w-1/2 md:w-1/4 lg:w-1/4 flex items-center justify-center h-20 rounded-full">
              <img
                src="/images/mo-bistro.jpeg"
                alt="Client Logo"
                className="max-h-full max-w-full object-contain rounded-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
  <div className="container mx-auto px-4 lg:px-8 text-center">
    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
      Get Premium Restaurant Supplies Delivered Fast
    </h2>
    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-balance">
      We source top-quality products from trusted international suppliers and deliver them directly to your kitchen, ensuring freshness, reliability, and efficiency for your restaurant or café.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
        <Link href="/contact">
          Request a Quote
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
      >
        <Link href="/services">Our Products</Link>
      </Button> */}
    </div>
  </div>
</section>

    </div>
  )
}
