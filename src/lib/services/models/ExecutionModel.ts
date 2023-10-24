import type { ExecutionTriggers as ExecutionTriggersType, ExecutionStatus as ExecutionStatusType, ExtraData } from "$lib/common/constants/types";
import { ExecutionStatus, ExecutionTriggers } from "$lib/common/constants/types";
import { parseEnumValue } from "$lib/common/utils";

class ExecutionModel<T> {
    $id: string
    $createdAt: string
    $updatedAt: string
    $permissions: string[]
    funtionId?: string
    trigger?: ExecutionTriggersType
    status: ExecutionStatusType
    requestMethod: string
    requestPath: string
    requestHeaders: ExtraData[]
    responseStatusCode: number
    responseBody: T;
    responseHeaders: ExtraData[]
    logs: string
    errors: string
    duration: number

    constructor(data: any){
        this.$id = data.$id || '';
        this.$createdAt = data.$createdAt || '';
        this.$updatedAt = data.$updatedAt || '';
        this.$permissions = data.$permissions || '';
        this.funtionId = data.function || '';
        this.trigger = this.parseTrigger(data.trigger);
        this.status = this.parseStatus(data.status);
        this.requestMethod = data.requestMethod || '';
        this.requestPath = data.requestPath || '';
        this.requestHeaders = this.parseHeaders(data.requestHeaders);
        this.responseStatusCode = data.responseStatusCode || 0;
        this.responseHeaders = data.responseBody || '';
        this.logs = data.logs || '';
        this.errors = data.errors || '';
        this.duration = data.duration || 0;
        this.responseBody = data.responseBody || '';
    }

    parseTrigger(trigger: string){
        return this.parseEnumValue(trigger, ExecutionTriggers)
    }

    parseStatus(status: string){
        return this.parseEnumValue(status, ExecutionStatus);
    }

    parseHeaders(headers: any[]){
        return headers || [];
    }

    parseEnumValue(value: string, enumType: any){
        return parseEnumValue(value, enumType);
    }
}

function createExecutionModel<T>(data: T){
    return new ExecutionModel<T>(data);
}

export { ExecutionModel, createExecutionModel }