import { NotificationChannel, ChannelPayloadMap, NotificationPayload } from '../types/notifications';

/**
 * Utility function to construct a payload for a notification channel in a type-safe way.
 * Throws at runtime if required fields are missing or of wrong type (as a secondary check),
 * but type safety should prevent errors at compile time.
 */
export function createPayload<C extends NotificationChannel>(
  channel: C,
  payload: Omit<ChannelPayloadMap[C], 'channel'>
): ChannelPayloadMap[C] {
  // At runtime, reinforce the type (secondary check for any misuse)
  switch (channel) {
    case 'email': {
      const { emailAddress, subject, textBody } = payload as any;
      if (typeof emailAddress !== 'string' || typeof subject !== 'string' || typeof textBody !== 'string') {
        throw new Error('Missing or invalid required fields for email payload');
      }
      break;
    }
    case 'sms': {
      const { phoneNumber, message } = payload as any;
      if (typeof phoneNumber !== 'string' || typeof message !== 'string') {
        throw new Error('Missing or invalid required fields for sms payload');
      }
      break;
    }
    case 'inapp': {
      const { userId, title, body } = payload as any;
      if (typeof userId !== 'string' || typeof title !== 'string' || typeof body !== 'string') {
        throw new Error('Missing or invalid required fields for inapp payload');
      }
      break;
    }
    default:
      throw new Error('Unknown channel');
  }
  return { channel, ...payload } as ChannelPayloadMap[C];
}

/**
 * Serialize payload for sending (e.g. to API or MQ). Only allows valid channel payloads.
 */
export function serializePayload(payload: NotificationPayload): string {
  return JSON.stringify(payload);
}