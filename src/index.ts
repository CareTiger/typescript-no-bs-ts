import { User } from "./types";

let user: User = {
    name: "John Doe",
    age: 30,
    isAdmin: false,
    courses: ["JavaScript", "TypeScript", "Angular", "React"],
};

export default function helloWorld() {
    console.log("Hello World!");
    console.log(user);    
}

helloWorld();
