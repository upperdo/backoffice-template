import { createSlug } from "$lib/app/utils";

export class AccountEntity<T> {
    private readonly $id: string;
    private readonly name: string;
    private readonly email: string;
    private readonly labels: string[];
    private readonly preferences: T;
    private readonly phone: string;
    private readonly $createdAt: Date;
    private readonly $updateAt: Date;
    constructor({ 
        $id, 
        name, 
        email = '', 
        labels = [], 
        preferences, 
        phone, 
        $createdAt,
         $updateAt }
    : { 
        $id: string, 
        name: string, 
        email: string, 
        labels: string[], 
        preferences: T, 
        phone: string, 
        $createdAt: Date, 
        $updateAt: Date
    }){
        this.$id = $id;
        this.name = name;
        this.email = email,
        this.labels = labels,
        this.preferences = preferences,
        this.phone = phone,
        this.$createdAt = $createdAt,
        this.$updateAt = $updateAt
    }

    get accountId(){
        return this.$id;
    }

    get accountName(){
        return this.name;
    }

    get accountEmail(){
        return this.email;
    }

    get accountLabels(){
        return this.labels;
    }

    get accountPhone(){
        return this.phone;
    }

    get accountPreferences(): T{
        return this.preferences;
    }

    get accountCreatedAt(){
        return new Date(this.$createdAt);
    }

    get accountUpdatedAt(){
        return new Date(this.$updateAt);
    }

    createSlug(value: string){
        return createSlug(value);
    }

    get accountSlug(){
        return this.createSlug(this.name);
    }
}