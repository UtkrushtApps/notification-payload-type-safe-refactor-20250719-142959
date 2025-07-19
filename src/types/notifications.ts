// Discriminated union types for notification channels
export type NotificationChannel = 'email' | 'sms' | 'inapp';

export interface EmailPayload {
  channel: 'email';
  emailAddress: string;
  subject: string;
  htmlBody?: string;
  textBody: string;
  cc?: string[];
  bcc?: string[];
}

export interface SmsPayload {
  channel: 'sms';
  phoneNumber: string;
  message: string;
}

export interface InAppPayload {
  channel: 'inapp';
  userId: string;
  title: string;
  body: string;
  url?: string;
}

export type NotificationPayload =
  | EmailPayload
  | SmsPayload
  | InAppPayload;

// Mapped type keyed by channel
export type ChannelPayloadMap = {
  email: EmailPayload;
  sms: SmsPayload;
  inapp: InAppPayload;
};

// Helper to get payload by channel type
type ChannelPayload<C extends NotificationChannel> = ChannelPayloadMap[C];