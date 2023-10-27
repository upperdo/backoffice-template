import BackendPlatform from "$lib/platforms";
import { LoggerUtility } from "$lib/common/logger/logger_utility";
import type { ExecutionListData } from "$lib/common/constants/types";
import { ExecutionModel } from "./models/ExecutionModel";

/**
 * @name listExecution
 * @param functionId 
 * @param logger
 * @description Get a list of all the current user function execution logs. You can use the query params to filter your results. 
 * @returns ExecutionListData<ExecutionModel<T>>[]
 */
export async function listExecutions<T>(functionId: string, logger: typeof LoggerUtility = LoggerUtility): Promise<ExecutionListData<ExecutionModel<T>>> {
    const filePath = "lib/services/functions/ listExecution"
    try {
        const result = await BackendPlatform.functions.listExecutions(functionId);

        const executions: ExecutionListData<ExecutionModel<T>> = {
            total: result.total,
            executions: result.executions.map((executionData) => new ExecutionModel<T>(executionData))
        }
    
        return executions
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }

        return {
            total: 0,
            executions: []
        }
    }
}

/**
 * @interface CreateExecutionParams
 * @property {string} functionId
 * @property {string} body
 * @property {typeof LoggerUtility} [logger]
 * @property {string} [method]
 * @property {object} [headers]
 * @property {boolean} [parse]
 */

export interface CreateExecutionParams {
    functionId: string;
    body?: object;
    logger?: typeof LoggerUtility;
    method?: string;
    headers?: object;
    parse?: boolean | false;
}

/**
 * @name createExecution
 * @param {CreateExecutionParams} params
 * @description Trigger a function execution. The returned object will return you the current execution status. You can ping the Get Execution endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously
 * @returns {Promise<ExecutionModel<T> | null>}
 */
export async function createExecution<T>(params: CreateExecutionParams): Promise<ExecutionModel<T>> {
    const { functionId, body = {}, logger = LoggerUtility, method = 'GET', headers, parse = false } = params;
    const filePath = "lib/services/functions/listExecution";

    try {
        const result = await BackendPlatform.functions.createExecution(functionId, JSON.stringify(body), false, '/', method, headers);
        const execution = new ExecutionModel<T>(result, parse);

        return execution;
    } catch (error) {
        if (error instanceof BackendPlatform.AppwriteException) {
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error occurred: ${error} in:`, filePath);
        }

        return new ExecutionModel<T>({});
    }
}

/**
 * @name getExecution
 * @param functionId 
 * @param executionId 
 * @param logger 
 * @description Get a function execution log by its unique ID.
 * @returns ExecutionModel<T> | null
 */
export async function getExecution<T>(functionId: string, executionId: string, logger: typeof LoggerUtility = LoggerUtility): Promise<ExecutionModel<T> | null> {
    const filePath = "lib/services/functions/ getExecution";

    try {
        const result = await BackendPlatform.functions.getExecution(functionId, executionId);
        const execution = new ExecutionModel<T>(result);

        return execution;
    }catch(error){
        if(error instanceof BackendPlatform.AppwriteException){
            logger.error(`Appwrite exception: ${error.message} in:`, filePath);
        } else {
            logger.error(`An error ocurred: ${error} in:`, filePath)
        }

        return null;
    }
}