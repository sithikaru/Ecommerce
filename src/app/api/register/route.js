import connectToDB from "@/database";
import User from "@/models/user";
import { hash } from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";


const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    role: Joi.string().valid("user", "admin").required()
})

export const dynamic = "force-dynamic";

export async function POST(req) {

    await connectToDB();

    const { name, email, password, role } = await req.json();

    const { error } = schema.validate({ name, email, password, role });

    if (error) {
        return NextResponse.json({
            success: false,
            message: error.details[0].message
        });
    }

    try{
        //check if the user is exist or not
        const isUserAlreadyExist = await User.findOne({ email });

        if (isUserAlreadyExist) {
            return NextResponse.json({
                success: false,
                message: "User already exist, Try with another Email"
            })
            }
            else{
                const hashPassword = await hash(password, 12);

                const newlyCreatedUser = await User.create({
                    name,
                    email,
                    password: hashPassword,
                    role
                })

                if(newlyCreatedUser){
                    return NextResponse.json({
                        success: true,
                        message: "User Account created successfully"
                    })
                }
        }
    }catch(error){
        console.log("Error in new user Registration");
        return NextResponse.json({
            success: false,
            message: "Error in new user Registration"
        });
    }
}


