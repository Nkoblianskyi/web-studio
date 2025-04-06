import { Hero } from '@/components/Hero';
import '../styles/index.scss';
import { Offer } from '@/components/offer/Offer';
import { OurWorks } from '@/components/OurWorks';
import CreativeTeam from '@/components/CreativeTeam';

export default function Home() {
  return (
    <div className='home'>
        <Hero/>
        <Offer/>
        <OurWorks/>
        <CreativeTeam/>
    </div>
  );
}
