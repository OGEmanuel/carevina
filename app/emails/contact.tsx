import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactEmail = ({
  fullName,
  email,
  phone,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {fullName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765723466/logo_gebubs.png"
            width="120"
            height="40"
            alt="Carevina Logo"
            style={logo}
          />
          <Hr style={hr} />
          <Text style={heading}>New Contact Form Submission</Text>

          <Section style={section}>
            <Text style={label}>Name</Text>
            <Text style={value}>{fullName}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>

            <Text style={label}>Phone</Text>
            <Text style={value}>{phone}</Text>

            <Text style={label}>Message</Text>
            <Text style={value}>{message}</Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>© 2024 Carevina. All rights reserved.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f9fafb',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const box = {
  padding: '48px 40px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const logo = {
  margin: '0 auto 20px',
  display: 'block',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#1f2937',
  margin: '20px 0',
};

const section = {
  margin: '24px 0',
};

const label = {
  fontSize: '12px',
  fontWeight: '600',
  color: '#6b7280',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  margin: '16px 0 4px',
};

const value = {
  fontSize: '16px',
  color: '#1f2937',
  margin: '0',
  lineHeight: '1.6',
};

const link = {
  color: '#3b82f6',
  textDecoration: 'none',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};

const footer = {
  fontSize: '12px',
  color: '#9ca3af',
  textAlign: 'center' as const,
  margin: '0',
};

export default ContactEmail;
