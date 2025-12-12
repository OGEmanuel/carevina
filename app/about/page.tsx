import Banner from '@/components/banner';
import Hero from './hero';
import Why from './why';
import { Metadata } from 'next';
import AboutForm from './form';

export const metadata: Metadata = {
  title: 'Carevina | About Us',
  description:
    'Carevina provides compassionate, evidence-based behavioral health services in Lagos and online — therapy, counselling, and workplace mental health solutions for individuals and organisations.',
};

const AboutUs = () => {
  return (
    <>
      <Hero />
      <Why />
      <Banner />
      <AboutForm />
    </>
  );
};

export default AboutUs;
