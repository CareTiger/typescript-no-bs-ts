import { MyUser } from "./types";
// import * as UtilityTypes from "./utility-types";

let user: MyUser = {
    id: 1,
    name: "John Doe",
    age: 30,
    isAdmin: false,
    courses: ["JavaScript", "TypeScript", "Angular", "React"],
};

function helloWorld() {
    console.log(user);
}

helloWorld();
