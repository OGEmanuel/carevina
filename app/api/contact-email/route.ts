import ContactEmail from '@/app/emails/contact';
import EnquiryEmail from '@/app/emails/enquiry';
import { ThankYouEmail } from '@/app/emails/thank-you';
import { JSX } from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, phone, email, message } = await req.json();

    if (!fullName || !phone || !email) {
      return new Response(
        JSON.stringify({
          error: 'Full name, phone, and email are required fields.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const ownerEmail = 'Carevina Health <info@carevinahealth.com>';

    // Function to send emails
    const sendEmail = async ({
      to,
      subject,
      reactTemplate,
    }: {
      to: string;
      subject: string;
      reactTemplate: JSX.Element;
    }) => {
      await resend.emails.send({
        from: ownerEmail,
        to,
        subject,
        react: reactTemplate,
      });
    };

    // Send ThankYou email to form filler
    await sendEmail({
      to: email,
      subject: "We've received your message! - Carevina Behavioral Health",
      reactTemplate: ThankYouEmail({ fullName }),
    });

    // Send Notice email to the owner
    await sendEmail({
      to: ownerEmail,
      subject: `New Form Submission from ${fullName}`,
      reactTemplate: ContactEmail({
        fullName,
        phone,
        email,
        message,
      }),
    });

    return new Response(
      JSON.stringify({ success: 'Emails sent successfully.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error: any) {
    console.error('Error occurred:', error);

    return new Response(
      JSON.stringify({
        error: 'An unexpected error occurred. Please try again later.',
        details: error.message || 'Unknown error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
