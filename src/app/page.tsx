import { Hero } from '@/components/Hero';
import '../styles/index.scss';
import { Offer } from '@/components/offer/Offer';
import { OurWorks } from '@/components/OurWorks';

export default function Home() {
  return (
    <div className=''>
        <Hero/>
        <Offer/>
        <OurWorks/>
    </div>
  );
}
