export interface Work {
    id?: number;
    title: string;
    description: string;
    imageurl?: string;
    clientlink: string;
    isvisible?: boolean;
}

export interface User {
    id?: number;
    email: string;
}