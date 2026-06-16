'use server';

import { signIn, signOut } from "@/auth";
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
        console.log(`Error: `)
        console.log(err);
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

export async function LogoutAction()
{
    await signOut({redirectTo: '/'})
}