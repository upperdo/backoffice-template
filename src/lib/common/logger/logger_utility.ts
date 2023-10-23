/**
 * @class
 * @name LoggerUtility
 * @description A utility class for logging messages with annotations.
 */
export class LoggerUtility {
    /**
     * Log an informational message.
     *
     * @param {string} message - The message to log.
     */
    static info(message: string, property: any = '', filePath: string = ''): void {
      console.log(`[INFO] (${filePath}) ${JSON.stringify(property)} [MESSAGE] ${message}`);
    }
  
    /**
     * Log a warning message.
     *
     * @param {string} message - The warning message.
     */
    static warning(message: string, filePath: string = ''): void {
      console.warn(`[WARNING] (${filePath}): ${message}`);
    }
  
    /**
     * Log an error message.
     *
     * @param {string} message - The error message.
     */
    static error(message: string, filePath: string = ''): void {
      console.error(`[ERROR] (${filePath}): ${message}`);
    }
  
    /**
     * Log a debug message.
     *
     * @param {string} message - The debug message.
     */
    static debug(message: string, filePath: string = ''): void {
      console.debug(`[DEBUG] (${filePath}): ${message}`);
    }
  }