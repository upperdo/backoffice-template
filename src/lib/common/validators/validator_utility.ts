/**
 * @class
 * @name Validators
 * @description A utility class for common input validation.
 */
class Validators {
    /**
     * Validate an email address.
     *
     * @param {string} email - The email address to validate.
     * @returns {string | null} - An error message if validation fails, or `null` if valid.
     */
    static validateEmail(email: string):string | null {
      if (!email) {
        return 'Email is required.';
      }
  
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        return 'Invalid email format.';
      }
  
      return null; // No error message, email is valid
    }
  
    /**
     * Validate a password.
     *
     * @param {string} password - The password to validate.
     * @returns {string | null} - An error message if validation fails, or `null` if valid.
     */
    static validatePassword(password: string, length: number = 8): string | null {
      if (!password) {
        return 'Password is required.';
      }
  
      if (password.length < length) {
        return 'Password must be at least 8 characters long.';
      }
  
      return null; // No error message, password is valid
    }
  
    /**
     * Validate a phone number.
     *
     * @param {string} phoneNumber - The phone number to validate.
     * @returns {string | null} - An error message if validation fails, or `null` if valid.
     */
    static validatePhoneNumber(phoneNumber: string): string | null {
      if (!phoneNumber) {
        return 'Phone number is required.';
      }
  
      const phoneRegex = /^\d{10}$/; // Example: 10-digit phone number
      if (!phoneRegex.test(phoneNumber)) {
        return 'Invalid phone number format.';
      }
  
      return null; // No error message, phone number is valid
    }
  }