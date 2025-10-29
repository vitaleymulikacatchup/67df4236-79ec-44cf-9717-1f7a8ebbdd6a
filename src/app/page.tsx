"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Globe, Handshake, Heart, HelpCircle, Leaf, Mail, MessageCircle, Mountain, Package, Shield, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TeaBliss"
          button={{ text: "Shop Now", href: "products" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Tea Collection"
          description="Discover the finest black and green teas from around the world. Carefully sourced, expertly blended, delivered fresh to your door."
          tag="Artisan Quality"
          tagIcon={Leaf}
          imageSrc="https://images.pexels.com/photos/7368108/pexels-photo-7368108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant tea ceremony with premium loose leaf tea"
          imagePosition="right"
          buttons={[
            { text: "Shop Tea Collection", href: "products" },
            { text: "Learn About Tea", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Tea Journey"
          description="From the rolling hills of Darjeeling to the misty mountains of Fujian, we source only the finest tea leaves to bring you exceptional quality and flavor."
          tag="Our Story"
          tagIcon={Mountain}
          imageSrc="https://images.pexels.com/photos/10572399/pexels-photo-10572399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Tea plantation workers harvesting premium tea leaves"
          imagePosition="left"
          bulletPoints={[
            {
              title: "Direct Trade",
              description: "We work directly with tea gardens to ensure fair prices and sustainable practices",
              icon: Handshake
            },
            {
              title: "Expert Curation",
              description: "Our tea masters carefully select and blend each variety for optimal flavor",
              icon: Award
            },
            {
              title: "Fresh Delivery",
              description: "Teas are packed fresh and shipped within days of processing",
              icon: Package
            },
            {
              title: "Quality Guarantee",
              description: "Every batch is tested for purity, flavor, and freshness standards",
              icon: Shield
            }
          ]}
          buttons={[
            { text: "Our Tea Sources", href: "about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Premium Tea Collection"
          description="Explore our carefully curated selection of black and green teas from renowned tea gardens worldwide"
          tag="Featured Products"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Earl Grey Supreme",
              price: "$24.99",
              imageSrc: "https://images.pexels.com/photos/5713770/pexels-photo-5713770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium Earl Grey tea with bergamot",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Dragon Well Green Tea",
              price: "$32.99",
              imageSrc: "https://images.pexels.com/photos/12192276/pexels-photo-12192276.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dragon Well green tea leaves",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Himalayan Gold Black Tea",
              price: "$28.99",
              imageSrc: "https://images.pexels.com/photos/7303106/pexels-photo-7303106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium Himalayan black tea leaves",
              initialQuantity: 1
            },
            {
              id: "4",
              name: "Jasmine Phoenix Pearls",
              price: "$45.99",
              imageSrc: "https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jasmine green tea pearls with flowers",
              initialQuantity: 1
            },
            {
              id: "5",
              name: "Traditional Oolong",
              price: "$38.99",
              imageSrc: "https://images.pexels.com/photos/6545351/pexels-photo-6545351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional oolong tea leaves",
              initialQuantity: 1
            },
            {
              id: "6",
              name: "Masala Chai Blend",
              price: "$22.99",
              imageSrc: "https://images.pexels.com/photos/5332489/pexels-photo-5332489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Masala chai tea with spices",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Why Tea Lovers Choose Us"
          description="Our commitment to quality and customer satisfaction speaks for itself"
          tag="Our Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Happy Customers",
              description: "Tea enthusiasts who trust our quality",
              icon: Users
            },
            {
              id: "2",
              value: "100%",
              title: "Organic Certified",
              description: "All our teas are certified organic",
              icon: Leaf
            },
            {
              id: "3",
              value: "15",
              title: "Countries",
              description: "We source from the finest tea regions",
              icon: Globe
            },
            {
              id: "4",
              value: "98%",
              title: "Satisfaction Rate",
              description: "Customer satisfaction guarantee",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Tea Lovers Say"
          description="Discover why thousands of customers choose our premium tea collection"
          tag="Customer Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Tea Enthusiast & Writer",
              testimonial: "The quality of tea from TeaBliss is absolutely exceptional. Their Earl Grey Supreme has become my daily ritual - the bergamot is perfectly balanced and the tea leaves are pristine.",
              imageSrc: "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional woman drinking tea smiling"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Restaurant Owner",
              testimonial: "As a restaurant owner, I demand the highest quality ingredients. TeaBliss consistently delivers premium teas that elevate our dining experience. Their customer service is outstanding.",
              imageSrc: "https://images.pexels.com/photos/28464079/pexels-photo-28464079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Middle-aged man enjoying cup of tea"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Wellness Coach",
              testimonial: "I recommend TeaBliss to all my clients seeking quality tea for their wellness journey. The Dragon Well Green Tea is incredibly pure and refreshing - you can taste the difference.",
              imageSrc: "https://images.pexels.com/photos/7155638/pexels-photo-7155638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Young woman with tea cup relaxed"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Corporate Executive",
              testimonial: "TeaBliss has transformed my morning routine. The Himalayan Gold Black Tea gives me the perfect energy boost, and the packaging keeps it fresh for weeks. Highly recommended!",
              imageSrc: "https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Businessman drinking tea at office"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Home Chef & Blogger",
              testimonial: "The variety and quality at TeaBliss is unmatched. From their delicate Jasmine Phoenix Pearls to the robust Masala Chai, every tea tells a story of craftsmanship and care.",
              imageSrc: "https://images.pexels.com/photos/7155632/pexels-photo-7155632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Woman in kitchen with tea collection"
            },
            {
              id: "6",
              name: "James Wilson",
              role: "Retired Professor",
              testimonial: "After trying teas from around the world, I can confidently say TeaBliss offers some of the finest selections. Their Traditional Oolong is particularly exceptional - complex yet smooth.",
              imageSrc: "https://images.pexels.com/photos/6262968/pexels-photo-6262968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Man reading with tea cup morning light"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Tea Industry Leaders"
          description="Join the community of premium tea brands and connoisseurs who rely on quality"
          tag="Industry Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/4680241/pexels-photo-4680241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9101747/pexels-photo-9101747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/298843/pexels-photo-298843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/27173014/pexels-photo-27173014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9101747/pexels-photo-9101747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4680241/pexels-photo-4680241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9101747/pexels-photo-9101747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our premium tea collection and services"
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How do you ensure tea freshness?",
              content: "All our teas are sourced directly from gardens and packed within 48 hours of processing. We use airtight, light-proof packaging to preserve freshness and flavor. Each package includes a harvest date so you know exactly when your tea was processed."
            },
            {
              id: "2",
              title: "What's the difference between your black and green teas?",
              content: "Our black teas are fully oxidized, offering robust, malty flavors perfect for morning energy. Green teas are minimally oxidized, preserving delicate, grassy notes and higher antioxidant levels. Both are sourced from premium tea gardens worldwide."
            },
            {
              id: "3",
              title: "Do you offer organic certification?",
              content: "Yes! All our teas are certified organic by USDA standards. We work exclusively with tea gardens that follow sustainable, chemical-free farming practices. Certification documents are available upon request."
            },
            {
              id: "4",
              title: "How should I store my tea?",
              content: "Store your tea in a cool, dry place away from light, air, and strong odors. Keep in the original packaging or transfer to an airtight container. Properly stored tea stays fresh for 2-3 years, though we recommend enjoying within 18 months for optimal flavor."
            },
            {
              id: "5",
              title: "What's your return policy?",
              content: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your tea, return it for a full refund or exchange. We stand behind our quality and want every customer to find their perfect cup."
            },
            {
              id: "6",
              title: "Do you ship internationally?",
              content: "Currently we ship within the United States and Canada. International shipping is available to select countries. Shipping costs and delivery times vary by location. Contact our customer service for specific international shipping queries."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Steeped in Tea Knowledge"
          description="Join our tea community and receive weekly brewing tips, new product announcements, and exclusive discounts on premium tea selections."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our weekly newsletter and promotional emails. Unsubscribe anytime with one click."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Products",
              items: [
                { label: "Black Teas", href: "products" },
                { label: "Green Teas", href: "products" },
                { label: "Oolong Teas", href: "products" },
                { label: "Tea Accessories", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Tea Sources", href: "about" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Shipping Info", href: "faq" },
                { label: "Returns", href: "faq" },
                { label: "Tea Guide", href: "about" }
              ]
            }
          ]}
          copyrightText="© 2024 TeaBliss. Premium teas for discerning palates."
        />
      </div>
    </ThemeProvider>
  );
}