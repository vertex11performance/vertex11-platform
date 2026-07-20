import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Programs from "@/components/Programs";
import Campo from "@/components/Campo";
import Coach from "@/components/Coach";
import Testimonials from "@/components/Testimonials";
import AthleteForm from "@/components/AthleteForm";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Services />
      </FadeIn>

      <FadeIn delay={0.15}>
        <Programs />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Campo />
      </FadeIn>

      <FadeIn delay={0.25}>
        <Coach />
      </FadeIn>

      <FadeIn delay={0.3}>
        <Testimonials />
      </FadeIn>

      <FadeIn delay={0.35}>
        <AthleteForm />
      </FadeIn>

      <Footer />

    </main>
  );
}