import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface EnquiryEmailProps {
  fullName: string;
  address: string;
  phone: string;
  email: string;
  typeOfService: string;
}

export default function EnquiryEmail({
  fullName,
  address,
  phone,
  email,
  typeOfService,
}: EnquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New service enquiry from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765723466/logo_gebubs.png"
              alt="Company Logo"
              style={logo}
            />
            <Text style={heading}>New Service Enquiry</Text>
            <Hr style={hr} />

            <Row>
              <Text style={label}>Full Name</Text>
              <Text style={value}>{fullName}</Text>
            </Row>

            <Row>
              <Text style={label}>Email</Text>
              <Text style={value}>{email}</Text>
            </Row>

            <Row>
              <Text style={label}>Phone</Text>
              <Text style={value}>{phone}</Text>
            </Row>

            <Row>
              <Text style={label}>Address</Text>
              <Text style={value}>{address}</Text>
            </Row>

            <Row>
              <Text style={label}>Type of Service</Text>
              <Text style={value}>
                {typeOfService
                  .toLowerCase()
                  .trim()
                  .split('-')
                  .filter(Boolean)
                  .map(word =>
                    word === 'and'
                      ? '&'
                      : word[0].toUpperCase() + word.slice(1),
                  )
                  .join(' ')}
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const logo = {
  height: '40px',
  margin: '0 0 24px 0',
};

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const heading = {
  fontSize: '24px',
  fontWeight: '700',
  margin: '16px 0',
  padding: '0',
  color: '#10202B',
};

const hr = {
  borderColor: '#F3F4F4',
  margin: '20px 0',
};

const label = {
  fontSize: '12px',
  fontWeight: '600',
  color: '#10202B99',
  margin: '0 0 8px 0',
};

const value = {
  fontSize: '14px',
  color: '#10202B',
  margin: '0 0 16px 0',
};
