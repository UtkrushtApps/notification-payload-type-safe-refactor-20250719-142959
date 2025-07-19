import { createPayload, serializePayload } from './utils/serializer';
import { NotificationPayload } from './types/notifications';

// --- These examples demonstrate how only the correct fields are permissible ---

// Valid: Email
const emailExample = createPayload('email', {
  emailAddress: 'user@example.com',
  subject: 'Welcome!',
  textBody: 'Thanks for signing up.',
  htmlBody: '<p>Thanks for signing up.</p>',
  cc: ['cc@example.com'],
});

// Valid: SMS
const smsExample = createPayload('sms', {
  phoneNumber: '+1234567890',
  message: 'Your code is 123456',
});

// Valid: In-app
const inappExample = createPayload('inapp', {
  userId: 'abcd-1234',
  title: 'New Feature!',
  body: 'Check out our new dashboard.',
  url: '/dashboard',
});

// --- TypeScript will prevent the following wrong usages (uncomment to see errors) ---
// createPayload('sms', { emailAddress: 'not allowed', message: 'oops', phoneNumber: '+1999' });
// createPayload('email', { phoneNumber: '+123', subject: 'err', textBody: 'no', emailAddress: 'a', message: 'not allowed' });

// --- Serialize ---
console.log('Serialized Email:', serializePayload(emailExample));
console.log('Serialized SMS:', serializePayload(smsExample));
console.log('Serialized In-app:', serializePayload(inappExample));