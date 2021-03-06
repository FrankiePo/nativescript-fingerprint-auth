export interface VerifyFingerprintOptions {
  /**
   * The optional title in the fingerprint page for android.
   * Default: whatever the device default is ('Confirm your password' is likely)
   */
  title?: string;

  /**
   * The optional message in the fingerprint dialog on ios and page description on android.
   * Default: 'Scan your finger' on iOS and the device default on Android (which is likely 'Enter your device password to continue').
   */
  message?: string;
}

export interface VerifyFingerprintWithCustomFallbackOptions {
  /**
   * The optional message in the fingerprint dialog.
   * Default: 'Scan your finger'.
   */
  message?: string;

  /**
   * The optional button label when scanning the fingerprint fails.
   * Default: 'Enter password'.
   */
  fallbackMessage?: string;
}

//noinspection JSUnusedGlobalSymbols
export interface FingerprintAuthApi {
  available(): Promise<boolean>;
  didFingerprintDatabaseChange(): Promise<boolean>;
  /**
   * This (recommended) method uses keychain instead of localauth so the passcode fallback can be used.
   */
  verifyFingerprint(options: VerifyFingerprintOptions): Promise<string>;

  /**
   * This implementation uses LocalAuthentication and has no built-in passcode fallback on iOS.
   * On Android this is exactly the same as 'verifyFingerprint'
   */
  verifyFingerprintWithCustomFallback(options: VerifyFingerprintWithCustomFallbackOptions): Promise<string>;
}