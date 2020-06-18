export interface Person {
    phoneNumber: string;
}

export interface User {
    userID: number;
    person: Person;
    userType: number;
    nickName: string;
    avatar: string;
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