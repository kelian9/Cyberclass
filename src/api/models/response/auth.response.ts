export interface Person {
    name: string;
}

export interface User {
    userID: number;
    person: Person;
    userType: number;
}

export interface Token {
    token: string;
    expireDate: Date;
}

export interface AuthResponse {
    user: User,
    token: Token
}

export interface RegisterResponse extends User {}