import Banner from '@/components/banner';
import Hero from './hero';
import Why from './why';
import ConatctForm from '@/components/contact-form';
import { Metadata } from 'next';

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
      <ConatctForm />
    </>
  );
};

export default AboutUs;
