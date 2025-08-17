'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

// This is the email address where you will receive messages.
const TO_EMAIL = 'dikshamiglani06@gmail.com';

export async function sendContactMessage(formData: {name: string, email: string, message: string}) {
  if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return { success: false, error: 'Server configuration error. The API key is missing.'}
  }

  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const errorDetails = parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join(', ');
    console.error('Invalid form data:', errorDetails);
    return { success: false, error: 'Invalid form data.' };
  }

  const { name, email, message } = parsed.data;
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [TO_EMAIL],
      reply_to: email,
      subject: `New message from ${name} via your portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to send email.' };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
