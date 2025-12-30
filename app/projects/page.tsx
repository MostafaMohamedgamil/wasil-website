import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coffee, Droplet, Users, Award, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Products - 7Solutions",
  description: "Explore 7Solutions's range of high-quality products.",
}

const products = [
  {
    id: "pasta-products",
    title: "Pasta Products",
    icon: Coffee,
    image: "/images/backImg.jpeg",
    description: "Crafted pasta varieties made for exceptional taste and quality, using carefully selected ingredients to deliver perfect texture and rich flavor in every dish.",
  },
  // {
  //   id: "traflata-al-brozo",
  //   title: "Traflata al brozo",
  //   icon: Droplet,
  //   image: "/images/card2.jpeg",
  //   description: "Traflata al Brozo is a traditional dish known for its rich flavors and aromatic spices, offering a unique taste experience rooted in authentic culinary heritage",
  // },
  // {
  //   id: "grano-italiano",
  //   title: "Grano Italiano",
  //   icon: Users,
  //   image: "/images/card3.jpeg",
  //   description: "Grano Italiano is a premium Italian wheat, prized for its quality and rich, nutty flavor, perfect for authentic pasta and baked goods.",
  // },
  {
    id: "westgold",
    title: "Westgold",
    icon: Award,
    image: "/images/card4.jpeg",
    description: "Westgold is a high-quality product known for its purity and excellence, delivering consistent performance and premium results",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/images/pastraa.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-[#9760df]">Our Products</h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Discover our range of high-quality products, carefully selected to meet professional standards and deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center gap-6 lg:gap-8">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <Card
                  key={product.id}
                  className="border-border hover:border-[#b581f8] transition-colors bg-cover bg-center w-full md:w-10/12 lg:w-4/12 "
                  style={{ backgroundImage: `url('${product.image}')` }}
                >
                  <CardContent className="p-6 lg:p-8 bg-white/70 rounded-lg">
                    <div className="w-12 h-12 bg-[#e3ceff] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#a15bff]" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#9760df]">{product.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}

          </div>
        </div>
      </section>
    </div>
  )
}
