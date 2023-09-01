import { MyUser, MyUserOptional } from "../types";

let user: MyUser = {
    id: 1,
    name: "John Doe",
    age: 30,
    isAdmin: false,
    courses: ["JavaScript", "TypeScript", "Angular", "React"],
};

let userOptional: MyUserOptional = {
    id: 1,
    name: "John Doe",
};
