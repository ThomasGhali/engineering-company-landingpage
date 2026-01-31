'use server';

import { contactFormSchema, FormState } from '@/features/contact-us/types';

import prisma from '@/lib/prisma';

import { headers } from 'next/headers';

import { aj } from '@/lib/arcjet';

export async function submitContactForm(
  prevState: FormState,
  formData: unknown,
): Promise<FormState> {
  const req = new Request('https://localhost', {
    headers: await headers(),
  });

  const decision = await aj.protect(req, {
    requested: 1,
    fingerprint: 'testing-user-123',
  });

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return {
        success: false,
        error: 'Too many requests. Please Try again in an hour.',
        message: null,
      };
    }

    if (decision.reason.isBot()) {
      return {
        success: false,
        error: 'Bot activity detected',
        message: null,
      };
    }

    return {
      success: false,
      error: 'Request denied',
      message: null,
    };
  }

  // make sure formData is in right type (in runtime)
  if (!(formData instanceof FormData)) {
    return {
      success: false,
      error: 'Invalid form data',
      message: null,
    };
  }

  const rawData = Object.fromEntries(formData.entries());

  const result = contactFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      error: 'Invalid form data',
      fieldErrors: result.error.flatten().fieldErrors,
      message: null,
    };
  }

  const validatedData = result.data;

  try {
    await prisma.messages.create({
      data: validatedData,
    });

    return {
      success: true,
      error: null,
      fieldErrors: undefined,
      message: 'Message sent successfully!',
    };
  } catch (error) {
    return {
      success: false,
      error: 'Database error',
      fieldErrors: undefined,
      message: 'Failed to save message.',
    };
  }
}
