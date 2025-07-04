import './App.css'
import Navbar from './Navbar'
import Slider from './Slider'
import Hero from './Hero'
import Features from './Features'
import ServicesOffered from './ServicesOffered'
import WhyChooseUs from './WhyChooseUs'
import NumerologyHero from './NumerologyHero'
import UpcomingEvents from './UpcomingEvents'
import TestimonialSection from './TestimonialSection'
import BlogSection from './BlogSection'
import Journey from './Journey'
import Footer from './Footer'
import ImageSlider from './ImageSlider';
import InstagramSection from './InstagramSection';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden ">
      {/* Full-width components */}
      

      {/* Centered and max-width container for the rest of the app */}
      <div className="relative w-full max-w-[1450px] mx-auto">
        {/* Navbar should be at the top */}
        <Navbar />
        <Slider />
      <Hero />

        {/* Sections with IDs for scrolling */}
        <section id="home">
          <Features />
        </section>

        <section id="services">
          <ServicesOffered />
        </section>

        <section id="about">
          <WhyChooseUs />
        </section>

        <section>
          <NumerologyHero />
        </section>

        <section id="events">
          <UpcomingEvents />
          <InstagramSection />
          <TestimonialSection />
        </section>

        <section id="blogs">
          <BlogSection />
          <Journey />
        </section>

        <section>
          <ImageSlider />
        </section>

        {/* Footer (no scroll link needed) */}
        <Footer />
      </div>
    </div>
  )
}

export default App
