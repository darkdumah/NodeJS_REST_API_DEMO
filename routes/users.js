import express from "express";
import {getUsers, createUser, getUserById, deleteUser, updateUser} from "../controllers/users.js";
const router = express.Router();

//-GET all users in DB------------
router.get('/', getUsers);

//--CREATE new user---------------
router.post('/', createUser);

//--GET individual user by ID-----
router.get('/:id', getUserById);

//--DELETE user using ID filter---
router.delete('/:id', deleteUser);

//--UPDATE user data--------------
router.patch('/:id', updateUser);


export default router;