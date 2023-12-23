export class ExecutionEntity<T> {
    private readonly $id: string;
    private readonly status: string;
    private readonly $createdAt: Date;
    private readonly $updatedAt: Date;
    private readonly responseBody: T;
    private readonly errors: string;

    constructor(
        {
            $id,
            status,
            $createdAt,
            $updatedAt,
            responseBody,
            errors
        }: {
            $id: string,
            status: string,
            $createdAt: Date,
            $updatedAt: Date,
            responseBody: T,
            errors: string
        }
    ){
        this.$id = $id,
        this.status = status,
        this.$createdAt = $createdAt,
        this.$updatedAt = $updatedAt,
        this.responseBody = responseBody,
        this.errors = errors
    }

    get executionId(){
        return this.$id;
    }
    get executionStatus(){
        return this.status;
    }
    get executionCreatedAt(){
        return new Date(this.$createdAt);
    }
    get executionUpdatedAt(){
        return new Date(this.$updatedAt);
    }
    get executionResponseBody(){
        return this.responseBody;
    }
    get executionErrors(){
        return this.errors;
    }

}