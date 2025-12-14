import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
} from '@react-email/components';

const CareerEmail = (formData: {
  fullName: string;
  resume: string;
  phone: string;
  email: string;
  position: string;
}) => {
  const { fullName, resume, phone, email, position } = formData;

  return (
    <Html>
      <Head />
      <Preview>New career application received</Preview>
      <Body
        style={{
          margin: '0',
          padding: '0',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f4f4f4',
        }}
      >
        <Container
          style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <Section>
            <Text
              style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}
            >
              New Application Submitted
            </Text>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              A new candidate has applied for the {position} position.
            </Text>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              Candidate Details:
            </Text>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              Name: {fullName}
            </Text>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              Phone: {phone}
            </Text>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              Email: {email}
            </Text>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              Position: {position}
            </Text>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              Resume: {resume}
            </Text>
          </Section>
          <Section style={{ marginTop: '20px' }}>
            <Text style={{ fontSize: '16px', color: '#555' }}>
              Please review the application and take appropriate action.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CareerEmail;
