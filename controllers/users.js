/*
ALL ROUTES FUNCTIONALITY AND LOGIC IS KEPT HERE IN THE CONTROLLERS FOLDER
*/

// UUID library generates unique user ID for every user
import { v4 as uuid4 } from "uuid";
let users = [];

// GET METHOD LOGIC
export const getUsers = (req, res) =>{
    res.send(users);
};

// POST METHOD LOGIC
export const createUser = (req, res) =>{
    const user = req.body;
    users.push({ ...user, id: uuid4() });  
    res.send(`User ${user.firstName} added to the database!`);
};

// GET USER ID LOGIC
export const getUserById = (req, res) =>{
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

// DELETE METHOD LOGIC
export const deleteUser = (req, res) =>{
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} has been deleted from the database!`);
};

// PUT METHOD LOGIC
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id == id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    res.send(`User with id ${id} has been updated.`);
};

