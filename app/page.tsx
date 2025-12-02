import Banner from '@/components/banner';
import ConatctForm from '@/components/contact-form';
import Hero from './(home)/hero';
import Care from './(home)/care';
import Support from './(home)/support';
import Why from './(home)/why';

export default function Home() {
  return (
    <>
      <Hero />
      <Care />
      <Support />
      <Why />
      <Banner />
      <ConatctForm />
    </>
  );
}
