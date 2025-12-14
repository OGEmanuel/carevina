import React from 'react';
import {
  Body,
  Button,
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

interface CareerReceiptEmailProps {
  fullName: string;
  position: string;
}

export const CareerReceiptEmail = ({
  fullName,
  position,
}: CareerReceiptEmailProps) => (
  <Html>
    <Head />
    <Preview>We've received your application — thank you</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Row>
            <Img
              src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765723466/logo_gebubs.png"
              alt="Carevina"
              width="160"
              height="auto"
              style={{ margin: '0 auto', marginBottom: '16px' }}
            />
          </Row>

          <Text style={heading}>
            Thanks, {fullName} — we've received your application
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            Thank you for applying for the <strong>{position}</strong> position
            at Carevina Health. We have received your application successfully
            and our recruitment team will review it shortly.
          </Text>

          <Text style={paragraph}>
            If your profile matches the role requirements, we will contact you
            with next steps. You don't need to take any action right now.
          </Text>

          <Section style={buttonContainer}>
            <Button style={button} href="https://carevinahealth.com/careers">
              View Careers
            </Button>
          </Section>

          <Hr style={hr} />

          <Text style={paragraph}>What happens next:</Text>
          <Text style={listItem}>
            ✓ Our team will review applications within a few weeks
          </Text>
          <Text style={listItem}>
            ✓ We may contact you to schedule an interview
          </Text>
          <Text style={listItem}>
            ✓ If you don't hear from us, you may follow up at
            info@carevinahealth.com
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            If you have any questions, please contact us at
            info@carevinahealth.com
          </Text>
          <Text style={footer}>Best regards,</Text>
          <Text style={footer}>
            <strong>The Carevina Team</strong>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const heading = {
  fontSize: '28px',
  lineHeight: '1.25',
  fontWeight: '700',
  color: '#10202B',
  margin: '18px 0 12px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#10202B',
  margin: '14px 0',
};

const listItem = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#10202B99',
  marginLeft: '20px',
  marginBottom: '8px',
};

const hr = {
  borderColor: '#F3F4F4',
  margin: '20px 0',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#56DCDF',
  borderRadius: '6px',
  color: '#10202B',
  fontSize: '16px',
  fontWeight: '700',
  padding: '12px 28px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
};

const footer = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#10202B99',
  margin: '8px 0',
};

export default CareerReceiptEmail;
