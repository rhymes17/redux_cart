import asyncHandler from "express-async-handler"
import { User } from "../models/userModel.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

//@route    POST /api/users/register
//@desc     Register a new User
//@access   PUBLIC
const registerUser = asyncHandler( async (req, res) => {
    //Get all the fields
    const {username, fullname, email, password} = req.body
    
    //Validate the fields
    if(!username || !fullname || !email || !password){
        res.status(400)
        throw new Error("Please include all fields")
    }

    //Check if user already Exists
    const existingUser = await User.findOne({email})

    if(existingUser){
        res.status(400).json({
            message: "User already exits, Login instead!"
        })
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create the user
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        fullname
    })

    const createdUser = await User.findById(user._id).select("-password")

    if(createdUser){
        generateToken(res, createdUser._id)
        res.status(201).json({
            message: "User created successfully",
            data: createdUser
        })
    }else{
        res.status(500)
        throw new Error("User could not be created, Please try again later!")
    }
})

export {registerUser}