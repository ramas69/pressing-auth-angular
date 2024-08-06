export interface ICredentials{
    email:string;
    password:string;
    roles?: string[];
}

export interface IToken {
    token : string;
    expiresAt?: number; 
}

export interface IUser {
    email:string;
    password:string;
   }
