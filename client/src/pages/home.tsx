import GrainOverlay from '@/components/landing/GrainOverlay';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import TrustBar from '@/components/landing/TrustBar';
import ServicesSection from '@/components/landing/ServicesSection';
import HowItWorks from '@/components/landing/HowItWorks';
import WhyQuillgent from '@/components/landing/WhyQuillgent';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <HowItWorks />
        <WhyQuillgent />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
