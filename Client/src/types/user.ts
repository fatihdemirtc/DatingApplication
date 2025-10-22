export type User = {
    id: string;
    displayName: string;
    email: string;
    imageUrl?: string;
    token: string;
};

export type LoginCreds = {
    email: string;
    password?: string;
};

export type RegisterCreds = {
    email: string;
    password?: string;
    displayName: string;
    gender: string;
    dateOfBirth: string;
    city: string;
    country: string;
};