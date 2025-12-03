import Banner from '@/components/banner';
import ConatctForm from '@/components/contact-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carevina | Contact Us',
  description:
    'Carevina provides compassionate, evidence-based behavioral health services in Lagos and online — therapy, counselling, and workplace mental health solutions for individuals and organisations.',
};

const Contact = () => {
  return (
    <>
      <ConatctForm header="Contact Us" />
      <Banner />
    </>
  );
};

export default Contact;
