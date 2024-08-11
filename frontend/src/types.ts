export interface Work {
    id?: number;
    title: string;
    description: string;
    imageUrl?: string;
    clientLink: string;
    isVisible?: boolean;
}

export interface User {
    id?: number;
    email: string;
}