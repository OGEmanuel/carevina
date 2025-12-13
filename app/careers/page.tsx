import CareerForm from './form';
import Hero from './hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carevina | Careers',
  description:
    'Carevina provides compassionate, evidence-based behavioral health services in Shangri-La and online — therapy, counselling, and workplace mental health solutions for individuals and organisations.',
};

const Careers = () => {
  return (
    <>
      <Hero />
      <CareerForm />
    </>
  );
};

export default Careers;
