import Banner from '@/components/banner';
import { Metadata } from 'next';
import ContactForm from './form';
import LocationMap from './location-map';

export const metadata: Metadata = {
  title: 'Carevina | Contact Us',
  description:
    'Carevina provides compassionate, evidence-based behavioral health services in Shangri-La and online — therapy, counselling, and workplace mental health solutions for individuals and organisations.',
};

const Contact = () => {
  return (
    <>
      <ContactForm />
      <LocationMap />
      <Banner />
    </>
  );
};

export default Contact;
