'use server';

import { signIn } from "@/auth";
import { log } from "console";
import { AuthError } from "next-auth";


export async function authenticate(
    prevState: string | undefined, 
    formData: FormData
)
{
    // log("In Action.ts file");
    // log("prevState");
    // log(prevState);

    // log("formData");
    // log(formData);
    try 
    {
        await signIn('credentials', formData)
    }   
    catch(err)
    {
        if (err instanceof AuthError)
        {switch(err.type) {
            case 'CredentialsSignin':
                return "Invalid credentials!"
            default: 
                return "Something went wrong!"
        }}
        throw err;
    }
}