// type declarations
export type MyUser = {
    id: number;
    name: string;
    age: number;
    email?: string;
    isAdmin: boolean;
    courses: string[];
};

export type MyUserOptional = Partial<MyUser>;
