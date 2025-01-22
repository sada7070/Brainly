import { Router } from "express";
import z from "zod";
import jwt from "jsonwebtoken";
import { userModel } from "../db";
import bcrypt from "bcrypt";

const router = Router();


router.post("/signup", async(req, res) => {
    const { userName, password } = req.body;

    const requiredBody = z.object({
        userName: z.string().min(4).max(30),
        password: z.string().min(4).max(15)
    });

    const parseData = requiredBody.safeParse(req.body);

    if(!parseData.success) {
        res.status(411).json({
            message: "Incorrect format.",
            error: parseData.error
        });
        return;
    }

    try{
        const existingUser = await userModel.findOne({ userName });

        // checking whether user already exist or not.
        if(existingUser) {
            res.status(409).json({
                message: "Username already exist. Try different one."
            });
            return;
        }

        // Hashing password.
        const hashedPassword = await bcrypt.hash(password, 5);

        // adding user into DB
        const user = userModel.create({
            userName,
            password: hashedPassword
        });

        const userId = (await user)._id;
        console.log(userId);

        // generating token.
        const token = jwt.sign({
            userId
        }, process.env.JWT_SECRET!);

        res.status(200).json({
            message: "You are successfully Signed up.",
            token: token
        });
    } catch(error){
        console.error("error during Sign up: ", error);
        res.status(500).json({
            message: "Internal server error."
        });
    }
})

export default router;