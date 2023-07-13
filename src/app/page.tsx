import Calculator from '@/components/calculator'
import Community from '@/components/community'
import Customers from '@/components/customers'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Insight from '@/components/insight'
import Integrations from '@/components/integrations'
import Navbar from '@/components/navbar'
import Services from '@/components/services'
import SignUp from '@/components/signup'
import Video from '@/components/video'

export default function Home() {
  return (
    <div className="p-2">
      <Navbar />
      <Hero />
      <Video />
      <Features />
      <Insight />
      <Services />
      <Integrations />
      <Customers />
      <Calculator />
      <Community />
      <SignUp />
      <Footer />
    </div>
  )
}



// navbar
// hero
// video (but not rly)
// features (reusable components)
// insight (CAD) (reusable components)
// services; ip lookup, gnql, trends (don't reuse bc opposite sides?)
// integrations
// customers
// roi calculator
// community
// sign up
// footer