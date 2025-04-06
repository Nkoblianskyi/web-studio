import { Hero } from '@/components/Hero';
import '../styles/index.scss';
import { Offer } from '@/components/offer/Offer';
import { OurWorks } from '@/components/OurWorks';
import CreativeTeam from '@/components/CreativeTeam';
import { Projects } from '@/components/portfolio/Projects';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  return (
    <div className='home'>
        <Hero/>
        <Offer/>
        <OurWorks/>
        <CreativeTeam/>
        <Projects/>
        <ContactForm/>
    </div>
  );
}
