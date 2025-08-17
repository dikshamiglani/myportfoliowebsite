'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

// IMPORTANT: You need to replace this email with your own and verify it with Resend.
const TO_EMAIL = 'your.email@example.com';
const FROM_EMAIL = 'onboarding@resend.dev';

export async function sendContactMessage(formData: {name: string, email: string, message: string}) {
  if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return { success: false, error: 'Server configuration error. The API key is missing.'}
  }

  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const { name, email, message } = parsed.data;
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact Form <${FROM_EMAIL}>`,
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
