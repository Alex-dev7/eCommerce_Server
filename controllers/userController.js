import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js'


// @desc  Auth user & get token
// @route POST /api/users/login 
// @access Public
const authUser= asyncHandler(async (req, res) => {
    res.send('auth users')
})


// @desc  Register user
// @route POST /api/users
// @access Public
const registerUser= asyncHandler(async (req, res) => {
    res.send('register users')
})



// @desc  LOGOUT user / clear cookie
// @route POST /api/users/logout
// @acces Privet
const logoutUser= asyncHandler(async (req, res) => {
    res.send('logout users')
})


// @desc  Get user profile 
// @route GET /api/users/profile
// @acces Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
})


// @desc  Update user profile 
// @route GET /api/users/profile
// @acces Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile')
})


// @desc  Get all users
// @route GET /api/users
// @acces Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users')
})



// @desc  Get user by id
// @route GET /api/users/:id
// @acces Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
    res.send('get user by id')
})



// @desc  Delete users
// @route DELETE /api/users/:id
// @acces Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user')
})



// @desc  update user
// @route PUT /api/users/:id
// @acces Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user')
})


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser

}