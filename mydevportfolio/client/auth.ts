import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import {z} from "zod";
import { pool } from "./lib/db";
import bcrypt from 'bcrypt';
import { log } from "console";

async function getUser(email:string)
{
    // log(`We are in getUser: ${email}`);
    try
    {
        const data = await pool.query(`SELECT * FROM "users" WHERE email = $1;`, [email])
        return data.rows[0]; // select thhe first object in the array of data.rows: [{}]
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        throw new Error('Failed to fetch user.')
    }
}

export const {auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                // console.log('in auth.ts on authorized() function');
                // console.log("credentials");
                // console.log(credentials);
                const parsedCredentials  = z // zod is used to check if email and password are given | the format is correct: our case string
                    .object({ email: z.email(), password: z.string().min(6) })
                    .safeParse({
                        email: credentials.username,
                        password: credentials.password,
                    });
                // log(`this is parsedCredentials`);
                // log(parsedCredentials);

                if (parsedCredentials.success)
                {
                    const {email, password} = parsedCredentials.data;
                    // log(`In if condition for parsedCredentials:`);
                    // log(`email:${email}\npassword:${password}`)
                    const user = await getUser(email);
                    // console.log(`user: `);
                    // console.log(user);
                    if (!user) return null; // defensive programming
                    const passwordMatch = await bcrypt.compare(password, user.userpasswd); // compares the password
                    // console.log(`passwordMatch: ${passwordMatch}`);
                    if (passwordMatch) return user; 
                }
                else 
                {
                    log("Did not pass : zod credentials");

                }
                return null; // if parsed credentials

            }
        })
    ]
})