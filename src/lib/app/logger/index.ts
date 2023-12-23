export class ValidationError extends Error {
    private errors: Record<string, string | undefined>;

    constructor(errors: Record<string, string | undefined>){
        super('A validation error ocurred');
        this.errors = errors;
    }

    getErrors(){
        return this.errors;
    }
}