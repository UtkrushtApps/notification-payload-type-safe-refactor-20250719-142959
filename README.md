# Task Overview
A SaaS platform's notification service is being migrated to TypeScript for better reliability. The challenge is that previously, payload properties for Email, SMS, and In-app notifications were not properly separated by channel—leading to type confusion and bugs. The system must now enforce strict type safety for all notification payloads so that each channel only allows its accepted fields.

# Guidance
- Ensure that each notification channel enforces only its required and optional properties at the type level.
- Use TypeScript discriminated unions, mapped types, and conditional types where appropriate.
- Implement a utility function for building (serializing) notifications that only accepts valid payloads for the target channel.
- Ensure automated tools like IntelliSense guide developers to only valid fields for each channel.
- Prevent compile-time and runtime errors by leveraging TypeScript's advanced type safety features.

# Objectives
- Refactor the notification types so that only the valid fields for each channel can be set and accessed.
- Implement a payload builder/serializer that guarantees only type-correct, valid payloads can be built and sent.
- Ensure errors are caught at compile time for mixing up fields between notification channels.
- Demonstrate (and verify) strict type enforcement for all notification payloads and their serialization.

# How to Verify
- Only fields valid for a specific channel can be set in the payloads—TypeScript should disallow others at compile time.
- Attempts to assign or access properties not valid for a given channel result in type errors.
- Serialization of each payload produces correct output for each channel without runtime errors.
- Running the demo shows valid, strictly typed payloads for each channel and serializes them without issues.
