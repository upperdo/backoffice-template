import type { ExecutionTriggers as ExecutionTriggersType, ExecutionStatus as ExecutionStatusType, ExtraData } from "$lib/common/constants/types";
import { ExecutionStatus, ExecutionTriggers } from "$lib/common/constants/types";
import { parseEnumValue } from "$lib/common/utils";
import { boolean } from "zod";

/**
 * Class representing an execution model.
 * @template T - The type of the response body.
 */
class ExecutionModel<T> {
    /**
     * The unique identifier for the execution.
     */
    $id: string;
    
    /**
     * The creation date and time of the execution.
     */
    $createdAt: string;
    
    /**
     * The last update date and time of the execution.
     */
    $updatedAt: string;
    
    /**
     * An array of permissions associated with the execution.
     */
    $permissions: string[];
    
    /**
     * The function identifier associated with the execution, if available.
     */
    functionId?: string;
    
    /**
     * The trigger type of the execution.
     */
    trigger?: ExecutionTriggersType;
    
    /**
     * The status of the execution.
     */
    status: ExecutionStatusType;
    
    /**
     * The HTTP request method used for the execution.
     */
    requestMethod: string;
    
    /**
     * The request path used for the execution.
     */
    requestPath: string;
    
    /**
     * An array of request headers associated with the execution.
     */
    requestHeaders: ExtraData[];
    
    /**
     * The HTTP response status code received for the execution.
     */
    responseStatusCode: number;
    
    /**
     * The response body of the execution.
     */
    responseBody: T;
    
    /**
     * An array of response headers associated with the execution.
     */
    responseHeaders: ExtraData[];
    
    /**
     * The logs generated during the execution.
     */
    logs: string;
    
    /**
     * Any errors encountered during the execution.
     */
    errors: string;
    
    /**
     * The duration of the execution in milliseconds.
     */
    duration: number;

    /**
     * Create a new ExecutionModel instance.
     * @param data - Data for initializing the execution model.
     */
    constructor(data: any, parse: boolean = false) {
        this.$id = data.$id || '';
        this.$createdAt = data.$createdAt || '';
        this.$updatedAt = data.$updatedAt || '';
        this.$permissions = data.$permissions || '';
        this.functionId = data.functionId || '';
        this.trigger = data.trigger || '';
        this.status = data.status || '';
        this.requestMethod = data.requestMethod || '';
        this.requestPath = data.requestPath || '';
        this.requestHeaders = this.parseHeaders(data.requestHeaders);
        this.responseStatusCode = data.responseStatusCode || 0;
        this.responseHeaders = data.responseBody || '';
        this.logs = data.logs || '';
        this.errors = data.errors || '';
        this.duration = data.duration || 0;
        this.responseBody = parse? ExecutionModel.#parseBody(data.responseBody) : data.responseBody || '';
    }

    /**
     * Parse the execution trigger from a string representation.
     * @param trigger - The string representation of the trigger.
     * @returns The parsed trigger type.
     */
    parseTrigger(trigger: string) {
        return this.parseEnumValue(trigger, ExecutionTriggers);
    }

    /**
     * Parse the execution status from a string representation.
     * @param status - The string representation of the status.
     * @returns The parsed status type.
     */
    parseStatus(status: string) {
        return this.parseEnumValue(status, ExecutionStatus);
    }

    /**
     * Parse an array of execution headers.
     * @param headers - The array of execution headers.
     * @returns The parsed array of headers.
     */
    parseHeaders(headers: any[]) {
        return headers || [];
    }

    /**
     * Parse an enumeration value.
     * @param value - The value to parse.
     * @param enumType - The enumeration type.
     * @returns The parsed enumeration value.
     */
    parseEnumValue(value: string, enumType: any) {
        return parseEnumValue(value, enumType);
    }

    /**
     * 
     * @param data 
     * @returns 
     */
    static #parseBody(data: any){
        return JSON.parse(data);
    }

    /**
     * 
     * @param data 
     * @returns 
     */
    serialize(data: any){
        JSON.stringify(data)
    }

    /**
     * 
     * @param data 
     * @returns 
     */
    unserialize<T>(data: any): T{
        return JSON.parse(data);
    }
}

/**
 * Create a new execution model.
 * @template T - The type of the response body.
 * @param data - Data for initializing the execution model.
 * @returns A new ExecutionModel instance.
 */
function createExecutionModel<T>(data: T, parse: boolean = false) {
    return new ExecutionModel<T>(data, parse);
}

export { ExecutionModel, createExecutionModel };