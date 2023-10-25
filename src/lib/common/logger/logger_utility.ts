import { DebugStore } from "$lib/ui/widgets/debug-bar/store/DebugStore";
import { UpdateDebugStore } from "$lib/ui/widgets/debug-bar/store/DebugStore";
import { get } from "svelte/store";

const currentLogs = get(DebugStore);
let newLogList: any[] = [];

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
      const logMessage = {
        type: 'info',
        message: `(${filePath}) ${JSON.stringify(property)} [MESSAGE] ${message}`
      };
       this.logToDebugConsole(logMessage)
      console.log(`[INFO] (${filePath}) ${JSON.stringify(property)} [MESSAGE] ${message}`);
    }

    static logToDebugConsole(log: any){
        if(currentLogs?.logs){
            if(currentLogs.logs.length > 0){
              newLogList = [...currentLogs.logs, log];
              currentLogs.logs = newLogList;
            }else{
              
              newLogList = [log];
              currentLogs.logs = newLogList;
            }
        }else{
          newLogList = [log];
          currentLogs.logs = newLogList;
        }

        UpdateDebugStore(currentLogs);
    }
  
    /**
     * Log a warning message.
     *
     * @param {string} message - The warning message.
     */
    static warning(message: string, filePath: string = ''): void {
      const logMessage = {
        type: 'warning',
        message: `(${filePath}): ${message}`
      };
      this.logToDebugConsole(logMessage)
      console.warn(`[WARNING] (${filePath}): ${message}`);
    }
  
    /**
     * Log an error message.
     *
     * @param {string} message - The error message.
     */
    static error(message: string, filePath: string = ''): void {
      const logMessage = {
        type: 'error',
        message: `(${filePath}): ${message}`
      };
      this.logToDebugConsole(logMessage)
      console.error(`[ERROR] (${filePath}): ${message}`);
    }
  
    /**
     * Log a debug message.
     *
     * @param {string} message - The debug message.
     */
    static debug(message: string, filePath: string = ''): void {
      const logMessage = {
        type: 'debug',
        message: `(${filePath}): ${message}`
      };
      this.logToDebugConsole(logMessage)
      console.debug(`[DEBUG] (${filePath}): ${message}`);
    }
  }