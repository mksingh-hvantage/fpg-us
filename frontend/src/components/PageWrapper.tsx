import type { ReactNode } from 'react';
import Testimonials from './Testimonials';
import ContactFormSection from './ContactFormSection';

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      {children}
      <Testimonials />
      <ContactFormSection />
    </>
  );
}
 